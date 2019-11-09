import {createPrinter, EmitHint, isSourceFile, Node} from "typescript";

/**
 * Prints the given SourceFile
 * @param node
 */
export function print (node: Node): string {
	if (isSourceFile(node)) return createPrinter().printFile(node);
	return createPrinter().printNode(EmitHint.Unspecified, node, node.getSourceFile());
}