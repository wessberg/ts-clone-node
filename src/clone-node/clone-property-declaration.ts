import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePropertyDeclaration(
	node: TS.PropertyDeclaration,
	options: CloneNodeInternalOptions<TS.PropertyDeclaration>
): TS.PropertyDeclaration {
	return options.typescript.createProperty(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		node.questionToken != null
			? options.hook("questionToken", cloneNode(node.questionToken, nextOptions(node.questionToken, options)), node.questionToken, payload(options))
			: options.hook(
					"exclamationToken",
					cloneNode(node.exclamationToken, nextOptions(node.exclamationToken, options)),
					node.exclamationToken,
					payload(options)
			  ),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(node.initializer, options)), node.initializer, payload(options))
	);
}
