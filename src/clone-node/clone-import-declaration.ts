import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportDeclaration(node: TS.ImportDeclaration, options: CloneNodeVisitorOptions<TS.ImportDeclaration>): TS.ImportDeclaration {
	return options.factory.createImportDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("importClause", options.nextNode(node.importClause), node.importClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier),
		options.hook("assertClause", options.nextNode(node.assertClause), node.assertClause)
	);
}
