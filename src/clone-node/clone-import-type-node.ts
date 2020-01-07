import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportTypeNode(node: TS.ImportTypeNode, options: CloneNodeInternalOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	return options.typescript.createImportTypeNode(
		options.hook("argument", cloneNode(node.argument, nextOptions(node.argument, options)), node.argument, payload(options)),
		options.hook("qualifier", cloneNode(node.qualifier, nextOptions(node.qualifier, options)), node.qualifier, payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(node.typeArguments, options)), node.typeArguments, payload(options)),
		options.hook("isTypeOf", node.isTypeOf, node.isTypeOf, payload(options))
	);
}
