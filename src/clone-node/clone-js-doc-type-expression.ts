import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocTypeExpression(node: Mutable<TS.JSDocTypeExpression>, options: CloneNodeVisitorOptions<TS.JSDocTypeExpression>): TS.JSDocTypeExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocTypeExpression>, options: CloneNodeVisitorOptions<TS.JSDocTypeExpression>): TS.JSDocTypeExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocTypeExpression, -1, -1) as unknown) as Mutable<TS.JSDocTypeExpression>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocTypeExpression>, options: CloneNodeVisitorOptions<TS.JSDocTypeExpression>): TS.JSDocTypeExpression {
	const baseNode = options.factory.createJSDocTypeExpression(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocTypeExpression>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
