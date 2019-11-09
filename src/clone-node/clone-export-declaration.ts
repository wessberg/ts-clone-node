import {createExportDeclaration, ExportDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneExportDeclaration (node: ExportDeclaration, options: CloneNodeInternalOptions<ExportDeclaration>): ExportDeclaration {
	return createExportDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("exportClause", cloneNode(node.exportClause)),
		options.hook("moduleSpecifier", cloneNode(node.moduleSpecifier))
	);
}