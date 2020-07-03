import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneFunctionExpression(node: TS.FunctionExpression, options: CloneNodeVisitorOptions<TS.FunctionExpression>): TS.FunctionExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.FunctionExpression, options: CloneNodeVisitorOptions<TS.FunctionExpression>): TS.FunctionExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createFunctionExpression(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("body", options.nextNode(node.body), node.body) as never
	) as unknown) as TS.FunctionExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.FunctionExpression, options: CloneNodeVisitorOptions<TS.FunctionExpression>): TS.FunctionExpression {
	return options.factory.createFunctionExpression(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
