import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneVariableStatement(node: TS.VariableStatement, options: CloneNodeVisitorOptions<TS.VariableStatement>): TS.VariableStatement {
	return options.typescript.createVariableStatement(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("declarationList", options.nextNode(node.declarationList), node.declarationList)
	);
}
