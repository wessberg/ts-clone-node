import {createJsxSelfClosingElement, JsxSelfClosingElement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneJsxSelfClosingElement (node: JsxSelfClosingElement, options: CloneNodeInternalOptions<JsxSelfClosingElement>): JsxSelfClosingElement {
	return createJsxSelfClosingElement(
		options.hook("tagName", cloneNode(node.tagName)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("attributes", cloneNode(node.attributes))
	);
}