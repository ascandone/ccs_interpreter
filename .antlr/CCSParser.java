// Generated from /Users/alessandro/Documents/dev/prototypes/ccs_interpreter/CCS.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CCSParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, NEWLINE=11, WS=12, EVT_ID=13, AGENT_ID=14;
	public static final int
		RULE_agent = 0, RULE_seqAgent = 1, RULE_evtType = 2, RULE_choiceClause = 3, 
		RULE_def = 4, RULE_program = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"agent", "seqAgent", "evtType", "choiceClause", "def", "program"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'|'", "'0'", "'('", "')'", "'+'", "'\\'", "'?'", "'!'", "'.'", 
			"'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "NEWLINE", 
			"WS", "EVT_ID", "AGENT_ID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CCS.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CCSParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AgentContext extends ParserRuleContext {
		public AgentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_agent; }
	 
		public AgentContext() { }
		public void copyFrom(AgentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParContext extends AgentContext {
		public SeqAgentContext left;
		public AgentContext right;
		public SeqAgentContext seqAgent() {
			return getRuleContext(SeqAgentContext.class,0);
		}
		public AgentContext agent() {
			return getRuleContext(AgentContext.class,0);
		}
		public ParContext(AgentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SeqContext extends AgentContext {
		public SeqAgentContext seqAgent() {
			return getRuleContext(SeqAgentContext.class,0);
		}
		public SeqContext(AgentContext ctx) { copyFrom(ctx); }
	}

	public final AgentContext agent() throws RecognitionException {
		AgentContext _localctx = new AgentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_agent);
		try {
			setState(17);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				_localctx = new ParContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(12);
				((ParContext)_localctx).left = seqAgent(0);
				setState(13);
				match(T__0);
				setState(14);
				((ParContext)_localctx).right = agent();
				}
				break;
			case 2:
				_localctx = new SeqContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(16);
				seqAgent(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeqAgentContext extends ParserRuleContext {
		public SeqAgentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seqAgent; }
	 
		public SeqAgentContext() { }
		public void copyFrom(SeqAgentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NilContext extends SeqAgentContext {
		public NilContext(SeqAgentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AgentIdContext extends SeqAgentContext {
		public TerminalNode AGENT_ID() { return getToken(CCSParser.AGENT_ID, 0); }
		public AgentIdContext(SeqAgentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenthesizedContext extends SeqAgentContext {
		public AgentContext agent() {
			return getRuleContext(AgentContext.class,0);
		}
		public ParenthesizedContext(SeqAgentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RestrictionContext extends SeqAgentContext {
		public SeqAgentContext seqAgent() {
			return getRuleContext(SeqAgentContext.class,0);
		}
		public TerminalNode EVT_ID() { return getToken(CCSParser.EVT_ID, 0); }
		public RestrictionContext(SeqAgentContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ChoiceContext extends SeqAgentContext {
		public List<ChoiceClauseContext> choiceClause() {
			return getRuleContexts(ChoiceClauseContext.class);
		}
		public ChoiceClauseContext choiceClause(int i) {
			return getRuleContext(ChoiceClauseContext.class,i);
		}
		public ChoiceContext(SeqAgentContext ctx) { copyFrom(ctx); }
	}

	public final SeqAgentContext seqAgent() throws RecognitionException {
		return seqAgent(0);
	}

	private SeqAgentContext seqAgent(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SeqAgentContext _localctx = new SeqAgentContext(_ctx, _parentState);
		SeqAgentContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_seqAgent, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				_localctx = new NilContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(20);
				match(T__1);
				}
				break;
			case AGENT_ID:
				{
				_localctx = new AgentIdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				match(AGENT_ID);
				}
				break;
			case T__2:
				{
				_localctx = new ParenthesizedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(22);
				match(T__2);
				setState(23);
				agent();
				setState(24);
				match(T__3);
				}
				break;
			case EVT_ID:
				{
				_localctx = new ChoiceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(26);
				choiceClause();
				setState(31);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(27);
						match(T__4);
						setState(28);
						choiceClause();
						}
						} 
					}
					setState(33);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(41);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new RestrictionContext(new SeqAgentContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_seqAgent);
					setState(36);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(37);
					match(T__5);
					setState(38);
					match(EVT_ID);
					}
					} 
				}
				setState(43);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EvtTypeContext extends ParserRuleContext {
		public EvtTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_evtType; }
	 
		public EvtTypeContext() { }
		public void copyFrom(EvtTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReceiveContext extends EvtTypeContext {
		public ReceiveContext(EvtTypeContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SendContext extends EvtTypeContext {
		public SendContext(EvtTypeContext ctx) { copyFrom(ctx); }
	}

	public final EvtTypeContext evtType() throws RecognitionException {
		EvtTypeContext _localctx = new EvtTypeContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_evtType);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				_localctx = new ReceiveContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				match(T__6);
				}
				break;
			case T__7:
				_localctx = new SendContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				match(T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ChoiceClauseContext extends ParserRuleContext {
		public TerminalNode EVT_ID() { return getToken(CCSParser.EVT_ID, 0); }
		public EvtTypeContext evtType() {
			return getRuleContext(EvtTypeContext.class,0);
		}
		public AgentContext agent() {
			return getRuleContext(AgentContext.class,0);
		}
		public ChoiceClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choiceClause; }
	}

	public final ChoiceClauseContext choiceClause() throws RecognitionException {
		ChoiceClauseContext _localctx = new ChoiceClauseContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_choiceClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(EVT_ID);
			setState(49);
			evtType();
			setState(50);
			match(T__8);
			setState(51);
			agent();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefContext extends ParserRuleContext {
		public TerminalNode AGENT_ID() { return getToken(CCSParser.AGENT_ID, 0); }
		public AgentContext agent() {
			return getRuleContext(AgentContext.class,0);
		}
		public DefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_def; }
	}

	public final DefContext def() throws RecognitionException {
		DefContext _localctx = new DefContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(AGENT_ID);
			setState(54);
			match(T__9);
			setState(55);
			agent();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CCSParser.EOF, 0); }
		public List<DefContext> def() {
			return getRuleContexts(DefContext.class);
		}
		public DefContext def(int i) {
			return getRuleContext(DefContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AGENT_ID) {
				{
				{
				setState(57);
				def();
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(63);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return seqAgent_sempred((SeqAgentContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean seqAgent_sempred(SeqAgentContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000eB\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0003\u0000\u0012\b\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001\u001e\b\u0001\n\u0001\f\u0001!\t\u0001\u0003\u0001"+
		"#\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001(\b\u0001\n\u0001"+
		"\f\u0001+\t\u0001\u0001\u0002\u0001\u0002\u0003\u0002/\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0005\u0005;\b\u0005\n\u0005\f\u0005"+
		">\t\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0000\u0001\u0002\u0006"+
		"\u0000\u0002\u0004\u0006\b\n\u0000\u0000C\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0002\"\u0001\u0000\u0000\u0000\u0004.\u0001\u0000\u0000\u0000"+
		"\u00060\u0001\u0000\u0000\u0000\b5\u0001\u0000\u0000\u0000\n<\u0001\u0000"+
		"\u0000\u0000\f\r\u0003\u0002\u0001\u0000\r\u000e\u0005\u0001\u0000\u0000"+
		"\u000e\u000f\u0003\u0000\u0000\u0000\u000f\u0012\u0001\u0000\u0000\u0000"+
		"\u0010\u0012\u0003\u0002\u0001\u0000\u0011\f\u0001\u0000\u0000\u0000\u0011"+
		"\u0010\u0001\u0000\u0000\u0000\u0012\u0001\u0001\u0000\u0000\u0000\u0013"+
		"\u0014\u0006\u0001\uffff\uffff\u0000\u0014#\u0005\u0002\u0000\u0000\u0015"+
		"#\u0005\u000e\u0000\u0000\u0016\u0017\u0005\u0003\u0000\u0000\u0017\u0018"+
		"\u0003\u0000\u0000\u0000\u0018\u0019\u0005\u0004\u0000\u0000\u0019#\u0001"+
		"\u0000\u0000\u0000\u001a\u001f\u0003\u0006\u0003\u0000\u001b\u001c\u0005"+
		"\u0005\u0000\u0000\u001c\u001e\u0003\u0006\u0003\u0000\u001d\u001b\u0001"+
		"\u0000\u0000\u0000\u001e!\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000"+
		"\u0000\u0000\u001f \u0001\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000"+
		"!\u001f\u0001\u0000\u0000\u0000\"\u0013\u0001\u0000\u0000\u0000\"\u0015"+
		"\u0001\u0000\u0000\u0000\"\u0016\u0001\u0000\u0000\u0000\"\u001a\u0001"+
		"\u0000\u0000\u0000#)\u0001\u0000\u0000\u0000$%\n\u0001\u0000\u0000%&\u0005"+
		"\u0006\u0000\u0000&(\u0005\r\u0000\u0000\'$\u0001\u0000\u0000\u0000(+"+
		"\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000"+
		"\u0000*\u0003\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000,/\u0005"+
		"\u0007\u0000\u0000-/\u0005\b\u0000\u0000.,\u0001\u0000\u0000\u0000.-\u0001"+
		"\u0000\u0000\u0000/\u0005\u0001\u0000\u0000\u000001\u0005\r\u0000\u0000"+
		"12\u0003\u0004\u0002\u000023\u0005\t\u0000\u000034\u0003\u0000\u0000\u0000"+
		"4\u0007\u0001\u0000\u0000\u000056\u0005\u000e\u0000\u000067\u0005\n\u0000"+
		"\u000078\u0003\u0000\u0000\u00008\t\u0001\u0000\u0000\u00009;\u0003\b"+
		"\u0004\u0000:9\u0001\u0000\u0000\u0000;>\u0001\u0000\u0000\u0000<:\u0001"+
		"\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=?\u0001\u0000\u0000\u0000"+
		"><\u0001\u0000\u0000\u0000?@\u0005\u0000\u0000\u0001@\u000b\u0001\u0000"+
		"\u0000\u0000\u0006\u0011\u001f\").<";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}