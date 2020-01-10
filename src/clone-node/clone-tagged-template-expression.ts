import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTaggedTemplateExpression(
	node: TS.TaggedTemplateExpression,
	options: CloneNodeVisitorOptions<TS.TaggedTemplateExpression>
): TS.TaggedTemplateExpression {
	return options.typescript.createTaggedTemplate(
		options.hook("tag", options.nextNode(node.tag), node.tag),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("template", options.nextNode(node.template), node.template)
	);
}
