import {createIf, IfStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneIfStatement (node: IfStatement, options: CloneNodeInternalOptions<IfStatement>): IfStatement {
	return createIf(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("thenStatement", cloneNode(node.thenStatement)),
		options.hook("elseStatement", cloneNode(node.elseStatement))
	);
}