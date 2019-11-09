import {createNamespaceImport, NamespaceImport} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneNamespaceImport (node: NamespaceImport, options: CloneNodeInternalOptions<NamespaceImport>): NamespaceImport {
	return createNamespaceImport(
		options.hook("name", cloneNode(node.name))
	);
}