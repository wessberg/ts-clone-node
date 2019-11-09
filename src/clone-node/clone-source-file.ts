import {createSourceFile, SourceFile, updateSourceFileNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneSourceFile (node: SourceFile, options: CloneNodeInternalOptions<SourceFile>): SourceFile {
	const sourceFile = createSourceFile(
		node.fileName,
		node.getText(),
		node.languageVersion
	);

	return updateSourceFileNode(
		sourceFile,
		options.hook("statements", cloneNodes(node.statements)),
		node.isDeclarationFile,
		node.referencedFiles,
		node.typeReferenceDirectives,
		node.hasNoDefaultLib,
		node.libReferenceDirectives
	);
}