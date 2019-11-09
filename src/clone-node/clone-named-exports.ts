import {createNamedExports, NamedExports} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneNamedExports (node: NamedExports, options: CloneNodeInternalOptions<NamedExports>): NamedExports {
	return createNamedExports(
		options.hook("elements", cloneNodes(node.elements))
	);
}