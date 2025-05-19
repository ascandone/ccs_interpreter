// Generated from CCS.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CCSListener from "./CCSListener.js";
import CCSVisitor from "./CCSVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CCSParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly LINE_COMMENT = 11;
	public static readonly NEWLINE = 12;
	public static readonly WS = 13;
	public static readonly EVT_ID = 14;
	public static readonly AGENT_ID = 15;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_agent = 0;
	public static readonly RULE_seqAgent = 1;
	public static readonly RULE_evtType = 2;
	public static readonly RULE_choiceClause = 3;
	public static readonly RULE_def = 4;
	public static readonly RULE_program = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'0'", "'('", 
                                                            "')'", "'+'", 
                                                            "'\\'", "'?'", 
                                                            "'!'", "'.'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "LINE_COMMENT", 
                                                             "NEWLINE", 
                                                             "WS", "EVT_ID", 
                                                             "AGENT_ID" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"agent", "seqAgent", "evtType", "choiceClause", "def", "program",
	];
	public get grammarFileName(): string { return "CCS.g4"; }
	public get literalNames(): (string | null)[] { return CCSParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CCSParser.symbolicNames; }
	public get ruleNames(): string[] { return CCSParser.ruleNames; }
	public get serializedATN(): number[] { return CCSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CCSParser._ATN, CCSParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public agent(): AgentContext {
		let localctx: AgentContext = new AgentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CCSParser.RULE_agent);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				localctx = new ParContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 12;
				(localctx as ParContext)._left = this.seqAgent(0);
				this.state = 13;
				this.match(CCSParser.T__0);
				this.state = 14;
				(localctx as ParContext)._right = this.agent();
				}
				break;
			case 2:
				localctx = new SeqContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 16;
				this.seqAgent(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public seqAgent(): SeqAgentContext;
	public seqAgent(_p: number): SeqAgentContext;
	// @RuleVersion(0)
	public seqAgent(_p?: number): SeqAgentContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SeqAgentContext = new SeqAgentContext(this, this._ctx, _parentState);
		let _prevctx: SeqAgentContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, CCSParser.RULE_seqAgent, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				localctx = new NilContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 20;
				this.match(CCSParser.T__1);
				}
				break;
			case 15:
				{
				localctx = new AgentIdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 21;
				this.match(CCSParser.AGENT_ID);
				}
				break;
			case 3:
				{
				localctx = new ParenthesizedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 22;
				this.match(CCSParser.T__2);
				this.state = 23;
				this.agent();
				this.state = 24;
				this.match(CCSParser.T__3);
				}
				break;
			case 14:
				{
				localctx = new ChoiceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 26;
				this.choiceClause();
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 27;
						this.match(CCSParser.T__4);
						this.state = 28;
						this.choiceClause();
						}
						}
					}
					this.state = 33;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 41;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new RestrictionContext(this, new SeqAgentContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, CCSParser.RULE_seqAgent);
					this.state = 36;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 37;
					this.match(CCSParser.T__5);
					this.state = 38;
					this.match(CCSParser.EVT_ID);
					}
					}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public evtType(): EvtTypeContext {
		let localctx: EvtTypeContext = new EvtTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CCSParser.RULE_evtType);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				localctx = new ReceiveContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 44;
				this.match(CCSParser.T__6);
				}
				break;
			case 8:
				localctx = new SendContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 45;
				this.match(CCSParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceClause(): ChoiceClauseContext {
		let localctx: ChoiceClauseContext = new ChoiceClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CCSParser.RULE_choiceClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(CCSParser.EVT_ID);
			this.state = 49;
			this.evtType();
			this.state = 50;
			this.match(CCSParser.T__8);
			this.state = 51;
			this.agent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public def(): DefContext {
		let localctx: DefContext = new DefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CCSParser.RULE_def);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(CCSParser.AGENT_ID);
			this.state = 54;
			this.match(CCSParser.T__9);
			this.state = 55;
			this.agent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CCSParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 57;
				this.def();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(CCSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.seqAgent_sempred(localctx as SeqAgentContext, predIndex);
		}
		return true;
	}
	private seqAgent_sempred(localctx: SeqAgentContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,15,66,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,0,1,0,3,0,18,8,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,3,1,35,
	8,1,1,1,1,1,1,1,5,1,40,8,1,10,1,12,1,43,9,1,1,2,1,2,3,2,47,8,2,1,3,1,3,
	1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,5,5,59,8,5,10,5,12,5,62,9,5,1,5,1,5,1,5,
	0,1,2,6,0,2,4,6,8,10,0,0,67,0,17,1,0,0,0,2,34,1,0,0,0,4,46,1,0,0,0,6,48,
	1,0,0,0,8,53,1,0,0,0,10,60,1,0,0,0,12,13,3,2,1,0,13,14,5,1,0,0,14,15,3,
	0,0,0,15,18,1,0,0,0,16,18,3,2,1,0,17,12,1,0,0,0,17,16,1,0,0,0,18,1,1,0,
	0,0,19,20,6,1,-1,0,20,35,5,2,0,0,21,35,5,15,0,0,22,23,5,3,0,0,23,24,3,0,
	0,0,24,25,5,4,0,0,25,35,1,0,0,0,26,31,3,6,3,0,27,28,5,5,0,0,28,30,3,6,3,
	0,29,27,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,35,1,0,0,0,
	33,31,1,0,0,0,34,19,1,0,0,0,34,21,1,0,0,0,34,22,1,0,0,0,34,26,1,0,0,0,35,
	41,1,0,0,0,36,37,10,1,0,0,37,38,5,6,0,0,38,40,5,14,0,0,39,36,1,0,0,0,40,
	43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,3,1,0,0,0,43,41,1,0,0,0,44,47,
	5,7,0,0,45,47,5,8,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,5,1,0,0,0,48,49,5,
	14,0,0,49,50,3,4,2,0,50,51,5,9,0,0,51,52,3,0,0,0,52,7,1,0,0,0,53,54,5,15,
	0,0,54,55,5,10,0,0,55,56,3,0,0,0,56,9,1,0,0,0,57,59,3,8,4,0,58,57,1,0,0,
	0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,
	63,64,5,0,0,1,64,11,1,0,0,0,6,17,31,34,41,46,60];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCSParser.__ATN) {
			CCSParser.__ATN = new ATNDeserializer().deserialize(CCSParser._serializedATN);
		}

		return CCSParser.__ATN;
	}


	static DecisionsToDFA = CCSParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class AgentContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_agent;
	}
	public override copyFrom(ctx: AgentContext): void {
		super.copyFrom(ctx);
	}
}
export class ParContext extends AgentContext {
	public _left!: SeqAgentContext;
	public _right!: AgentContext;
	constructor(parser: CCSParser, ctx: AgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqAgent(): SeqAgentContext {
		return this.getTypedRuleContext(SeqAgentContext, 0) as SeqAgentContext;
	}
	public agent(): AgentContext {
		return this.getTypedRuleContext(AgentContext, 0) as AgentContext;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterPar) {
	 		listener.enterPar(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitPar) {
	 		listener.exitPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitPar) {
			return visitor.visitPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SeqContext extends AgentContext {
	constructor(parser: CCSParser, ctx: AgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqAgent(): SeqAgentContext {
		return this.getTypedRuleContext(SeqAgentContext, 0) as SeqAgentContext;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterSeq) {
	 		listener.enterSeq(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitSeq) {
	 		listener.exitSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitSeq) {
			return visitor.visitSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeqAgentContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_seqAgent;
	}
	public override copyFrom(ctx: SeqAgentContext): void {
		super.copyFrom(ctx);
	}
}
export class NilContext extends SeqAgentContext {
	constructor(parser: CCSParser, ctx: SeqAgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterNil) {
	 		listener.enterNil(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitNil) {
	 		listener.exitNil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitNil) {
			return visitor.visitNil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AgentIdContext extends SeqAgentContext {
	constructor(parser: CCSParser, ctx: SeqAgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AGENT_ID(): TerminalNode {
		return this.getToken(CCSParser.AGENT_ID, 0);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterAgentId) {
	 		listener.enterAgentId(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitAgentId) {
	 		listener.exitAgentId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitAgentId) {
			return visitor.visitAgentId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedContext extends SeqAgentContext {
	constructor(parser: CCSParser, ctx: SeqAgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public agent(): AgentContext {
		return this.getTypedRuleContext(AgentContext, 0) as AgentContext;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterParenthesized) {
	 		listener.enterParenthesized(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitParenthesized) {
	 		listener.exitParenthesized(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitParenthesized) {
			return visitor.visitParenthesized(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RestrictionContext extends SeqAgentContext {
	constructor(parser: CCSParser, ctx: SeqAgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqAgent(): SeqAgentContext {
		return this.getTypedRuleContext(SeqAgentContext, 0) as SeqAgentContext;
	}
	public EVT_ID(): TerminalNode {
		return this.getToken(CCSParser.EVT_ID, 0);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterRestriction) {
	 		listener.enterRestriction(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitRestriction) {
	 		listener.exitRestriction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitRestriction) {
			return visitor.visitRestriction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ChoiceContext extends SeqAgentContext {
	constructor(parser: CCSParser, ctx: SeqAgentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public choiceClause_list(): ChoiceClauseContext[] {
		return this.getTypedRuleContexts(ChoiceClauseContext) as ChoiceClauseContext[];
	}
	public choiceClause(i: number): ChoiceClauseContext {
		return this.getTypedRuleContext(ChoiceClauseContext, i) as ChoiceClauseContext;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterChoice) {
	 		listener.enterChoice(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitChoice) {
	 		listener.exitChoice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitChoice) {
			return visitor.visitChoice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvtTypeContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_evtType;
	}
	public override copyFrom(ctx: EvtTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ReceiveContext extends EvtTypeContext {
	constructor(parser: CCSParser, ctx: EvtTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterReceive) {
	 		listener.enterReceive(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitReceive) {
	 		listener.exitReceive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitReceive) {
			return visitor.visitReceive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SendContext extends EvtTypeContext {
	constructor(parser: CCSParser, ctx: EvtTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterSend) {
	 		listener.enterSend(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitSend) {
	 		listener.exitSend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitSend) {
			return visitor.visitSend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceClauseContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EVT_ID(): TerminalNode {
		return this.getToken(CCSParser.EVT_ID, 0);
	}
	public evtType(): EvtTypeContext {
		return this.getTypedRuleContext(EvtTypeContext, 0) as EvtTypeContext;
	}
	public agent(): AgentContext {
		return this.getTypedRuleContext(AgentContext, 0) as AgentContext;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_choiceClause;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterChoiceClause) {
	 		listener.enterChoiceClause(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitChoiceClause) {
	 		listener.exitChoiceClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitChoiceClause) {
			return visitor.visitChoiceClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AGENT_ID(): TerminalNode {
		return this.getToken(CCSParser.AGENT_ID, 0);
	}
	public agent(): AgentContext {
		return this.getTypedRuleContext(AgentContext, 0) as AgentContext;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_def;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterDef) {
	 		listener.enterDef(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitDef) {
	 		listener.exitDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitDef) {
			return visitor.visitDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(CCSParser.EOF, 0);
	}
	public def_list(): DefContext[] {
		return this.getTypedRuleContexts(DefContext) as DefContext[];
	}
	public def(i: number): DefContext {
		return this.getTypedRuleContext(DefContext, i) as DefContext;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_program;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
