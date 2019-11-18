import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneForOfStatement(node: TS.ForOfStatement, options: CloneNodeInternalOptions<TS.ForOfStatement>): TS.ForOfStatement {
	return options.typescript.createForOf(
		options.hook("awaitModifier", cloneNode(node.awaitModifier, nextOptions(options)), payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)),
		options.hook("statement", cloneNode(node.statement, nextOptions(options)), payload(options))
	);
}
