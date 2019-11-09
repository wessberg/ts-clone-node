import {createTemplateHead, TemplateHead} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneTemplateHead (node: TemplateHead, options: CloneNodeInternalOptions<TemplateHead>): TemplateHead {
	return createTemplateHead(
		options.hook("text", node.text),
		options.hook("rawText", node.rawText)
	);
}