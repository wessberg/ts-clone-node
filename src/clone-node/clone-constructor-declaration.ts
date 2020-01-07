import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConstructorDeclaration(
	node: TS.ConstructorDeclaration,
	options: CloneNodeInternalOptions<TS.ConstructorDeclaration>
): TS.ConstructorDeclaration {
	return options.typescript.createConstructor(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(options)), node.body, payload(options))
	);
}
