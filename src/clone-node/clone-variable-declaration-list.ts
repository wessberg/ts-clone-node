import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneVariableDeclarationList(node: TS.VariableDeclarationList, options: CloneNodeVisitorOptions<TS.VariableDeclarationList>): TS.VariableDeclarationList {
	return options.factory.createVariableDeclarationList(
		options.hook("declarations", options.nextNodes(node.declarations), node.declarations),
		options.hook("flags", node.flags, node.flags)
	);
}
