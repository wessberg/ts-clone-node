import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneArrayTypeNode(node: TS.ArrayTypeNode, options: CloneNodeVisitorOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	return options.typescript.createArrayTypeNode(
		options.hook("elementType", node.elementType, node.elementType)
		// options.hook("elementType", options.nextNode(node.elementType), node.elementType)
	);
}
