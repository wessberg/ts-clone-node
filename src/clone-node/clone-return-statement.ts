import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneReturnStatement(node: TS.ReturnStatement, options: CloneNodeInternalOptions<TS.ReturnStatement>): TS.ReturnStatement {
	return options.typescript.createReturn(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
