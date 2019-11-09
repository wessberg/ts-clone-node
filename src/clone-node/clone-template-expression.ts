import {createTemplateExpression, TemplateExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneTemplateExpression (node: TemplateExpression, options: CloneNodeInternalOptions<TemplateExpression>): TemplateExpression {
	return createTemplateExpression(
		options.hook("head", cloneNode(node.head)),
		options.hook("templateSpans", cloneNodes(node.templateSpans))
	);
}