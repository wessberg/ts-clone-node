import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneForStatement(node: TS.ForStatement, options: CloneNodeInternalOptions<TS.ForStatement>): TS.ForStatement {
	return options.typescript.createFor(
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), node.initializer, payload(options)),
		options.hook("condition", cloneNode(node.condition, nextOptions(options)), node.condition, payload(options)),
		options.hook("incrementor", cloneNode(node.incrementor, nextOptions(options)), node.incrementor, payload(options)),
		options.hook("statement", cloneNode(node.statement, nextOptions(options)), node.statement, payload(options))
	);
}
