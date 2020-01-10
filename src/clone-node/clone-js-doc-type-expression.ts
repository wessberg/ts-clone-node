import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsDocTypeExpression(
	node: TS.JSDocTypeExpression,
	options: CloneNodeVisitorOptions<TS.JSDocTypeExpression>
): TS.JSDocTypeExpression {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypeExpression, -1, -1) as TS.JSDocTypeExpression;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
