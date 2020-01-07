import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneGetAccessorDeclaration(
	node: TS.GetAccessorDeclaration,
	options: CloneNodeInternalOptions<TS.GetAccessorDeclaration>
): TS.GetAccessorDeclaration {
	return options.typescript.createGetAccessor(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(options)), node.body, payload(options))
	);
}
