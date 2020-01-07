import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxExpression(node: TS.JsxExpression, options: CloneNodeInternalOptions<TS.JsxExpression>): TS.JsxExpression {
	return options.typescript.createJsxExpression(
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken, nextOptions(node.dotDotDotToken, options)), node.dotDotDotToken, payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
