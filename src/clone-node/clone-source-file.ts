import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneSourceFile(node: TS.SourceFile, options: CloneNodeInternalOptions<TS.SourceFile>): TS.SourceFile {
	const sourceFile = options.typescript.createSourceFile(node.fileName, node.getText(), node.languageVersion);

	return options.typescript.updateSourceFileNode(
		sourceFile,
		options.hook("statements", cloneNodes(node.statements, nextOptions(node.statements, options)), node.statements, payload(options)),
		node.isDeclarationFile,
		node.referencedFiles,
		node.typeReferenceDirectives,
		node.hasNoDefaultLib,
		node.libReferenceDirectives
	);
}
