import {createWhile, WhileStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneWhileStatement (node: WhileStatement, options: CloneNodeInternalOptions<WhileStatement>): WhileStatement {
	return createWhile(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("statement", cloneNode(node.statement))
	);
}