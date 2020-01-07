import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneIndexSignatureDeclaration(
	node: TS.IndexSignatureDeclaration,
	options: CloneNodeInternalOptions<TS.IndexSignatureDeclaration>
): TS.IndexSignatureDeclaration {
	return options.typescript.createIndexSignature(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(node.parameters, options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options))!
	);
}
