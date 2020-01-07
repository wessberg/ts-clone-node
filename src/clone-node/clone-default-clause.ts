import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneDefaultClause(node: TS.DefaultClause, options: CloneNodeInternalOptions<TS.DefaultClause>): TS.DefaultClause {
	return options.typescript.createDefaultClause(
		options.hook("statements", cloneNodes(node.statements, nextOptions(node.statements, options)), node.statements, payload(options))
	);
}
