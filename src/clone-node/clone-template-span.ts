import {createTemplateSpan, TemplateSpan} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTemplateSpan (node: TemplateSpan, options: CloneNodeInternalOptions<TemplateSpan>): TemplateSpan {
	return createTemplateSpan(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("literal", cloneNode(node.literal))
	);
}