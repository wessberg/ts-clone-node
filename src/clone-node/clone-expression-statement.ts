import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExpressionStatement(
	node: TS.ExpressionStatement,
	options: CloneNodeInternalOptions<TS.ExpressionStatement>
): TS.ExpressionStatement {
	return options.typescript.createExpressionStatement(options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)));
}
