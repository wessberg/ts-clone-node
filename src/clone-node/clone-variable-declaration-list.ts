import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneVariableDeclarationList(
	node: TS.VariableDeclarationList,
	options: CloneNodeInternalOptions<TS.VariableDeclarationList>
): TS.VariableDeclarationList {
	return options.typescript.createVariableDeclarationList(
		options.hook("declarations", cloneNodes(node.declarations, nextOptions(node.declarations, options)), node.declarations, payload(options)),
		options.hook("flags", node.flags, node.flags, payload(options))
	);
}
