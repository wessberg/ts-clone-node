import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneCatchClause(node: TS.CatchClause, options: CloneNodeVisitorOptions<TS.CatchClause>): TS.CatchClause {
	return options.factory.createCatchClause(
		options.hook("variableDeclaration", options.nextNode(node.variableDeclaration), node.variableDeclaration),
		options.hook("block", options.nextNode(node.block), node.block)
	);
}
