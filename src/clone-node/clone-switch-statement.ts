import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSwitchStatement(node: TS.SwitchStatement, options: CloneNodeVisitorOptions<TS.SwitchStatement>): TS.SwitchStatement {
	return options.factory.createSwitchStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("caseBlock", options.nextNode(node.caseBlock), node.caseBlock)
	);
}
