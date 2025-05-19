// Generated from CCS.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `CCSParser`.
 */
export default class CCSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `par`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 */
	enterPar?: (ctx: ParContext) => void;
	/**
	 * Exit a parse tree produced by the `par`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 */
	exitPar?: (ctx: ParContext) => void;
	/**
	 * Enter a parse tree produced by the `seq`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 */
	enterSeq?: (ctx: SeqContext) => void;
	/**
	 * Exit a parse tree produced by the `seq`
	 * labeled alternative in `CCSParser.agent`.
	 * @param ctx the parse tree
	 */
	exitSeq?: (ctx: SeqContext) => void;
	/**
	 * Enter a parse tree produced by the `nil`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	enterNil?: (ctx: NilContext) => void;
	/**
	 * Exit a parse tree produced by the `nil`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	exitNil?: (ctx: NilContext) => void;
	/**
	 * Enter a parse tree produced by the `agentId`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	enterAgentId?: (ctx: AgentIdContext) => void;
	/**
	 * Exit a parse tree produced by the `agentId`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	exitAgentId?: (ctx: AgentIdContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesized`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	enterParenthesized?: (ctx: ParenthesizedContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesized`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	exitParenthesized?: (ctx: ParenthesizedContext) => void;
	/**
	 * Enter a parse tree produced by the `restriction`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	enterRestriction?: (ctx: RestrictionContext) => void;
	/**
	 * Exit a parse tree produced by the `restriction`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	exitRestriction?: (ctx: RestrictionContext) => void;
	/**
	 * Enter a parse tree produced by the `choice`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	enterChoice?: (ctx: ChoiceContext) => void;
	/**
	 * Exit a parse tree produced by the `choice`
	 * labeled alternative in `CCSParser.seqAgent`.
	 * @param ctx the parse tree
	 */
	exitChoice?: (ctx: ChoiceContext) => void;
	/**
	 * Enter a parse tree produced by the `receive`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 */
	enterReceive?: (ctx: ReceiveContext) => void;
	/**
	 * Exit a parse tree produced by the `receive`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 */
	exitReceive?: (ctx: ReceiveContext) => void;
	/**
	 * Enter a parse tree produced by the `send`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 */
	enterSend?: (ctx: SendContext) => void;
	/**
	 * Exit a parse tree produced by the `send`
	 * labeled alternative in `CCSParser.evtType`.
	 * @param ctx the parse tree
	 */
	exitSend?: (ctx: SendContext) => void;
	/**
	 * Enter a parse tree produced by `CCSParser.choiceClause`.
	 * @param ctx the parse tree
	 */
	enterChoiceClause?: (ctx: ChoiceClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CCSParser.choiceClause`.
	 * @param ctx the parse tree
	 */
	exitChoiceClause?: (ctx: ChoiceClauseContext) => void;
	/**
	 * Enter a parse tree produced by `CCSParser.defParams`.
	 * @param ctx the parse tree
	 */
	enterDefParams?: (ctx: DefParamsContext) => void;
	/**
	 * Exit a parse tree produced by `CCSParser.defParams`.
	 * @param ctx the parse tree
	 */
	exitDefParams?: (ctx: DefParamsContext) => void;
	/**
	 * Enter a parse tree produced by `CCSParser.def`.
	 * @param ctx the parse tree
	 */
	enterDef?: (ctx: DefContext) => void;
	/**
	 * Exit a parse tree produced by `CCSParser.def`.
	 * @param ctx the parse tree
	 */
	exitDef?: (ctx: DefContext) => void;
	/**
	 * Enter a parse tree produced by `CCSParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CCSParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
}

