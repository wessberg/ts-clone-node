import {TS} from "../type/ts";
import {CloneNodeInternalOptions, CloneNodePayload} from "../clone-node-options";

export function payload<T extends TS.Node>({depth}: CloneNodeInternalOptions<T>): CloneNodePayload {
	return {depth};
}
