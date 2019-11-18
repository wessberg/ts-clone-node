import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneVoidExpression(node: TS.VoidExpression, options: CloneNodeInternalOptions<TS.VoidExpression>): TS.VoidExpression {
	return options.typescript.createVoid(options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)));
}
