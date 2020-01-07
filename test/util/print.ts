import {TS} from "../../src/clone-node/type/ts";
import {MetaNode} from "../../src/clone-node/type/meta-node";

/**
 * Prints the given SourceFile
 */
export function print(node: MetaNode, typescript: typeof TS): string {
	if (typescript.isSourceFile(node)) return typescript.createPrinter().printFile(node);
	return typescript.createPrinter().printNode(typescript.EmitHint.Unspecified, node, node.getSourceFile());
}
