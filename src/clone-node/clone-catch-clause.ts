import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneCatchClause(node: TS.CatchClause, options: CloneNodeVisitorOptions<TS.CatchClause>): TS.CatchClause {
	return options.factory.createCatchClause(
		options.hook("variableDeclaration", options.nextNode(node.variableDeclaration), node.variableDeclaration),
		options.hook("block", options.nextNode(node.block), node.block)
	);
}
