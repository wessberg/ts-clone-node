import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamespaceExportDeclaration(
	node: TS.NamespaceExportDeclaration,
	options: CloneNodeVisitorOptions<TS.NamespaceExportDeclaration>
): TS.NamespaceExportDeclaration {
	return options.typescript.createNamespaceExportDeclaration(options.hook("name", options.nextNode(node.name), node.name));
}
