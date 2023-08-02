import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneVariableStatement(node: TS.VariableStatement, options: CloneNodeVisitorOptions<TS.VariableStatement>): TS.VariableStatement {
	return options.factory.createVariableStatement(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("declarationList", options.nextNode(node.declarationList), node.declarationList)
	);
}
