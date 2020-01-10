import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateTail(node: TS.TemplateTail, options: CloneNodeVisitorOptions<TS.TemplateTail>): TS.TemplateTail {
	return options.typescript.createTemplateTail(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.rawText));
}
