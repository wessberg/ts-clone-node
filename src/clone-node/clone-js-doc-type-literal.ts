import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNodes} from "./clone-nodes";

export function cloneJSDocTypeLiteral(node: TS.JSDocTypeLiteral, options: CloneNodeInternalOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypeLiteral, -1, -1) as TS.JSDocTypeLiteral;
	baseNode.jsDocPropertyTags = options.hook(
		"jsDocPropertyTags",
		cloneNodes(node.jsDocPropertyTags, nextOptions(node.jsDocPropertyTags, options)),
		node.jsDocPropertyTags,
		payload(options)
	);
	baseNode.isArrayType = options.hook("isArrayType", node.isArrayType, node.isArrayType, payload(options));

	return baseNode;
}
