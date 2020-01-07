import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConstructSignatureDeclaration(
	node: TS.ConstructSignatureDeclaration,
	options: CloneNodeInternalOptions<TS.ConstructSignatureDeclaration>
): TS.ConstructSignatureDeclaration {
	return options.typescript.createConstructSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options))
	);
}
