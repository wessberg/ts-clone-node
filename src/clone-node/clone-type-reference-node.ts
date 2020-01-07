import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeReferenceNode(node: TS.TypeReferenceNode, options: CloneNodeInternalOptions<TS.TypeReferenceNode>): TS.TypeReferenceNode {
	return options.typescript.createTypeReferenceNode(
		options.hook("typeName", cloneNode(node.typeName, nextOptions(node.typeName, options)), node.typeName, payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(node.typeArguments, options)), node.typeArguments, payload(options))
	);
}
