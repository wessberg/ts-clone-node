import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTupleTypeNode(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	if ("elementTypes" in node) {
		const castNode = node as TS.TupleTypeNode & {elementTypes: TS.NodeArray<TS.TypeNode | TS.NamedTupleMember>};
		return options.factory.createTupleTypeNode(options.hook("elements", options.nextNodes(castNode.elementTypes), castNode.elementTypes));
	} else {
		return options.factory.createTupleTypeNode(options.hook("elements", options.nextNodes(node.elements), node.elements));
	}
	
}
