import {TS} from "./type/ts";
import {MetaNode} from "./type/meta-node";

export type NodeHookValue<T extends MetaNode, Key extends keyof T> = T[Key] extends TS.NodeArray<infer ElementTypeA>
	? ElementTypeA[] | TS.NodeArray<ElementTypeA>
	: T[Key] extends TS.NodeArray<infer ElementTypeB> | undefined
	? ElementTypeB[] | TS.NodeArray<ElementTypeB> | undefined
	: T[Key];

export interface CloneNodePayload {
	depth: number;
}

export type CloneNodeHookCallbackWithKey<T extends MetaNode> = <Key extends keyof T>(
	key: Key,
	value: NodeHookValue<T, Key>,
	oldValue: NodeHookValue<T, Key>,
	payload: CloneNodePayload
) => NodeHookValue<T, Key>;
export type CloneNodeHookCallback<T extends MetaNode, Key extends keyof T> = (
	value: NodeHookValue<T, Key>,
	oldValue: NodeHookValue<T, Key>,
	payload: CloneNodePayload
) => NodeHookValue<T, Key>;

export type CloneNodeHook<T extends MetaNode> =
	| CloneNodeHookCallbackWithKey<T>
	| {
			[Key in keyof T]?: CloneNodeHookCallback<T, Key>;
	  };

export interface CloneNodeOptions<T extends MetaNode = MetaNode> {
	hook: CloneNodeHook<T>;
	typescript: typeof TS;
	sourceFile: TS.SourceFile;
}

export interface CloneNodeInternalOptions<T extends MetaNode = MetaNode> extends Omit<CloneNodeOptions<T>, "hook"> {
	internal: true;
	depth: number;
	hook: CloneNodeHookCallbackWithKey<T>;
	commentRanges: Set<string>;
}
