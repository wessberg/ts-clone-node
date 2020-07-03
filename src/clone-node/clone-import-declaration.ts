import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportDeclaration(node: TS.ImportDeclaration, options: CloneNodeVisitorOptions<TS.ImportDeclaration>): TS.ImportDeclaration {
	return options.factory.createImportDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("importClause", options.nextNode(node.importClause), node.importClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier)
	);
}
