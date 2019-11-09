import {createTry, TryStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTryStatement (node: TryStatement, options: CloneNodeInternalOptions<TryStatement>): TryStatement {
	return createTry(
		options.hook("tryBlock", cloneNode(node.tryBlock)),
		options.hook("catchClause", cloneNode(node.catchClause)),
		options.hook("finallyBlock", cloneNode(node.finallyBlock))
	);
}