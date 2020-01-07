import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneWhileStatement(node: TS.WhileStatement, options: CloneNodeInternalOptions<TS.WhileStatement>): TS.WhileStatement {
	return options.typescript.createWhile(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options)),
		options.hook("statement", cloneNode(node.statement, nextOptions(node.statement, options)), node.statement, payload(options))
	);
}
