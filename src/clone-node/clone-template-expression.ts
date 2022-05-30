import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateExpression(node: TS.TemplateExpression, options: CloneNodeVisitorOptions<TS.TemplateExpression>): TS.TemplateExpression {
	return options.factory.createTemplateExpression(
		options.hook("head", options.nextNode(node.head), node.head),
		options.hook("templateSpans", options.nextNodes(node.templateSpans), node.templateSpans)
	);
}
