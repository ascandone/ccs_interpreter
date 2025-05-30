// @ts-nocheck
// @ts-nocheck
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
	public static readonly T__10 = 11;
	public static readonly LINE_COMMENT = 12;
	public static readonly NEWLINE = 13;
	public static readonly WS = 14;
	public static readonly EVT_ID = 15;
	public static readonly PROC_ID = 16;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'0'", "'('", 
                                                            "')'", "'+'", 
                                                            "'\'", "'?'", 
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
                                                             "PROC_ID" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "LINE_COMMENT", "NEWLINE", "WS", "EVT_ID", "PROC_ID",
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

	public static readonly _serializedATN: number[] = [4,0,16,98,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,
	1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,
	10,1,10,1,11,1,11,1,11,1,11,5,11,60,8,11,10,11,12,11,63,9,11,1,11,1,11,
	1,12,3,12,68,8,12,1,12,1,12,1,12,1,12,1,13,4,13,75,8,13,11,13,12,13,76,
	1,13,1,13,1,14,1,14,5,14,83,8,14,10,14,12,14,86,9,14,1,15,4,15,89,8,15,
	11,15,12,15,90,1,15,5,15,94,8,15,10,15,12,15,97,9,15,0,0,16,1,1,3,2,5,3,
	7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,
	0,6,2,0,10,10,13,13,3,0,9,10,13,13,32,32,1,0,97,122,3,0,48,57,95,95,97,
	122,1,0,65,90,4,0,48,57,65,90,95,95,97,122,103,0,1,1,0,0,0,0,3,1,0,0,0,
	0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
	0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
	27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,35,1,0,0,0,5,37,1,0,
	0,0,7,39,1,0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,47,1,0,0,0,
	17,49,1,0,0,0,19,51,1,0,0,0,21,53,1,0,0,0,23,55,1,0,0,0,25,67,1,0,0,0,27,
	74,1,0,0,0,29,80,1,0,0,0,31,88,1,0,0,0,33,34,5,124,0,0,34,2,1,0,0,0,35,
	36,5,48,0,0,36,4,1,0,0,0,37,38,5,40,0,0,38,6,1,0,0,0,39,40,5,41,0,0,40,
	8,1,0,0,0,41,42,5,43,0,0,42,10,1,0,0,0,43,44,5,92,0,0,44,12,1,0,0,0,45,
	46,5,63,0,0,46,14,1,0,0,0,47,48,5,33,0,0,48,16,1,0,0,0,49,50,5,46,0,0,50,
	18,1,0,0,0,51,52,5,44,0,0,52,20,1,0,0,0,53,54,5,61,0,0,54,22,1,0,0,0,55,
	56,5,47,0,0,56,57,5,47,0,0,57,61,1,0,0,0,58,60,8,0,0,0,59,58,1,0,0,0,60,
	63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,
	6,11,0,0,65,24,1,0,0,0,66,68,5,13,0,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,
	1,0,0,0,69,70,5,10,0,0,70,71,1,0,0,0,71,72,6,12,0,0,72,26,1,0,0,0,73,75,
	7,1,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,78,1,
	0,0,0,78,79,6,13,0,0,79,28,1,0,0,0,80,84,7,2,0,0,81,83,7,3,0,0,82,81,1,
	0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,30,1,0,0,0,86,84,1,0,
	0,0,87,89,7,4,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,
	0,91,95,1,0,0,0,92,94,7,5,0,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,
	95,96,1,0,0,0,96,32,1,0,0,0,97,95,1,0,0,0,7,0,61,67,76,84,90,95,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCSLexer.__ATN) {
			CCSLexer.__ATN = new ATNDeserializer().deserialize(CCSLexer._serializedATN);
		}

		return CCSLexer.__ATN;
	}


	static DecisionsToDFA = CCSLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}
