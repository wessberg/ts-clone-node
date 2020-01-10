import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneParenthesizedTypeNode(
	node: TS.ParenthesizedTypeNode,
	options: CloneNodeVisitorOptions<TS.ParenthesizedTypeNode>
): TS.ParenthesizedTypeNode {
	return options.typescript.createParenthesizedType(options.hook("type", options.nextNode(node.type), node.type));
}
