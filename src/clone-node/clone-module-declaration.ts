import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneModuleDeclaration(node: TS.ModuleDeclaration, options: CloneNodeInternalOptions<TS.ModuleDeclaration>): TS.ModuleDeclaration {
	return options.typescript.createModuleDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(node.body, options)), node.body, payload(options)),
		options.hook("flags", node.flags, node.flags, payload(options))
	);
}
