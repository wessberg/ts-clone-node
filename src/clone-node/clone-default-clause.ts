import {createDefaultClause, DefaultClause} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneDefaultClause (node: DefaultClause, options: CloneNodeInternalOptions<DefaultClause>): DefaultClause {
	return createDefaultClause(
		options.hook("statements", cloneNodes(node.statements))
	);
}