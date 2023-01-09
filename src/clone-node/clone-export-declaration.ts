import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneExportDeclaration(node: TS.ExportDeclaration, options: CloneNodeVisitorOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	return options.factory.createExportDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("exportClause", options.nextNode(node.exportClause), node.exportClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier)
	);
}
