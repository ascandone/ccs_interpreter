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
	public static readonly T__10 = 11;
	public static readonly LINE_COMMENT = 12;
	public static readonly NEWLINE = 13;
	public static readonly WS = 14;
	public static readonly EVT_ID = 15;
	public static readonly AGENT_ID = 16;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_agent = 0;
	public static readonly RULE_seqAgent = 1;
	public static readonly RULE_evtType = 2;
	public static readonly RULE_choiceClause = 3;
	public static readonly RULE_defParams = 4;
	public static readonly RULE_def = 5;
	public static readonly RULE_program = 6;
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'0'", "'('", 
                                                            "')'", "'+'", 
                                                            "'\\'", "'?'", 
                                                            "'!'", "'.'", 
                                                            "','", "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "LINE_COMMENT", 
                                                             "NEWLINE", 
                                                             "WS", "EVT_ID", 
                                                             "AGENT_ID" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"agent", "seqAgent", "evtType", "choiceClause", "defParams", "def", "program",
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
			this.state = 19;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				localctx = new ParContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				(localctx as ParContext)._left = this.seqAgent(0);
				this.state = 15;
				this.match(CCSParser.T__0);
				this.state = 16;
				(localctx as ParContext)._right = this.agent();
				}
				break;
			case 2:
				localctx = new SeqContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 18;
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
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				localctx = new NilContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 22;
				this.match(CCSParser.T__1);
				}
				break;
			case 16:
				{
				localctx = new AgentIdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 23;
				this.match(CCSParser.AGENT_ID);
				}
				break;
			case 3:
				{
				localctx = new ParenthesizedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 24;
				this.match(CCSParser.T__2);
				this.state = 25;
				this.agent();
				this.state = 26;
				this.match(CCSParser.T__3);
				}
				break;
			case 15:
				{
				localctx = new ChoiceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 28;
				this.choiceClause();
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 29;
						this.match(CCSParser.T__4);
						this.state = 30;
						this.choiceClause();
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 43;
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
					this.state = 38;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 39;
					this.match(CCSParser.T__5);
					this.state = 40;
					this.match(CCSParser.EVT_ID);
					}
					}
				}
				this.state = 45;
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
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				localctx = new ReceiveContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 46;
				this.match(CCSParser.T__6);
				}
				break;
			case 8:
				localctx = new SendContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 47;
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
			this.state = 50;
			this.match(CCSParser.EVT_ID);
			this.state = 51;
			this.evtType();
			this.state = 52;
			this.match(CCSParser.T__8);
			this.state = 53;
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
	public defParams(): DefParamsContext {
		let localctx: DefParamsContext = new DefParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CCSParser.RULE_defParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(CCSParser.T__2);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 56;
				this.match(CCSParser.EVT_ID);
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 57;
					this.match(CCSParser.T__9);
					this.state = 58;
					this.match(CCSParser.EVT_ID);
					}
					}
					this.state = 63;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 66;
			this.match(CCSParser.T__3);
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
		this.enterRule(localctx, 10, CCSParser.RULE_def);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(CCSParser.AGENT_ID);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 69;
				this.defParams();
				}
			}

			this.state = 72;
			this.match(CCSParser.T__10);
			this.state = 73;
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
		this.enterRule(localctx, 12, CCSParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 75;
				this.def();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 81;
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

	public static readonly _serializedATN: number[] = [4,1,16,84,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,3,0,20,
	8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,
	3,1,37,8,1,1,1,1,1,1,1,5,1,42,8,1,10,1,12,1,45,9,1,1,2,1,2,3,2,49,8,2,1,
	3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,60,8,4,10,4,12,4,63,9,4,3,4,65,8,
	4,1,4,1,4,1,5,1,5,3,5,71,8,5,1,5,1,5,1,5,1,6,5,6,77,8,6,10,6,12,6,80,9,
	6,1,6,1,6,1,6,0,1,2,7,0,2,4,6,8,10,12,0,0,87,0,19,1,0,0,0,2,36,1,0,0,0,
	4,48,1,0,0,0,6,50,1,0,0,0,8,55,1,0,0,0,10,68,1,0,0,0,12,78,1,0,0,0,14,15,
	3,2,1,0,15,16,5,1,0,0,16,17,3,0,0,0,17,20,1,0,0,0,18,20,3,2,1,0,19,14,1,
	0,0,0,19,18,1,0,0,0,20,1,1,0,0,0,21,22,6,1,-1,0,22,37,5,2,0,0,23,37,5,16,
	0,0,24,25,5,3,0,0,25,26,3,0,0,0,26,27,5,4,0,0,27,37,1,0,0,0,28,33,3,6,3,
	0,29,30,5,5,0,0,30,32,3,6,3,0,31,29,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,
	33,34,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,36,21,1,0,0,0,36,23,1,0,0,0,36,
	24,1,0,0,0,36,28,1,0,0,0,37,43,1,0,0,0,38,39,10,1,0,0,39,40,5,6,0,0,40,
	42,5,15,0,0,41,38,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,
	3,1,0,0,0,45,43,1,0,0,0,46,49,5,7,0,0,47,49,5,8,0,0,48,46,1,0,0,0,48,47,
	1,0,0,0,49,5,1,0,0,0,50,51,5,15,0,0,51,52,3,4,2,0,52,53,5,9,0,0,53,54,3,
	0,0,0,54,7,1,0,0,0,55,64,5,3,0,0,56,61,5,15,0,0,57,58,5,10,0,0,58,60,5,
	15,0,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,65,1,
	0,0,0,63,61,1,0,0,0,64,56,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,5,4,
	0,0,67,9,1,0,0,0,68,70,5,16,0,0,69,71,3,8,4,0,70,69,1,0,0,0,70,71,1,0,0,
	0,71,72,1,0,0,0,72,73,5,11,0,0,73,74,3,0,0,0,74,11,1,0,0,0,75,77,3,10,5,
	0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,
	80,78,1,0,0,0,81,82,5,0,0,1,82,13,1,0,0,0,9,19,33,36,43,48,61,64,70,78];

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


export class DefParamsContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EVT_ID_list(): TerminalNode[] {
	    	return this.getTokens(CCSParser.EVT_ID);
	}
	public EVT_ID(i: number): TerminalNode {
		return this.getToken(CCSParser.EVT_ID, i);
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_defParams;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterDefParams) {
	 		listener.enterDefParams(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitDefParams) {
	 		listener.exitDefParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitDefParams) {
			return visitor.visitDefParams(this);
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
	public defParams(): DefParamsContext {
		return this.getTypedRuleContext(DefParamsContext, 0) as DefParamsContext;
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
