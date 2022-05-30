import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneSourceFile(node: TS.SourceFile, options: CloneNodeVisitorOptions<TS.SourceFile>): TS.SourceFile {
	// Support TypeScript 3.x which uses updateSourceFileNode, whereas TypeScript 4.x uses updateSourceFile
	const updatedSourceFile = options.factory.updateSourceFile(
		node,
		options.hook("statements", options.nextNodes(node.statements), node.statements),
		node.isDeclarationFile,
		node.referencedFiles,
		node.typeReferenceDirectives,
		node.hasNoDefaultLib,
		node.libReferenceDirectives
	);

	(updatedSourceFile as Mutable<TS.SourceFile>).pos = -1;
	(updatedSourceFile as Mutable<TS.SourceFile>).end = -1;
	return updatedSourceFile;
}
