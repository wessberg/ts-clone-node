import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {TS} from "./type/ts.js";

export function cloneVariableDeclarationList(node: TS.VariableDeclarationList, options: CloneNodeVisitorOptions<TS.VariableDeclarationList>): TS.VariableDeclarationList {
	return options.factory.createVariableDeclarationList(
		options.hook("declarations", options.nextNodes(node.declarations), node.declarations),
		options.hook("flags", node.flags, node.flags)
	);
}
