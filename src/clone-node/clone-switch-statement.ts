import {createSwitch, SwitchStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneSwitchStatement (node: SwitchStatement, options: CloneNodeInternalOptions<SwitchStatement>): SwitchStatement {
	return createSwitch(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("caseBlock", cloneNode(node.caseBlock))
	);
}