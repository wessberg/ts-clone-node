import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportDeclaration(node: TS.ExportDeclaration, options: CloneNodeVisitorOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExportDeclaration, options: CloneNodeVisitorOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExportDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("exportClause", options.nextNode(node.exportClause), node.exportClause) as never,
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier) as never,
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly)
	) as unknown) as TS.ExportDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExportDeclaration, options: CloneNodeVisitorOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	return options.factory.createExportDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("exportClause", options.nextNode(node.exportClause), node.exportClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier)
	);
}
