import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxExpression(node: TS.JsxExpression, options: CloneNodeVisitorOptions<TS.JsxExpression>): TS.JsxExpression {
	return options.factory.createJsxExpression(
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
