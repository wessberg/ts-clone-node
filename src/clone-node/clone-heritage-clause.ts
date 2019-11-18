import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneHeritageClause(node: TS.HeritageClause, options: CloneNodeInternalOptions<TS.HeritageClause>): TS.HeritageClause {
	return options.typescript.createHeritageClause(
		options.hook("token", cloneNode(node.token, nextOptions(options)), payload(options)),
		options.hook("types", cloneNodes(node.types, nextOptions(options)), payload(options))
	);
}
