import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a RestTypeNode
 */
export function isRestTypeNode(node: MetaNode, typescript: typeof TS): node is TS.RestTypeNode {
	return node.kind === typescript.SyntaxKind.RestType;
}
