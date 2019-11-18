import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneBinaryExpression(node: TS.BinaryExpression, options: CloneNodeInternalOptions<TS.BinaryExpression>): TS.BinaryExpression {
	return options.typescript.createBinary(
		options.hook("left", cloneNode(node.left, nextOptions(options)), payload(options)),
		options.hook("operatorToken", cloneNode(node.operatorToken, nextOptions(options)), payload(options)),
		options.hook("right", cloneNode(node.right, nextOptions(options)), payload(options))
	);
}
