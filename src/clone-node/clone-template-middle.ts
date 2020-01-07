import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneTemplateMiddle(node: TS.TemplateMiddle, options: CloneNodeInternalOptions<TS.TemplateMiddle>): TS.TemplateMiddle {
	return options.typescript.createTemplateMiddle(
		options.hook("text", node.text, node.text, payload(options)),
		options.hook("rawText", node.rawText, node.rawText, payload(options))
	);
}
