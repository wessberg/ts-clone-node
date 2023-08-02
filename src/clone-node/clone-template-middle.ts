import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateMiddle(node: TS.TemplateMiddle, options: CloneNodeVisitorOptions<TS.TemplateMiddle>): TS.TemplateMiddle {
	return options.factory.createTemplateMiddle(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
