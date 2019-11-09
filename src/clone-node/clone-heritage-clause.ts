import {createHeritageClause, HeritageClause} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneHeritageClause (node: HeritageClause, options: CloneNodeInternalOptions<HeritageClause>): HeritageClause {
	return createHeritageClause(
		options.hook("token", cloneNode(node.token)),
		options.hook("types", cloneNodes(node.types))
	);
}