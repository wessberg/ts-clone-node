import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSourceFile(node: TS.SourceFile, options: CloneNodeVisitorOptions<TS.SourceFile>): TS.SourceFile {
	const updatedSourceFile = options.typescript.updateSourceFileNode(
		node,
		options.hook("statements", options.nextNodes(node.statements), node.statements),
		node.isDeclarationFile,
		node.referencedFiles,
		node.typeReferenceDirectives,
		node.hasNoDefaultLib,
		node.libReferenceDirectives
	);

	updatedSourceFile.pos = -1;
	updatedSourceFile.end = -1;
	return updatedSourceFile;
}
