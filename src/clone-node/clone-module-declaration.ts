import {createModuleDeclaration, ModuleDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneModuleDeclaration (node: ModuleDeclaration, options: CloneNodeInternalOptions<ModuleDeclaration>): ModuleDeclaration {
	return createModuleDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("body", cloneNode(node.body)),
		options.hook("flags", cloneNode(node.flags))
	);
}