import {createTemplateMiddle, TemplateMiddle} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneTemplateMiddle (node: TemplateMiddle, options: CloneNodeInternalOptions<TemplateMiddle>): TemplateMiddle {
	return createTemplateMiddle(
		options.hook("text", node.text),
		options.hook("rawText", node.rawText)
	);
}