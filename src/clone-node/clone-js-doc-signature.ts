import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";
import {nextOptions} from "./util/next-options";
import {cloneNodes} from "./clone-nodes";

export function cloneJSDocSignature(node: TS.JSDocSignature, options: CloneNodeInternalOptions<TS.JSDocSignature>): TS.JSDocSignature {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocSignature, -1, -1) as TS.JSDocSignature;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.type = options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options));
	baseNode.typeParameters = options.hook(
		"typeParameters",
		cloneNodes(node.typeParameters, nextOptions(options)),
		node.typeParameters,
		payload(options)
	);
	baseNode.parameters = options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options));

	return baseNode;
}
