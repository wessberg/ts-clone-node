import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneBreakStatement(node: TS.BreakStatement, options: CloneNodeInternalOptions<TS.BreakStatement>): TS.BreakStatement {
	return options.typescript.createBreak(options.hook("label", cloneNode(node.label, nextOptions(node.label, options)), node.label, payload(options)));
}
