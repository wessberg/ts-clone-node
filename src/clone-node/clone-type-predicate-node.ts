import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypePredicateNode(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createTypePredicateNode(
		options.hook("parameterName", options.nextNode(node.parameterName), node.parameterName) as never,
		options.hook("type", options.nextNode(node.type), node.type)! as never
	) as unknown) as TS.TypePredicateNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	return options.factory.createTypePredicateNode(
		options.hook("assertsModifier", options.nextNode(node.assertsModifier), node.assertsModifier),
		options.hook("parameterName", options.nextNode(node.parameterName), node.parameterName),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
