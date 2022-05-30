import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxExpression(node: TS.JsxExpression, options: CloneNodeVisitorOptions<TS.JsxExpression>): TS.JsxExpression {
	return options.factory.createJsxExpression(
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
