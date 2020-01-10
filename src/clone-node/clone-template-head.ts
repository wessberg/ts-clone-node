import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateHead(node: TS.TemplateHead, options: CloneNodeVisitorOptions<TS.TemplateHead>): TS.TemplateHead {
	return options.typescript.createTemplateHead(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
