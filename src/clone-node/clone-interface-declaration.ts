import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneInterfaceDeclaration(
	node: TS.InterfaceDeclaration,
	options: CloneNodeInternalOptions<TS.InterfaceDeclaration>
): TS.InterfaceDeclaration {
	return options.typescript.createInterfaceDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("heritageClauses", cloneNodes(node.heritageClauses, nextOptions(options)), node.heritageClauses, payload(options)),
		options.hook("members", cloneNodes(node.members, nextOptions(options)), node.members, payload(options))
	);
}
