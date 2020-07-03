import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneClassExpression(node: TS.ClassExpression, options: CloneNodeVisitorOptions<TS.ClassExpression>): TS.ClassExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ClassExpression, options: CloneNodeVisitorOptions<TS.ClassExpression>): TS.ClassExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createClassExpression(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters) as never,
		options.hook("heritageClauses", options.nextNodes(node.heritageClauses), node.heritageClauses) as never,
		options.hook("members", options.nextNodes(node.members), node.members) as never
	) as unknown) as TS.ClassExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ClassExpression, options: CloneNodeVisitorOptions<TS.ClassExpression>): TS.ClassExpression {
	return options.factory.createClassExpression(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("heritageClauses", options.nextNodes(node.heritageClauses), node.heritageClauses),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
