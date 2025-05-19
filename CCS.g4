grammar CCS;

LINE_COMMENT: '//' ~[\r\n]* -> skip;

NEWLINE: '\r'? '\n' -> skip;
WS: [ \t\r\n]+ -> skip;

EVT_ID: [a-z] [_a-z0-9]*;
PROC_ID: [A-Z]+ [_a-zA-Z0-9]*;

proc
	: left=seqProc '|' right=proc # par
	| seqProc # seq
	;

seqProc
	: '0'	# nil
	| PROC_ID defParams?		# procId
	| '(' proc ')'		# parenthesized
	| choiceClause ('+' choiceClause)*		# choice
	| seqProc '\\' EVT_ID	# restriction
	;

evtType: '?' # receive | '!' # send;
choiceClause: EVT_ID evtType '.' seqProc;

defParams: '(' (EVT_ID (',' EVT_ID)*)? ')';

def: PROC_ID defParams? '=' proc;

program: def* EOF;