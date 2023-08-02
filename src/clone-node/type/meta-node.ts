import type {TS} from "./ts.js";

export interface Modifiersable {
	modifiers?: TS.NodeArray<TS.ModifierLike>;
}

export type MetaNode = TS.Node &
	Modifiersable & {
		jsDoc?: TS.JSDoc[];
		_original?: MetaNode;
		original?: MetaNode;
		_symbol?: TS.Symbol;
		symbol?: TS.Symbol;
		_parent?: MetaNode;
		localSymbol?: TS.Symbol;
		emitNode?: {leadingComments?: TS.SynthesizedComment[]; trailingComments?: TS.SynthesizedComment[]};
	};
