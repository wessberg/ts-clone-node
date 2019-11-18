import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneThisTypeNode(_node: TS.ThisTypeNode, options: CloneNodeInternalOptions<TS.ThisTypeNode>): TS.ThisTypeNode {
	return options.typescript.createThisTypeNode();
}
