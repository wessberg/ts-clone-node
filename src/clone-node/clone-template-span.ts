import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateSpan(node: TS.TemplateSpan, options: CloneNodeVisitorOptions<TS.TemplateSpan>): TS.TemplateSpan {
	return options.factory.createTemplateSpan(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("literal", options.nextNode(node.literal), node.literal)
	);
}
