import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeLiteralNode(node: TS.TypeLiteralNode, options: CloneNodeVisitorOptions<TS.TypeLiteralNode>): TS.TypeLiteralNode {
	return options.typescript.createTypeLiteralNode(options.hook("members", options.nextNodes(node.members), node.members));
}
