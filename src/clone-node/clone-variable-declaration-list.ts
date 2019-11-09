import {createVariableDeclarationList, VariableDeclarationList} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneVariableDeclarationList (node: VariableDeclarationList, options: CloneNodeInternalOptions<VariableDeclarationList>): VariableDeclarationList {
	return createVariableDeclarationList(
		options.hook("declarations", cloneNodes(node.declarations)),
		options.hook("flags", cloneNode(node.flags)),
	);
}