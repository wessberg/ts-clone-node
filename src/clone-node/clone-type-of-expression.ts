import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeOfExpression(node: TS.TypeOfExpression, options: CloneNodeInternalOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	return options.typescript.createTypeOf(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
