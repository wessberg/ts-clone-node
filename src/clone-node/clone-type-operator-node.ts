import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeOperatorNode(node: TS.TypeOperatorNode, options: CloneNodeVisitorOptions<TS.TypeOperatorNode>): TS.TypeOperatorNode {
	return options.factory.createTypeOperatorNode(options.hook("operator", node.operator, node.operator), options.hook("type", options.nextNode(node.type), node.type));
}
