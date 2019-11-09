import {Node, RestTypeNode, SyntaxKind} from "typescript";

export function isRestTypeNode (node: Node): node is RestTypeNode {
	return node.kind === SyntaxKind.RestType;
}