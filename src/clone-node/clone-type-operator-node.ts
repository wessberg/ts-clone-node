import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeOperatorNode(node: TS.TypeOperatorNode, options: CloneNodeVisitorOptions<TS.TypeOperatorNode>): TS.TypeOperatorNode {
	return options.factory.createTypeOperatorNode(options.hook("operator", node.operator, node.operator), options.hook("type", options.nextNode(node.type), node.type));
}
