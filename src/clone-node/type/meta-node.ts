import {TS} from "./ts";

export type MetaNode = TS.Node & {
	jsDoc?: TS.JSDoc[];
	_original?: MetaNode;
	original?: MetaNode;
	_symbol?: TS.Symbol;
	symbol?: TS.Symbol;
	_parent?: MetaNode;
	localSymbol?: TS.Symbol;
	emitNode?: {leadingComments?: TS.SynthesizedComment[]; trailingComments?: TS.SynthesizedComment[]};
};
