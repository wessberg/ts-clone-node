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
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(options)), payload(options))
	);
}
