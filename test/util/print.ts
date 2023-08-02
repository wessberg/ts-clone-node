import type {TS} from "../../src/clone-node/type/ts.js";
import type {MetaNode} from "../../src/clone-node/type/meta-node.js";

/**
 * Prints the given SourceFile
 */
export function print(node: MetaNode, typescript: typeof TS, sourceFile: TS.SourceFile): string {
	if (typescript.isSourceFile(node)) return typescript.createPrinter().printFile(node);
	return typescript.createPrinter({newLine: typescript.NewLineKind.LineFeed}).printNode(typescript.EmitHint.Unspecified, node, node.getSourceFile() ?? sourceFile);
}
