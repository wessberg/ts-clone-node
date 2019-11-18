import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneVariableDeclarationList(
	node: TS.VariableDeclarationList,
	options: CloneNodeInternalOptions<TS.VariableDeclarationList>
): TS.VariableDeclarationList {
	return options.typescript.createVariableDeclarationList(
		options.hook("declarations", cloneNodes(node.declarations, nextOptions(options)), payload(options)),
		options.hook("flags", cloneNode(node.flags, nextOptions(options)), payload(options))
	);
}
