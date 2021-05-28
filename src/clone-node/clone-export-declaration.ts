import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportDeclaration(node: TS.ExportDeclaration, options: CloneNodeVisitorOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	return options.factory.createExportDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("exportClause", options.nextNode(node.exportClause), node.exportClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier)
	);
}
