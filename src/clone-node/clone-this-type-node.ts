import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneThisTypeNode(_node: TS.ThisTypeNode, options: CloneNodeVisitorOptions<TS.ThisTypeNode>): TS.ThisTypeNode {
	return options.factory.createThisTypeNode();
}
