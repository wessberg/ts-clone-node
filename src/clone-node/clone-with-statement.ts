import {createWith, WithStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneWithStatement (node: WithStatement, options: CloneNodeInternalOptions<WithStatement>): WithStatement {
	return createWith(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("statement", cloneNode(node.statement))
	);
}