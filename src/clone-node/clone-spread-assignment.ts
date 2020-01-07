import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {TS} from "./type/ts";

export function cloneSpreadAssignment(node: TS.SpreadAssignment, options: CloneNodeInternalOptions<TS.SpreadAssignment>): TS.SpreadAssignment {
	return options.typescript.createSpreadAssignment(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
