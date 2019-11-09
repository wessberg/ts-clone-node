import {createJsxOpeningElement, JsxOpeningElement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneJsxOpeningElement (node: JsxOpeningElement, options: CloneNodeInternalOptions<JsxOpeningElement>): JsxOpeningElement {
	return createJsxOpeningElement(
		options.hook("tagName", cloneNode(node.tagName)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("attributes", cloneNode(node.attributes))
	);
}