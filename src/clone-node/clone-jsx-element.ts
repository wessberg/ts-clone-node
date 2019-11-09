import {createJsxElement, JsxElement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneJsxElement (node: JsxElement, options: CloneNodeInternalOptions<JsxElement>): JsxElement {
	return createJsxElement(
		options.hook("openingElement", cloneNode(node.openingElement)),
		options.hook("children", cloneNodes(node.children)),
		options.hook("closingElement", cloneNode(node.closingElement))
	);
}