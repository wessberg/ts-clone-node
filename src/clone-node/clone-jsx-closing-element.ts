import {createJsxClosingElement, JsxClosingElement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneJsxClosingElement (node: JsxClosingElement, options: CloneNodeInternalOptions<JsxClosingElement>): JsxClosingElement {
	return createJsxClosingElement(
		options.hook("tagName", cloneNode(node.tagName))
	);
}