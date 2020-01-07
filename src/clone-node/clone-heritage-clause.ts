import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneHeritageClause(node: TS.HeritageClause, options: CloneNodeInternalOptions<TS.HeritageClause>): TS.HeritageClause {
	return options.typescript.createHeritageClause(
		options.hook("token", node.token, node.token, payload(options)),
		options.hook("types", cloneNodes(node.types, nextOptions(node.types, options)), node.types, payload(options))
	);
}
