import antlr4, { ErrorListener } from "antlr4";
import Lexer from "./parser/antlr/CCSLexer";
import Parser, * as parser from "./parser/antlr/CCSParser";
import Visitor from "./parser/antlr/CCSVisitor";
import * as ast from "./ast";

class AgentVisitor extends Visitor<ast.Agent> {
  visitSeq = (ctx: parser.SeqContext): ast.Agent => this.visit(ctx.seqAgent());

  visitParenthesized = (ctx: parser.ParenthesizedContext): ast.Agent =>
    this.visit(ctx.agent());

  visitNil = (): ast.Agent => ({
    type: "empty",
  });
  visitPar = (ctx: parser.ParContext): ast.Agent => ({
    type: "par",
    left: this.visit(ctx._left),
    right: this.visit(ctx._right),
  });
  visitChoice = (ctx: parser.ChoiceContext): ast.Agent => ({
    type: "choice",
    clauses: ctx.choiceClause_list().map((ctx): ast.SelectClause => {
      const evtType: ast.SelectClause["type"] =
        ctx.evtType().ruleContext instanceof parser.ReceiveContext
          ? "receive"
          : "send";

      return {
        type: evtType,
        evt: ctx.EVT_ID().getText(),
        after: new AgentVisitor().visit(ctx.seqAgent()),
      };
    }) as ast.NonEmptyArr<ast.SelectClause>,
  });
  visitRestriction = (ctx: parser.RestrictionContext): ast.Agent => ({
    type: "restriction",
    label: ctx.EVT_ID().getText(),
    agent: this.visit(ctx.seqAgent()),
  });
  visitAgentId = (ctx: parser.AgentIdContext): ast.Agent => ({
    type: "ident",
    args:
      ctx
        .defParams()
        ?.EVT_ID_list()
        ?.map((t) => t.getText()) ?? [],
    name: ctx.AGENT_ID().getText(),
  });
}

export class AntlrParsingError {
  constructor(public readonly description: string) {}
}

export type ParseResult = {
  parsed: ast.Program;
  errors: AntlrParsingError[];
};

class LexerErrorListener extends ErrorListener<number> {
  errors: AntlrParsingError[] = [];

  syntaxError(
    _recognizer: antlr4.Recognizer<number>,
    _offendingSymbol: number,
    _line: number,
    _column: number,
    msg: string,
    // _e: antlr4.RecognitionException | undefined
  ): void {
    this.errors.push(new AntlrParsingError(msg));
  }
}

class ParsingErrorListener extends ErrorListener<antlr4.Token> {
  errors: AntlrParsingError[] = [];

  syntaxError(
    _recognizer: antlr4.Recognizer<antlr4.Token>,
    _offendingSymbol: antlr4.Token,
    _line: number,
    _column: number,
    msg: string,
  ): void {
    this.errors.push(new AntlrParsingError(msg));
  }
}

export function parse(input: string): ParseResult {
  const chars = new antlr4.CharStream(input);
  const lexer = new Lexer(chars);

  const lexerErrorListener = new LexerErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);

  const tkStream = new antlr4.CommonTokenStream(lexer);
  const parser = new Parser(tkStream);

  const parsingErrorListener = new ParsingErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parsingErrorListener);

  const declCtx = parser.program();

  const declarations = declCtx.def_list().map((d): ast.Definition => {
    return {
      name: d.AGENT_ID().getText(),
      params:
        d
          .defParams()
          ?.EVT_ID_list()
          ?.map((t) => t.getText()) ?? [],

      agent: new AgentVisitor().visit(d.agent()),
    };
  });

  return {
    parsed: declarations,
    errors: [...parsingErrorListener.errors, ...lexerErrorListener.errors],
  };
}

export class ParsingError extends Error {}
export function unsafeParse(input: string): ast.Program {
  const parsed = parse(input);
  if (parsed.errors.length !== 0) {
    throw new ParsingError(`Parsing error: ${parsed.errors[0]!.description}`);
  }

  return parsed.parsed;
}
