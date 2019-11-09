import {createExternalModuleReference, ExternalModuleReference} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneExternalModuleReference (node: ExternalModuleReference, options: CloneNodeInternalOptions<ExternalModuleReference>): ExternalModuleReference {
	return createExternalModuleReference(
		options.hook("expression", cloneNode(node.expression))
	);
}