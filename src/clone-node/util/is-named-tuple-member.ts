import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a NamedTupleMember
 */
export function isNamedTupleMember(node: MetaNode, typescript: typeof TS): node is TS.NamedTupleMember {
	return typescript.SyntaxKind.NamedTupleMember != null && node.kind === typescript.SyntaxKind.NamedTupleMember;
}
