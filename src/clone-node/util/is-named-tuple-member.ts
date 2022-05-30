import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a NamedTupleMember
 */
export function isNamedTupleMember(node: MetaNode, typescript: typeof TS): node is TS.NamedTupleMember {
	return typescript.SyntaxKind.NamedTupleMember != null && node.kind === typescript.SyntaxKind.NamedTupleMember;
}
