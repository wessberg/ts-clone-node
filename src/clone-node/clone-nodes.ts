import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions, CloneNodeOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneNodes<T extends TS.Node>(nodes: readonly T[], options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions): T[];
export function cloneNodes<T extends TS.Node>(nodes: T[], options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions): T[];
export function cloneNodes<T extends TS.Node>(nodes: undefined, options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions): undefined;
export function cloneNodes<T extends TS.Node>(
	nodes: readonly T[] | T[] | undefined,
	options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions
): T[] | undefined;
export function cloneNodes<T extends TS.Node>(
	nodes: readonly T[] | T[] | undefined,
	options: Partial<CloneNodeOptions> | CloneNodeInternalOptions = {}
): T[] | undefined {
	return nodes == null ? undefined : ((nodes as T[]).map(node => cloneNode(node, options)) as T[] | undefined);
}
