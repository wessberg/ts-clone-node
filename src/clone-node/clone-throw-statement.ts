import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneThrowStatement(node: TS.ThrowStatement, options: CloneNodeInternalOptions<TS.ThrowStatement>): TS.ThrowStatement {
	return options.typescript.createThrow(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))!
	);
}
