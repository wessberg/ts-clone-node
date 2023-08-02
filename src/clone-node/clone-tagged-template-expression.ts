import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTaggedTemplateExpression(node: TS.TaggedTemplateExpression, options: CloneNodeVisitorOptions<TS.TaggedTemplateExpression>): TS.TaggedTemplateExpression {
	return options.factory.createTaggedTemplateExpression(
		options.hook("tag", options.nextNode(node.tag), node.tag),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("template", options.nextNode(node.template), node.template)
	);
}
