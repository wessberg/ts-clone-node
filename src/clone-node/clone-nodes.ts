import {Node} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeOptions} from "./clone-node-options";

export function cloneNodes<T extends Node> (nodes: readonly T[], options?: Partial<CloneNodeOptions>): T[];
export function cloneNodes<T extends Node> (nodes: T[], options?: Partial<CloneNodeOptions>): T[];
export function cloneNodes<T extends Node> (nodes: undefined, options?: Partial<CloneNodeOptions>): undefined;
export function cloneNodes<T extends Node> (nodes: readonly T[]|T[]|undefined, options?: Partial<CloneNodeOptions>): T[]|undefined;
export function cloneNodes<T extends Node> (nodes: readonly T[]|T[]|undefined, options: Partial<CloneNodeOptions> = {}): T[]|undefined {
	return nodes == null ? undefined : (nodes as T[]).map(node => cloneNode(node, options)) as T[]|undefined;
}