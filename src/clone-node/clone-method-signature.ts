import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneMethodSignature(node: TS.MethodSignature, options: CloneNodeInternalOptions<TS.MethodSignature>): TS.MethodSignature {
	const updatedMethodSignature = options.typescript.createMethodSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), node.questionToken, payload(options))
	);

	// Make sure to also update the modifiers
	// Workaround for: https://github.com/microsoft/TypeScript/issues/35959
	updatedMethodSignature.modifiers = ensureNodeArray(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.typescript
	);
	return updatedMethodSignature;
}
