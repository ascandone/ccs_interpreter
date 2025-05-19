// Generated from CCS.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ParContext } from "./CCSParser.js";
import { SeqContext } from "./CCSParser.js";
import { NilContext } from "./CCSParser.js";
import { AgentIdContext } from "./CCSParser.js";
import { ParenthesizedContext } from "./CCSParser.js";
import { RestrictionContext } from "./CCSParser.js";
import { ChoiceContext } from "./CCSParser.js";
import { ReceiveContext } from "./CCSParser.js";
import { SendContext } from "./CCSParser.js";
import { ChoiceClauseContext } from "./CCSParser.js";
import { DefParamsContext } from "./CCSParser.js";
import { DefContext } from "./CCSParser.js";
import { ProgramContext } from "./CCSParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CCSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CCSVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `par`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPar?: (ctx: ParContext) => Result;
	/**
	 * Visit a parse tree produced by the `seq`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeq?: (ctx: SeqContext) => Result;
	/**
	 * Visit a parse tree produced by the `nil`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNil?: (ctx: NilContext) => Result;
	/**
	 * Visit a parse tree produced by the `agentId`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgentId?: (ctx: AgentIdContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesized`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesized?: (ctx: ParenthesizedContext) => Result;
	/**
	 * Visit a parse tree produced by the `restriction`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestriction?: (ctx: RestrictionContext) => Result;
	/**
	 * Visit a parse tree produced by the `choice`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice?: (ctx: ChoiceContext) => Result;
	/**
	 * Visit a parse tree produced by the `receive`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceive?: (ctx: ReceiveContext) => Result;
	/**
	 * Visit a parse tree produced by the `send`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSend?: (ctx: SendContext) => Result;
	/**
	 * Visit a parse tree produced by `CCSParser.choiceClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceClause?: (ctx: ChoiceClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `CCSParser.defParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefParams?: (ctx: DefParamsContext) => Result;
	/**
	 * Visit a parse tree produced by `CCSParser.def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef?: (ctx: DefContext) => Result;
	/**
	 * Visit a parse tree produced by `CCSParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
}

