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
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		node.questionToken != null
			? options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), payload(options))
			: options.hook("exclamationToken", cloneNode(node.exclamationToken, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), payload(options))
	);
}
