import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneSwitchStatement(node: TS.SwitchStatement, options: CloneNodeInternalOptions<TS.SwitchStatement>): TS.SwitchStatement {
	return options.typescript.createSwitch(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)),
		options.hook("caseBlock", cloneNode(node.caseBlock, nextOptions(options)), payload(options))
	);
}
