import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneObjectLiteralExpression(node: TS.ObjectLiteralExpression, options: CloneNodeVisitorOptions<TS.ObjectLiteralExpression>): TS.ObjectLiteralExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ObjectLiteralExpression, options: CloneNodeVisitorOptions<TS.ObjectLiteralExpression>): TS.ObjectLiteralExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createObjectLiteral(options.hook("properties", options.nextNodes(node.properties), node.properties) as never) as unknown) as TS.ObjectLiteralExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ObjectLiteralExpression, options: CloneNodeVisitorOptions<TS.ObjectLiteralExpression>): TS.ObjectLiteralExpression {
	return options.factory.createObjectLiteralExpression(options.hook("properties", options.nextNodes(node.properties), node.properties));
}
