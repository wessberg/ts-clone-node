import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneTemplateHead(node: TS.TemplateHead, options: CloneNodeInternalOptions<TS.TemplateHead>): TS.TemplateHead {
	return options.typescript.createTemplateHead(
		options.hook("text", node.text, payload(options)),
		options.hook("rawText", node.rawText, payload(options))
	);
}
