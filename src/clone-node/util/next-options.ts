import {CloneNodeInternalOptions} from "../clone-node-options";
import {MetaNode} from "../type/meta-node";

export function nextOptions<T extends MetaNode>(options: CloneNodeInternalOptions<T>): CloneNodeInternalOptions<T> {
	return {...options, depth: options.depth + 1};
}
