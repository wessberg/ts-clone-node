import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneModuleDeclaration(node: TS.ModuleDeclaration, options: CloneNodeVisitorOptions<TS.ModuleDeclaration>): TS.ModuleDeclaration {
	return options.factory.createModuleDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("body", options.nextNode(node.body), node.body),
		options.hook("flags", node.flags, node.flags)
	);
}
