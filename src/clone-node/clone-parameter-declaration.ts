import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneParameterDeclaration(
	node: TS.ParameterDeclaration,
	options: CloneNodeInternalOptions<TS.ParameterDeclaration>
): TS.ParameterDeclaration {
	return options.typescript.createParameter(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken, nextOptions(node.dotDotDotToken, options)), node.dotDotDotToken, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(node.questionToken, options)), node.questionToken, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(node.initializer, options)), node.initializer, payload(options))
	);
}
