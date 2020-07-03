import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportSpecifier(node: TS.ExportSpecifier, options: CloneNodeVisitorOptions<TS.ExportSpecifier>): TS.ExportSpecifier {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExportSpecifier, options: CloneNodeVisitorOptions<TS.ExportSpecifier>): TS.ExportSpecifier {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExportSpecifier(
		options.hook("propertyName", options.nextNode(node.propertyName), node.propertyName) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never
	) as unknown) as TS.ExportSpecifier;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExportSpecifier, options: CloneNodeVisitorOptions<TS.ExportSpecifier>): TS.ExportSpecifier {
	return options.factory.createExportSpecifier(
		options.hook("propertyName", options.nextNode(node.propertyName), node.propertyName),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
