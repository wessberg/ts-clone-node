import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTupleTypeNode(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	return options.factory.createTupleTypeNode(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
