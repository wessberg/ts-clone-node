import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneDoStatement(node: TS.DoStatement, options: CloneNodeInternalOptions<TS.DoStatement>): TS.DoStatement {
	return options.typescript.createDo(
		options.hook("statement", cloneNode(node.statement, nextOptions(node.statement, options)), node.statement, payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
