import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateTail(node: TS.TemplateTail, options: CloneNodeVisitorOptions<TS.TemplateTail>): TS.TemplateTail {
	return options.factory.createTemplateTail(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
