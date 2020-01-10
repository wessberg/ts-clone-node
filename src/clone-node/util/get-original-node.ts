import {MetaNode} from "../type/meta-node";
import {CloneNodeInternalOptions} from "../clone-node-options";

export function getOriginalNode<T extends MetaNode>(node: T, options: CloneNodeInternalOptions): T {
	if (node._original != null) {
		return getOriginalNode(node._original as T, options);
	}

	return (options.typescript.getOriginalNode(node) as T) ?? node;
}
