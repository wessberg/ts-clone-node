import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxOpeningElement(node: TS.JsxOpeningElement, options: CloneNodeInternalOptions<TS.JsxOpeningElement>): TS.JsxOpeningElement {
	return options.typescript.createJsxOpeningElement(
		options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(options)), payload(options)),
		options.hook("attributes", cloneNode(node.attributes, nextOptions(options)), payload(options))
	);
}
