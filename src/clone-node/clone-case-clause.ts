import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCaseClause(node: TS.CaseClause, options: CloneNodeInternalOptions<TS.CaseClause>): TS.CaseClause {
	return options.typescript.createCaseClause(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options)),
		options.hook("statements", cloneNodes(node.statements, nextOptions(options)), payload(options))
	);
}
