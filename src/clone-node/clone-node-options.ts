import type {TS} from "./type/ts.js";
import type {MetaNode, Modifiersable} from "./type/meta-node.js";

export type NodeHookValue<T extends MetaNode, Key extends keyof T> =
	T[Key] extends TS.NodeArray<infer ElementTypeA>
		? ElementTypeA[] | readonly ElementTypeA[] | TS.NodeArray<ElementTypeA>
		: T[Key] extends TS.NodeArray<infer ElementTypeB> | undefined
			? ElementTypeB[] | readonly ElementTypeB[] | TS.NodeArray<ElementTypeB> | undefined
			: T[Key];

export interface CloneNodeHookFactoryPayload {
	depth: number;
}

export type CloneNodeHookCallback<T extends MetaNode, Key extends keyof T> = (value: NodeHookValue<T, Key>, oldValue: NodeHookValue<T, Key>) => NodeHookValue<T, Key>;

export type CloneNodeFinalizerCallback<T extends MetaNode> = (newNode: T, oldNode: T, payload: CloneNodeHookFactoryPayload) => T | undefined;

export type CloneNodeHook<T extends MetaNode> = {
	[Key in keyof T]?: CloneNodeHookCallback<T, Key>;
};

export type CloneNodeHookFactory<T extends MetaNode> = (node: T, payload: CloneNodeHookFactoryPayload) => CloneNodeHook<T> | undefined;

export type CloneNodeHookInternal<T extends MetaNode> = <Key extends keyof T>(key: Key, newValue: NodeHookValue<T, Key>, oldValue: NodeHookValue<T, Key>) => NodeHookValue<T, Key>;

export interface CloneNodeOptions<T extends MetaNode = MetaNode> {
	hook: CloneNodeHookFactory<T & Modifiersable>;
	finalize: CloneNodeFinalizerCallback<T & Modifiersable>;
	typescript: typeof TS;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	factory: TS.NodeFactory;
	setParents: boolean;
	setOriginalNodes: boolean;
	preserveSymbols: boolean;
	preserveComments: boolean;
	debug: boolean;
}

export interface CloneNodeInternalOptions<T extends MetaNode = MetaNode> extends Omit<CloneNodeOptions<T>, "hook" | "finalize"> {
	hook: CloneNodeHookFactory<MetaNode>;
	finalize?: CloneNodeFinalizerCallback<MetaNode>;
	commentRanges: Set<string>;
	depth: number;
}

export interface CloneNodeVisitorOptions<T extends MetaNode = MetaNode> extends Omit<CloneNodeInternalOptions<T>, "hook" | "finalize"> {
	hook: CloneNodeHookInternal<T>;

	nextNode<Next extends MetaNode>(node: Next): Next;
	nextNode<Next extends MetaNode>(node: Next | undefined): Next | undefined;

	nextNodes<Next extends MetaNode>(nodes: readonly Next[] | Next[]): Next[];
	nextNodes(nodes: undefined): undefined;
	nextNodes<Next extends MetaNode>(nodes: readonly Next[] | Next[] | undefined): undefined;
}
