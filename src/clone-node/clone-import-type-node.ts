import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportTypeNode(node: TS.ImportTypeNode, options: CloneNodeVisitorOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ImportTypeNode, options: CloneNodeVisitorOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createImportTypeNode(
		options.hook("argument", options.nextNode(node.argument), node.argument) as never,
		options.hook("qualifier", options.nextNode(node.qualifier), node.qualifier) as never,
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments) as never,
		options.hook("isTypeOf", node.isTypeOf, node.isTypeOf) as never
	) as unknown) as TS.ImportTypeNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ImportTypeNode, options: CloneNodeVisitorOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	return options.factory.createImportTypeNode(
		options.hook("argument", options.nextNode(node.argument), node.argument),
		options.hook("qualifier", options.nextNode(node.qualifier), node.qualifier),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("isTypeOf", node.isTypeOf, node.isTypeOf)
	);
}
