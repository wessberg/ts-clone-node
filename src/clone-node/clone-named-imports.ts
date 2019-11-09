import {createNamedImports, NamedImports} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneNamedImports (node: NamedImports, options: CloneNodeInternalOptions<NamedImports>): NamedImports {
	return createNamedImports(
		options.hook("elements", cloneNodes(node.elements))
	);
}