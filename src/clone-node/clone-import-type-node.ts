import {createImportTypeNode, ImportTypeNode} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneImportTypeNode (node: ImportTypeNode, options: CloneNodeInternalOptions<ImportTypeNode>): ImportTypeNode {
	return createImportTypeNode(
		options.hook("argument", cloneNode(node.argument)),
		options.hook("qualifier", cloneNode(node.qualifier)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("isTypeOf", node.isTypeOf)
	);
}