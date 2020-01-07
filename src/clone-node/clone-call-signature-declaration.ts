import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCallSignatureDeclaration(
	node: TS.CallSignatureDeclaration,
	options: CloneNodeInternalOptions<TS.CallSignatureDeclaration>
): TS.CallSignatureDeclaration {
	return options.typescript.createCallSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options))
	);
}
