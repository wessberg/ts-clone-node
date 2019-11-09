import {createNamespaceExportDeclaration, NamespaceExportDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneNamespaceExportDeclaration (node: NamespaceExportDeclaration, options: CloneNodeInternalOptions<NamespaceExportDeclaration>): NamespaceExportDeclaration {
	return createNamespaceExportDeclaration(
		options.hook("name", cloneNode(node.name))
	);
}