import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneMethodSignature(node: TS.MethodSignature, options: CloneNodeInternalOptions<TS.MethodSignature>): TS.MethodSignature {
	const updatedMethodSignature = options.typescript.createMethodSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), payload(options))
	);

	// Make sure to also update the modifiers
	// Workaround for: https://github.com/microsoft/TypeScript/issues/35959
	const updatedModifiers = options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options));
	if (updatedModifiers == null || "pos" in updatedModifiers) {
		updatedMethodSignature.modifiers = updatedModifiers;
	} else {
		updatedMethodSignature.modifiers = options.typescript.createNodeArray(updatedModifiers);
	}

	return updatedMethodSignature;
}
