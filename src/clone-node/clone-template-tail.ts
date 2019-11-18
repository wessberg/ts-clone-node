import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneTemplateTail(node: TS.TemplateTail, options: CloneNodeInternalOptions<TS.TemplateTail>): TS.TemplateTail {
	return options.typescript.createTemplateTail(
		options.hook("text", node.text, payload(options)),
		options.hook("rawText", node.rawText, payload(options))
	);
}
