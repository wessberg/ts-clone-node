import {createTemplateTail, TemplateTail} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneTemplateTail (node: TemplateTail, options: CloneNodeInternalOptions<TemplateTail>): TemplateTail {
	return createTemplateTail(
		options.hook("text", node.text),
		options.hook("rawText", node.rawText)
	);
}