import {createForIn, ForInStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneForInStatement (node: ForInStatement, options: CloneNodeInternalOptions<ForInStatement>): ForInStatement {
	return createForIn(
		options.hook("initializer", cloneNode(node.initializer)),
		options.hook("expression", cloneNode(node.expression)),
		options.hook("statement", cloneNode(node.statement))
	);
}