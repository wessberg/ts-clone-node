import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {Mutable} from "./util/mutable";

export function cloneJsDocSignature(node: Mutable<TS.JSDocSignature>, options: CloneNodeVisitorOptions<TS.JSDocSignature>): TS.JSDocSignature {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocSignature>, options: CloneNodeVisitorOptions<TS.JSDocSignature>): TS.JSDocSignature {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocSignature, -1, -1) as unknown) as Mutable<TS.JSDocSignature>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);
	baseNode.typeParameters = options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters);
	baseNode.parameters = options.hook("parameters", options.nextNodes(node.parameters), node.parameters);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocSignature>, options: CloneNodeVisitorOptions<TS.JSDocSignature>): TS.JSDocSignature {
	const baseNode = options.factory.createJSDocSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	) as Mutable<TS.JSDocSignature>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
