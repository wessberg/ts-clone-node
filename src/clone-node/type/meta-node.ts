import {TS} from "./ts";

export type MetaNode = TS.Node & {
	jsDoc?: TS.JSDoc[];
	original?: MetaNode;
	symbol?: TS.Symbol;
	localSymbol?: TS.Symbol;
	emitNode?: {leadingComments: TS.SynthesizedComment[]};
};
