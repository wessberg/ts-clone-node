import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTemplateSpan(node: TS.TemplateSpan, options: CloneNodeInternalOptions<TS.TemplateSpan>): TS.TemplateSpan {
	return options.typescript.createTemplateSpan(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options)),
		options.hook("literal", cloneNode(node.literal, nextOptions(options)), node.literal, payload(options))
	);
}
