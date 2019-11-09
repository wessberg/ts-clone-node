import {createImportClause, ImportClause} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneImportClause (node: ImportClause, options: CloneNodeInternalOptions<ImportClause>): ImportClause {
	return createImportClause(
		options.hook("name", cloneNode(node.name)),
		options.hook("namedBindings", cloneNode(node.namedBindings))
	);
}