import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeLiteralNode(node: TS.TypeLiteralNode, options: CloneNodeVisitorOptions<TS.TypeLiteralNode>): TS.TypeLiteralNode {
	return options.factory.createTypeLiteralNode(options.hook("members", options.nextNodes(node.members), node.members));
}
