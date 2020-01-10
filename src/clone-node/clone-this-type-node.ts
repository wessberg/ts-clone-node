import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneThisTypeNode(_node: TS.ThisTypeNode, options: CloneNodeVisitorOptions<TS.ThisTypeNode>): TS.ThisTypeNode {
	return options.typescript.createThisTypeNode();
}
