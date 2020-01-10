import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateMiddle(node: TS.TemplateMiddle, options: CloneNodeVisitorOptions<TS.TemplateMiddle>): TS.TemplateMiddle {
	return options.typescript.createTemplateMiddle(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
