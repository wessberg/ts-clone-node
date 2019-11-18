import {TS} from "../type/ts";
import {CloneNodeInternalOptions} from "../clone-node-options";

export function nextOptions<T extends TS.Node>(options: CloneNodeInternalOptions<T>): CloneNodeInternalOptions<T> {
	return {...options, depth: options.depth + 1};
}
