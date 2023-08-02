import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is an ImportTypeAssertionContainer
 */
export function isImportTypeAssertionContainer(node: MetaNode, typescript: typeof TS): node is TS.ImportTypeAssertionContainer {
	return typescript.SyntaxKind.ImportTypeAssertionContainer != null && node.kind === typescript.SyntaxKind.ImportTypeAssertionContainer;
}
