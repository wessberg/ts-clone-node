import {createForOf, ForOfStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneForOfStatement (node: ForOfStatement, options: CloneNodeInternalOptions<ForOfStatement>): ForOfStatement {
	return createForOf(
		options.hook("awaitModifier", cloneNode(node.awaitModifier)),
		options.hook("initializer", cloneNode(node.initializer)),
		options.hook("expression", cloneNode(node.expression)),
		options.hook("statement", cloneNode(node.statement))
	);
}