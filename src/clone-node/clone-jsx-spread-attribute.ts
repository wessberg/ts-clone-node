import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxSpreadAttribute(
	node: TS.JsxSpreadAttribute,
	options: CloneNodeInternalOptions<TS.JsxSpreadAttribute>
): TS.JsxSpreadAttribute {
	return options.typescript.createJsxSpreadAttribute(options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)));
}
