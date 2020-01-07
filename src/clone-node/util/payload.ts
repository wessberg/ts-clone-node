import {CloneNodeInternalOptions, CloneNodePayload} from "../clone-node-options";
import {MetaNode} from "../type/meta-node";

export function payload<T extends MetaNode>({depth}: CloneNodeInternalOptions<T>): CloneNodePayload {
	return {depth};
}
