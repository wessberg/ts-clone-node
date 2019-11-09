import {createImportDeclaration, ImportDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneImportDeclaration (node: ImportDeclaration, options: CloneNodeInternalOptions<ImportDeclaration>): ImportDeclaration {
	return createImportDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("importClause", cloneNode(node.importClause)),
		options.hook("moduleSpecifier", cloneNode(node.moduleSpecifier))
	);
}