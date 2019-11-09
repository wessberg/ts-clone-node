import {createFor, ForStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneForStatement (node: ForStatement, options: CloneNodeInternalOptions<ForStatement>): ForStatement {
	return createFor(
		options.hook("initializer", cloneNode(node.initializer)),
		options.hook("condition", cloneNode(node.condition)),
		options.hook("incrementor", cloneNode(node.incrementor)),
		options.hook("statement", cloneNode(node.statement))
	);
}