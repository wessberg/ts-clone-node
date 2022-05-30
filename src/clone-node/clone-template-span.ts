import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateSpan(node: TS.TemplateSpan, options: CloneNodeVisitorOptions<TS.TemplateSpan>): TS.TemplateSpan {
	return options.factory.createTemplateSpan(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("literal", options.nextNode(node.literal), node.literal)
	);
}
