import {TS} from "../type/ts";

/**
 * Returns true if the given Node is an OptionalTypeNode
 */
export function isOptionalTypeNode(node: TS.Node, typescript: typeof TS): node is TS.OptionalTypeNode {
	return node.kind === typescript.SyntaxKind.OptionalType;
}
