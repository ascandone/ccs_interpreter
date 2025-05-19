grammar CCS;

LINE_COMMENT: '//' ~[\r\n]* -> skip;

NEWLINE: '\r'? '\n' -> skip;
WS: [ \t\r\n]+ -> skip;

EVT_ID: [a-z] [_a-z0-9]*;
AGENT_ID: [A-Z]+ [_a-zA-Z0-9]*;

agent
	: left=seqAgent '|' right=agent # par
	| seqAgent # seq
	;

seqAgent
	: '0'	# nil
	| AGENT_ID		# agentId
	| '(' agent ')'		# parenthesized
	| choiceClause ('+' choiceClause)*		# choice
	| seqAgent '\\' EVT_ID	# restriction // <- TODO agent instead?
	;

evtType: '?' # receive | '!' # send;
choiceClause: EVT_ID evtType '.' agent;

def: AGENT_ID '=' agent;

program: def* EOF;