import {TS} from "./ts.js";
import {NodeArray, ModifierLike} from "typescript";

export type MetaNode = TS.Node & {
	jsDoc?: TS.JSDoc[];
	_original?: MetaNode;
	original?: MetaNode;
	_symbol?: TS.Symbol;
	symbol?: TS.Symbol;
	_parent?: MetaNode;
	localSymbol?: TS.Symbol;
	emitNode?: {leadingComments?: TS.SynthesizedComment[]; trailingComments?: TS.SynthesizedComment[]};
	modifiers?: NodeArray<ModifierLike>;
};
