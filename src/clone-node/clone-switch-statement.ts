import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSwitchStatement(node: TS.SwitchStatement, options: CloneNodeVisitorOptions<TS.SwitchStatement>): TS.SwitchStatement {
	return options.factory.createSwitchStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("caseBlock", options.nextNode(node.caseBlock), node.caseBlock)
	);
}
