import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportClause(node: TS.ImportClause, options: CloneNodeVisitorOptions<TS.ImportClause>): TS.ImportClause {
	return options.factory.createImportClause(
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("namedBindings", options.nextNode(node.namedBindings), node.namedBindings)
	);
}
