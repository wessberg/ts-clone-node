import {TS} from "./type/ts";

export type NodeHookValue<T extends TS.Node, Key extends keyof T> = T[Key] extends TS.NodeArray<infer ElementTypeA>
	? ElementTypeA[] | TS.NodeArray<ElementTypeA>
	: T[Key] extends TS.NodeArray<infer ElementTypeB> | undefined
	? ElementTypeB[] | TS.NodeArray<ElementTypeB> | undefined
	: T[Key];

export interface CloneNodePayload {
	depth: number;
}

export type CloneNodeHook<T extends TS.Node> = {
	[Key in keyof T]?: (value: NodeHookValue<T, Key>, payload: CloneNodePayload) => NodeHookValue<T, Key>;
};
export type CloneNodeInternalHook<T extends TS.Node> = <Key extends keyof T>(
	key: Key,
	value: NodeHookValue<T, Key>,
	payload: CloneNodePayload
) => NodeHookValue<T, Key>;

export interface CloneNodeOptions<T extends TS.Node = TS.Node> {
	hook: CloneNodeHook<T>;
	typescript: typeof TS;
}

export interface CloneNodeInternalOptions<T extends TS.Node = TS.Node> extends Omit<CloneNodeOptions<T>, "hook"> {
	internal: true;
	depth: number;
	hook: CloneNodeInternalHook<T>;
}
