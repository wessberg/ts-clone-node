import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneContinueStatement(node: TS.ContinueStatement, options: CloneNodeInternalOptions<TS.ContinueStatement>): TS.ContinueStatement {
	return options.typescript.createContinue(
		options.hook("label", cloneNode(node.label, nextOptions(node.label, options)), node.label, payload(options))
	);
}
