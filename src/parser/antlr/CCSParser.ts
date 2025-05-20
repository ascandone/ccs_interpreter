// @ts-nocheck
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
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly LINE_COMMENT = 14;
	public static readonly NEWLINE = 15;
	public static readonly WS = 16;
	public static readonly EVT_ID = 17;
	public static readonly PROC_ID = 18;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_proc = 0;
	public static readonly RULE_seqProc = 1;
	public static readonly RULE_evtType = 2;
	public static readonly RULE_choiceClause = 3;
	public static readonly RULE_defParams = 4;
	public static readonly RULE_def = 5;
	public static readonly RULE_program = 6;
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'0'", "'('", 
                                                            "')'", "'+'", 
                                                            "'\\'", "'{'", 
                                                            "','", "'}'", 
                                                            "'?'", "'!'", 
                                                            "'.'", "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "LINE_COMMENT", 
                                                             "NEWLINE", 
                                                             "WS", "EVT_ID", 
                                                             "PROC_ID" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"proc", "seqProc", "evtType", "choiceClause", "defParams", "def", "program",
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
	public proc(): ProcContext {
		let localctx: ProcContext = new ProcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CCSParser.RULE_proc);
		try {
			this.state = 19;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				localctx = new ParContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				(localctx as ParContext)._left = this.seqProc(0);
				this.state = 15;
				this.match(CCSParser.T__0);
				this.state = 16;
				(localctx as ParContext)._right = this.proc();
				}
				break;
			case 2:
				localctx = new SeqContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 18;
				this.seqProc(0);
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

	public seqProc(): SeqProcContext;
	public seqProc(_p: number): SeqProcContext;
	// @RuleVersion(0)
	public seqProc(_p?: number): SeqProcContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SeqProcContext = new SeqProcContext(this, this._ctx, _parentState);
		let _prevctx: SeqProcContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, CCSParser.RULE_seqProc, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
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
			case 18:
				{
				localctx = new ProcIdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 23;
				this.match(CCSParser.PROC_ID);
				this.state = 25;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 24;
					this.defParams();
					}
					break;
				}
				}
				break;
			case 3:
				{
				localctx = new ParenthesizedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 27;
				this.match(CCSParser.T__2);
				this.state = 28;
				this.proc();
				this.state = 29;
				this.match(CCSParser.T__3);
				}
				break;
			case 17:
				{
				localctx = new ChoiceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 31;
				this.choiceClause();
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 32;
						this.match(CCSParser.T__4);
						this.state = 33;
						this.choiceClause();
						}
						}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 58;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 56;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new RestrictionContext(this, new SeqProcContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CCSParser.RULE_seqProc);
						this.state = 41;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 42;
						this.match(CCSParser.T__5);
						this.state = 43;
						this.match(CCSParser.EVT_ID);
						}
						break;
					case 2:
						{
						localctx = new RestrictionSugarContext(this, new SeqProcContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CCSParser.RULE_seqProc);
						this.state = 44;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 45;
						this.match(CCSParser.T__5);
						this.state = 46;
						this.match(CCSParser.T__6);
						this.state = 47;
						this.match(CCSParser.EVT_ID);
						this.state = 52;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===8) {
							{
							{
							this.state = 48;
							this.match(CCSParser.T__7);
							this.state = 49;
							this.match(CCSParser.EVT_ID);
							}
							}
							this.state = 54;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 55;
						this.match(CCSParser.T__8);
						}
						break;
					}
					}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				localctx = new ReceiveContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.match(CCSParser.T__9);
				}
				break;
			case 11:
				localctx = new SendContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.match(CCSParser.T__10);
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
			this.state = 65;
			this.match(CCSParser.EVT_ID);
			this.state = 66;
			this.evtType();
			this.state = 67;
			this.match(CCSParser.T__11);
			this.state = 68;
			this.seqProc(0);
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
			this.state = 70;
			this.match(CCSParser.T__2);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 71;
				this.match(CCSParser.EVT_ID);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 72;
					this.match(CCSParser.T__7);
					this.state = 73;
					this.match(CCSParser.EVT_ID);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 81;
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
			this.state = 83;
			this.match(CCSParser.PROC_ID);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 84;
				this.defParams();
				}
			}

			this.state = 87;
			this.match(CCSParser.T__12);
			this.state = 88;
			this.proc();
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
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 90;
				this.def();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
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
			return this.seqProc_sempred(localctx as SeqProcContext, predIndex);
		}
		return true;
	}
	private seqProc_sempred(localctx: SeqProcContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,18,99,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,3,0,20,
	8,0,1,1,1,1,1,1,1,1,3,1,26,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,35,8,1,10,
	1,12,1,38,9,1,3,1,40,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,51,8,1,
	10,1,12,1,54,9,1,1,1,5,1,57,8,1,10,1,12,1,60,9,1,1,2,1,2,3,2,64,8,2,1,3,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,75,8,4,10,4,12,4,78,9,4,3,4,80,8,4,
	1,4,1,4,1,5,1,5,3,5,86,8,5,1,5,1,5,1,5,1,6,5,6,92,8,6,10,6,12,6,95,9,6,
	1,6,1,6,1,6,0,1,2,7,0,2,4,6,8,10,12,0,0,105,0,19,1,0,0,0,2,39,1,0,0,0,4,
	63,1,0,0,0,6,65,1,0,0,0,8,70,1,0,0,0,10,83,1,0,0,0,12,93,1,0,0,0,14,15,
	3,2,1,0,15,16,5,1,0,0,16,17,3,0,0,0,17,20,1,0,0,0,18,20,3,2,1,0,19,14,1,
	0,0,0,19,18,1,0,0,0,20,1,1,0,0,0,21,22,6,1,-1,0,22,40,5,2,0,0,23,25,5,18,
	0,0,24,26,3,8,4,0,25,24,1,0,0,0,25,26,1,0,0,0,26,40,1,0,0,0,27,28,5,3,0,
	0,28,29,3,0,0,0,29,30,5,4,0,0,30,40,1,0,0,0,31,36,3,6,3,0,32,33,5,5,0,0,
	33,35,3,6,3,0,34,32,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,
	40,1,0,0,0,38,36,1,0,0,0,39,21,1,0,0,0,39,23,1,0,0,0,39,27,1,0,0,0,39,31,
	1,0,0,0,40,58,1,0,0,0,41,42,10,2,0,0,42,43,5,6,0,0,43,57,5,17,0,0,44,45,
	10,1,0,0,45,46,5,6,0,0,46,47,5,7,0,0,47,52,5,17,0,0,48,49,5,8,0,0,49,51,
	5,17,0,0,50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,
	1,0,0,0,54,52,1,0,0,0,55,57,5,9,0,0,56,41,1,0,0,0,56,44,1,0,0,0,57,60,1,
	0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,3,1,0,0,0,60,58,1,0,0,0,61,64,5,10,
	0,0,62,64,5,11,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,5,1,0,0,0,65,66,5,17,
	0,0,66,67,3,4,2,0,67,68,5,12,0,0,68,69,3,2,1,0,69,7,1,0,0,0,70,79,5,3,0,
	0,71,76,5,17,0,0,72,73,5,8,0,0,73,75,5,17,0,0,74,72,1,0,0,0,75,78,1,0,0,
	0,76,74,1,0,0,0,76,77,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,79,71,1,0,0,0,
	79,80,1,0,0,0,80,81,1,0,0,0,81,82,5,4,0,0,82,9,1,0,0,0,83,85,5,18,0,0,84,
	86,3,8,4,0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,13,0,0,88,
	89,3,0,0,0,89,11,1,0,0,0,90,92,3,10,5,0,91,90,1,0,0,0,92,95,1,0,0,0,93,
	91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,97,5,0,0,1,97,13,
	1,0,0,0,12,19,25,36,39,52,56,58,63,76,79,85,93];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCSParser.__ATN) {
			CCSParser.__ATN = new ATNDeserializer().deserialize(CCSParser._serializedATN);
		}

		return CCSParser.__ATN;
	}


	static DecisionsToDFA = CCSParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProcContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_proc;
	}
	public override copyFrom(ctx: ProcContext): void {
		super.copyFrom(ctx);
	}
}
export class ParContext extends ProcContext {
	public _left!: SeqProcContext;
	public _right!: ProcContext;
	constructor(parser: CCSParser, ctx: ProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqProc(): SeqProcContext {
		return this.getTypedRuleContext(SeqProcContext, 0) as SeqProcContext;
	}
	public proc(): ProcContext {
		return this.getTypedRuleContext(ProcContext, 0) as ProcContext;
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
export class SeqContext extends ProcContext {
	constructor(parser: CCSParser, ctx: ProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqProc(): SeqProcContext {
		return this.getTypedRuleContext(SeqProcContext, 0) as SeqProcContext;
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


export class SeqProcContext extends ParserRuleContext {
	constructor(parser?: CCSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CCSParser.RULE_seqProc;
	}
	public override copyFrom(ctx: SeqProcContext): void {
		super.copyFrom(ctx);
	}
}
export class NilContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
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
export class ParenthesizedContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public proc(): ProcContext {
		return this.getTypedRuleContext(ProcContext, 0) as ProcContext;
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
export class ProcIdContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PROC_ID(): TerminalNode {
		return this.getToken(CCSParser.PROC_ID, 0);
	}
	public defParams(): DefParamsContext {
		return this.getTypedRuleContext(DefParamsContext, 0) as DefParamsContext;
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterProcId) {
	 		listener.enterProcId(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitProcId) {
	 		listener.exitProcId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitProcId) {
			return visitor.visitProcId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RestrictionContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqProc(): SeqProcContext {
		return this.getTypedRuleContext(SeqProcContext, 0) as SeqProcContext;
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
export class ChoiceContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
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
export class RestrictionSugarContext extends SeqProcContext {
	constructor(parser: CCSParser, ctx: SeqProcContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public seqProc(): SeqProcContext {
		return this.getTypedRuleContext(SeqProcContext, 0) as SeqProcContext;
	}
	public EVT_ID_list(): TerminalNode[] {
	    	return this.getTokens(CCSParser.EVT_ID);
	}
	public EVT_ID(i: number): TerminalNode {
		return this.getToken(CCSParser.EVT_ID, i);
	}
	public enterRule(listener: CCSListener): void {
	    if(listener.enterRestrictionSugar) {
	 		listener.enterRestrictionSugar(this);
		}
	}
	public exitRule(listener: CCSListener): void {
	    if(listener.exitRestrictionSugar) {
	 		listener.exitRestrictionSugar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCSVisitor<Result>): Result {
		if (visitor.visitRestrictionSugar) {
			return visitor.visitRestrictionSugar(this);
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
	public seqProc(): SeqProcContext {
		return this.getTypedRuleContext(SeqProcContext, 0) as SeqProcContext;
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
	public PROC_ID(): TerminalNode {
		return this.getToken(CCSParser.PROC_ID, 0);
	}
	public proc(): ProcContext {
		return this.getTypedRuleContext(ProcContext, 0) as ProcContext;
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
