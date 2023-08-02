import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a RestTypeNode
 */
export function isRestTypeNode(node: MetaNode, typescript: typeof TS): node is TS.RestTypeNode {
	// TypeScript 4.x
	if (("isRestTypeNode" in typescript) as never) {
		return typescript.isRestTypeNode(node);
	}
	return node.kind === typescript.SyntaxKind.RestType;
}
