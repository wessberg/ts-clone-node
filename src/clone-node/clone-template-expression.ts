import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTemplateExpression(
	node: TS.TemplateExpression,
	options: CloneNodeInternalOptions<TS.TemplateExpression>
): TS.TemplateExpression {
	return options.typescript.createTemplateExpression(
		options.hook("head", cloneNode(node.head, nextOptions(options)), node.head, payload(options)),
		options.hook("templateSpans", cloneNodes(node.templateSpans, nextOptions(options)), node.templateSpans, payload(options))
	);
}
