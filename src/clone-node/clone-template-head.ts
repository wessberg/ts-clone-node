import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateHead(node: TS.TemplateHead, options: CloneNodeVisitorOptions<TS.TemplateHead>): TS.TemplateHead {
	return options.factory.createTemplateHead(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
