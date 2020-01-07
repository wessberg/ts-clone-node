import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTryStatement(node: TS.TryStatement, options: CloneNodeInternalOptions<TS.TryStatement>): TS.TryStatement {
	return options.typescript.createTry(
		options.hook("tryBlock", cloneNode(node.tryBlock, nextOptions(node.tryBlock, options)), node.tryBlock, payload(options)),
		options.hook("catchClause", cloneNode(node.catchClause, nextOptions(node.catchClause, options)), node.catchClause, payload(options)),
		options.hook("finallyBlock", cloneNode(node.finallyBlock, nextOptions(node.finallyBlock, options)), node.finallyBlock, payload(options))
	);
}
