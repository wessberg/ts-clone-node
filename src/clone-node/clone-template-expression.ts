import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateExpression(node: TS.TemplateExpression, options: CloneNodeVisitorOptions<TS.TemplateExpression>): TS.TemplateExpression {
	return options.typescript.createTemplateExpression(
		options.hook("head", options.nextNode(node.head), node.head),
		options.hook("templateSpans", options.nextNodes(node.templateSpans), node.templateSpans)
	);
}
