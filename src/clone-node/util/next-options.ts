import type {CloneNodeInternalOptions} from "../clone-node-options.js";
import type {MetaNode} from "../type/meta-node.js";

export function nextOptions<T extends MetaNode>(options: CloneNodeInternalOptions<T>): CloneNodeInternalOptions<T> {
	return {...options, depth: options.depth + 1};
}
