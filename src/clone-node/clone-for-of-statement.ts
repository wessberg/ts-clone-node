import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneForOfStatement(node: TS.ForOfStatement, options: CloneNodeInternalOptions<TS.ForOfStatement>): TS.ForOfStatement {
	return options.typescript.createForOf(
		options.hook("awaitModifier", cloneNode(node.awaitModifier, nextOptions(node.awaitModifier, options)), node.awaitModifier, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(node.initializer, options)), node.initializer, payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options)),
		options.hook("statement", cloneNode(node.statement, nextOptions(node.statement, options)), node.statement, payload(options))
	);
}
