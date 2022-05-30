import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneArrayTypeNode(node: TS.ArrayTypeNode, options: CloneNodeVisitorOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	return options.factory.createArrayTypeNode(options.hook("elementType", options.nextNode(node.elementType), node.elementType));
}
