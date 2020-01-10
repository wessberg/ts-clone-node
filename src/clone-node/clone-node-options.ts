import {TS} from "./type/ts";
import {MetaNode} from "./type/meta-node";

export type NodeHookValue<T extends MetaNode, Key extends keyof T> = T[Key] extends TS.NodeArray<infer ElementTypeA>
	? ElementTypeA[] | TS.NodeArray<ElementTypeA>
	: T[Key] extends TS.NodeArray<infer ElementTypeB> | undefined
	? ElementTypeB[] | TS.NodeArray<ElementTypeB> | undefined
	: T[Key];

export interface CloneNodeHookFactoryPayload {
	depth: number;
}

export type CloneNodeHookCallback<T extends MetaNode, Key extends keyof T> = (
	value: NodeHookValue<T, Key>,
	oldValue: NodeHookValue<T, Key>
) => NodeHookValue<T, Key>;

export type CloneNodeFinalizerCallback<T extends MetaNode> = (newNode: T, oldNode: T, payload: CloneNodeHookFactoryPayload) => T | void | undefined;

export type CloneNodeHook<T extends MetaNode> = {
	[Key in keyof T]?: CloneNodeHookCallback<T, Key>;
};

export type CloneNodeHookFactory<T extends MetaNode> = (node: T, payload: CloneNodeHookFactoryPayload) => CloneNodeHook<T> | undefined;

export type CloneNodeHookInternal<T extends MetaNode> = <Key extends keyof T>(
	key: Key,
	newValue: NodeHookValue<T, Key>,
	oldValue: NodeHookValue<T, Key>
) => NodeHookValue<T, Key>;

export interface CloneNodeOptions<T extends MetaNode = MetaNode> {
	hook: CloneNodeHookFactory<T>;
	finalize: CloneNodeFinalizerCallback<T>;
	typescript: typeof TS;
	setParents: boolean;
	setOriginalNodes: boolean;
	preserveSymbols: boolean;
	preserveComments: boolean;
}

export interface CloneNodeInternalOptions<T extends MetaNode = MetaNode> extends Omit<CloneNodeOptions<T>, "hook"> {
	hook: CloneNodeHookFactory<T>;
	commentRanges: Set<string>;
	depth: number;
}

export interface CloneNodeVisitorOptions<T extends MetaNode = MetaNode> extends Omit<CloneNodeInternalOptions<T>, "hook" | "finalize"> {
	hook: CloneNodeHookInternal<T>;

	nextNode<Next extends MetaNode>(node: Next): Next;
	nextNode<Next extends MetaNode>(node: Next | undefined): Next | undefined;

	nextNodes<Next extends MetaNode>(nodes: readonly Next[]): Next[];
	nextNodes<Next extends MetaNode>(nodes: Next[]): Next[];
	nextNodes<Next extends MetaNode>(nodes: undefined): undefined;
	nextNodes<Next extends MetaNode>(nodes: readonly Next[] | Next[] | undefined): undefined;
}
