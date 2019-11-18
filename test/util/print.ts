import {TS} from "../../src/clone-node/type/ts";

/**
 * Prints the given SourceFile
 */
export function print(node: TS.Node, typescript: typeof TS): string {
	if (typescript.isSourceFile(node)) return typescript.createPrinter().printFile(node);
	return typescript.createPrinter().printNode(typescript.EmitHint.Unspecified, node, node.getSourceFile());
}
