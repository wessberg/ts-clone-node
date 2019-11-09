import {createImportSpecifier, ImportSpecifier} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneImportSpecifier (node: ImportSpecifier, options: CloneNodeInternalOptions<ImportSpecifier>): ImportSpecifier {
	return createImportSpecifier(
		options.hook("propertyName", cloneNode(node.propertyName)),
		options.hook("name", cloneNode(node.name))
	);
}