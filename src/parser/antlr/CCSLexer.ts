// Generated from CCS.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class CCSLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "LINE_COMMENT", "NEWLINE", "WS", "EVT_ID", "AGENT_ID",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, CCSLexer._ATN, CCSLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "CCS.g4"; }

	public get literalNames(): (string | null)[] { return CCSLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return CCSLexer.symbolicNames; }
	public get ruleNames(): string[] { return CCSLexer.ruleNames; }

	public get serializedATN(): number[] { return CCSLexer._serializedATN; }

	public get channelNames(): string[] { return CCSLexer.channelNames; }

	public get modeNames(): string[] { return CCSLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,15,94,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,1,0,1,1,1,1,1,2,
	1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
	10,1,10,5,10,56,8,10,10,10,12,10,59,9,10,1,10,1,10,1,11,3,11,64,8,11,1,
	11,1,11,1,11,1,11,1,12,4,12,71,8,12,11,12,12,12,72,1,12,1,12,1,13,1,13,
	5,13,79,8,13,10,13,12,13,82,9,13,1,14,4,14,85,8,14,11,14,12,14,86,1,14,
	5,14,90,8,14,10,14,12,14,93,9,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
	8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,1,0,6,2,0,10,10,13,13,3,0,9,
	10,13,13,32,32,1,0,97,122,3,0,48,57,95,95,97,122,1,0,65,90,3,0,48,57,65,
	90,97,122,99,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
	0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
	1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,31,1,0,0,
	0,3,33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,39,1,0,0,0,11,41,1,0,0,0,13,
	43,1,0,0,0,15,45,1,0,0,0,17,47,1,0,0,0,19,49,1,0,0,0,21,51,1,0,0,0,23,63,
	1,0,0,0,25,70,1,0,0,0,27,76,1,0,0,0,29,84,1,0,0,0,31,32,5,124,0,0,32,2,
	1,0,0,0,33,34,5,48,0,0,34,4,1,0,0,0,35,36,5,40,0,0,36,6,1,0,0,0,37,38,5,
	41,0,0,38,8,1,0,0,0,39,40,5,43,0,0,40,10,1,0,0,0,41,42,5,92,0,0,42,12,1,
	0,0,0,43,44,5,63,0,0,44,14,1,0,0,0,45,46,5,33,0,0,46,16,1,0,0,0,47,48,5,
	46,0,0,48,18,1,0,0,0,49,50,5,61,0,0,50,20,1,0,0,0,51,52,5,47,0,0,52,53,
	5,47,0,0,53,57,1,0,0,0,54,56,8,0,0,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,
	1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,6,10,0,0,61,22,
	1,0,0,0,62,64,5,13,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,
	5,10,0,0,66,67,1,0,0,0,67,68,6,11,0,0,68,24,1,0,0,0,69,71,7,1,0,0,70,69,
	1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,6,
	12,0,0,75,26,1,0,0,0,76,80,7,2,0,0,77,79,7,3,0,0,78,77,1,0,0,0,79,82,1,
	0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,28,1,0,0,0,82,80,1,0,0,0,83,85,7,4,
	0,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,91,1,0,0,
	0,88,90,7,5,0,0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,
	92,30,1,0,0,0,93,91,1,0,0,0,7,0,57,63,72,80,86,91,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCSLexer.__ATN) {
			CCSLexer.__ATN = new ATNDeserializer().deserialize(CCSLexer._serializedATN);
		}

		return CCSLexer.__ATN;
	}


	static DecisionsToDFA = CCSLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}