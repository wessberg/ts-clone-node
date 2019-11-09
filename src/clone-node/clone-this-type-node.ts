import {createThisTypeNode, ThisTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneThisTypeNode (_node: ThisTypeNode, _options: CloneNodeInternalOptions<ThisTypeNode>): ThisTypeNode {
	return createThisTypeNode();
}