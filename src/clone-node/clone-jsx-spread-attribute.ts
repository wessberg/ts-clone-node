import {createJsxSpreadAttribute, JsxSpreadAttribute} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneJsxSpreadAttribute (node: JsxSpreadAttribute, options: CloneNodeInternalOptions<JsxSpreadAttribute>): JsxSpreadAttribute {
	return createJsxSpreadAttribute(
		options.hook("expression", cloneNode(node.expression))
	);
}