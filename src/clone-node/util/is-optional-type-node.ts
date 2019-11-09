import {Node, OptionalTypeNode, SyntaxKind} from "typescript";

export function isOptionalTypeNode (node: Node): node is OptionalTypeNode {
	return node.kind === SyntaxKind.OptionalType;
}