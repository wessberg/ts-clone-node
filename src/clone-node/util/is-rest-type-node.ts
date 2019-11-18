import {TS} from "../type/ts";

/**
 * Returns true if the given Node is a RestTypeNode
 */
export function isRestTypeNode(node: TS.Node, typescript: typeof TS): node is TS.RestTypeNode {
	return node.kind === typescript.SyntaxKind.RestType;
}
