import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTaggedTemplateExpression(node: TS.TaggedTemplateExpression, options: CloneNodeVisitorOptions<TS.TaggedTemplateExpression>): TS.TaggedTemplateExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.TaggedTemplateExpression, options: CloneNodeVisitorOptions<TS.TaggedTemplateExpression>): TS.TaggedTemplateExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createTaggedTemplate(
		options.hook("tag", options.nextNode(node.tag), node.tag) as never,
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments) as never,
		options.hook("template", options.nextNode(node.template), node.template) as never
	) as unknown) as TS.TaggedTemplateExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.TaggedTemplateExpression, options: CloneNodeVisitorOptions<TS.TaggedTemplateExpression>): TS.TaggedTemplateExpression {
	return options.factory.createTaggedTemplateExpression(
		options.hook("tag", options.nextNode(node.tag), node.tag),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("template", options.nextNode(node.template), node.template)
	);
}
