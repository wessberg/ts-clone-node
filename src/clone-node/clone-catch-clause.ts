import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCatchClause(node: TS.CatchClause, options: CloneNodeInternalOptions<TS.CatchClause>): TS.CatchClause {
	return options.typescript.createCatchClause(
		options.hook(
			"variableDeclaration",
			cloneNode(node.variableDeclaration, nextOptions(node.variableDeclaration, options)),
			node.variableDeclaration,
			payload(options)
		),
		options.hook("block", cloneNode(node.block, nextOptions(node.block, options)), node.block, payload(options))
	);
}
