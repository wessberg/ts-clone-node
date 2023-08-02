import type {CloneNodeHookFactoryPayload, CloneNodeInternalOptions} from "../clone-node-options.js";
import type {MetaNode} from "../type/meta-node.js";

export function payload<T extends MetaNode>({depth}: CloneNodeInternalOptions<T>): CloneNodeHookFactoryPayload {
	return {depth};
}
