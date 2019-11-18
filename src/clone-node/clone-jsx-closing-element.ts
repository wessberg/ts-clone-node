import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxClosingElement(node: TS.JsxClosingElement, options: CloneNodeInternalOptions<TS.JsxClosingElement>): TS.JsxClosingElement {
	return options.typescript.createJsxClosingElement(options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), payload(options)));
}
