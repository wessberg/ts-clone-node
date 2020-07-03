import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneSourceFile(node: TS.SourceFile, options: CloneNodeVisitorOptions<TS.SourceFile>): TS.SourceFile {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.SourceFile, options: CloneNodeVisitorOptions<TS.SourceFile>): TS.SourceFile {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	const updatedSourceFile = typescript.updateSourceFileNode(
		node as never,
		options.hook("statements", options.nextNodes(node.statements), node.statements) as never,
		node.isDeclarationFile as never,
		node.referencedFiles as never,
		node.typeReferenceDirectives as never,
		node.hasNoDefaultLib as never,
		node.libReferenceDirectives as never
	);

	((updatedSourceFile as unknown) as Mutable<TS.SourceFile>).pos = -1;
	((updatedSourceFile as unknown) as Mutable<TS.SourceFile>).end = -1;
	return (updatedSourceFile as unknown) as TS.SourceFile;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.SourceFile, options: CloneNodeVisitorOptions<TS.SourceFile>): TS.SourceFile {
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
