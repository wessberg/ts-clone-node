import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxElement(node: TS.JsxElement, options: CloneNodeInternalOptions<TS.JsxElement>): TS.JsxElement {
	return options.typescript.createJsxElement(
		options.hook("openingElement", cloneNode(node.openingElement, nextOptions(options)), payload(options)),
		options.hook("children", cloneNodes(node.children, nextOptions(options)), payload(options)),
		options.hook("closingElement", cloneNode(node.closingElement, nextOptions(options)), payload(options))
	);
}
