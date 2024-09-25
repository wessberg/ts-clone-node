import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JsxNamespacedName
 */
export function isJsxNamespacedName(node: MetaNode, typescript: typeof TS): node is TS.JsxNamespacedName {
	// TypeScript >=5.1
	if ("isJsxNamespacedName" in typescript) {
		return typescript.isJsxNamespacedName(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JsxNamespacedName;
}
