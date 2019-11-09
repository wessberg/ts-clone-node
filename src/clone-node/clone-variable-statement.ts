import {createVariableStatement, VariableStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneVariableStatement (node: VariableStatement, options: CloneNodeInternalOptions<VariableStatement>): VariableStatement {
	return createVariableStatement(
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("declarationList", cloneNode(node.declarationList))
	);
}