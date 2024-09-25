import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a NamedTupleMember
 */
export function isNamedTupleMember(node: MetaNode, typescript: typeof TS): node is TS.NamedTupleMember {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	return (typescript.SyntaxKind as {NamedTupleMember?: number}).NamedTupleMember != null && node.kind === typescript.SyntaxKind.NamedTupleMember;
}
