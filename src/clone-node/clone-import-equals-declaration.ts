import {createImportEqualsDeclaration, ImportEqualsDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneImportEqualsDeclaration (node: ImportEqualsDeclaration, options: CloneNodeInternalOptions<ImportEqualsDeclaration>): ImportEqualsDeclaration {
	return createImportEqualsDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("moduleReference", cloneNode(node.moduleReference))
	);
}