import {createExportSpecifier, ExportSpecifier} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneExportSpecifier (node: ExportSpecifier, options: CloneNodeInternalOptions<ExportSpecifier>): ExportSpecifier {
	return createExportSpecifier(
		options.hook("propertyName", cloneNode(node.propertyName)),
		options.hook("name", cloneNode(node.name))
	);
}