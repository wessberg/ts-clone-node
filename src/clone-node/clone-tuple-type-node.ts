import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTupleTypeNode(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	return options.typescript.createTupleTypeNode(options.hook("elementTypes", options.nextNodes(node.elementTypes), node.elementTypes));
}
