import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJsDocTypeExpression(
	node: TS.JSDocTypeExpression,
	options: CloneNodeInternalOptions<TS.JSDocTypeExpression>
): TS.JSDocTypeExpression {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypeExpression, -1, -1) as TS.JSDocTypeExpression;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.type = options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options));

	return baseNode;
}
