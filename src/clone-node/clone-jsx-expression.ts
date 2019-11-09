import {createJsxExpression, JsxExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneJsxExpression (node: JsxExpression, options: CloneNodeInternalOptions<JsxExpression>): JsxExpression {
	return createJsxExpression(
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken)),
		options.hook("expression", cloneNode(node.expression))
	);
}