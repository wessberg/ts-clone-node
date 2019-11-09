import {Node, NodeArray} from "typescript";

export type NodeHookValue<T extends Node, Key extends keyof T> =
	T[Key] extends NodeArray<infer ElementTypeA>
		? ElementTypeA[]|NodeArray<ElementTypeA>
		: T[Key] extends NodeArray<infer ElementTypeB>|undefined
		? ElementTypeB[]|NodeArray<ElementTypeB>|undefined
		: T[Key];

export type CloneNodeHook<T extends Node> = { [Key in keyof T]?: (value: NodeHookValue<T, Key>) => NodeHookValue<T, Key> };
export type CloneNodeInternalHook<T extends Node> = <Key extends keyof T> (key: Key, value: NodeHookValue<T, Key>) => NodeHookValue<T, Key>;

export interface CloneNodeOptions<T extends Node = Node> {
	hook: CloneNodeHook<T>;
}

export interface CloneNodeInternalOptions<T extends Node = Node> {
	hook: CloneNodeInternalHook<T>;
}

export function toInternalOptions<T extends Node> (options: Partial<CloneNodeOptions<T>>): CloneNodeInternalOptions<T> {
	return {
		...options, hook: (key, value) => {
			if (options.hook != null) {
				const entry = options.hook[key];
				if (entry != null) {
					return entry(value);
				}
			}
			return value;
		}
	};
}