import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportTypeNode(node: TS.ImportTypeNode, options: CloneNodeVisitorOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	return options.factory.createImportTypeNode(
		options.hook("argument", options.nextNode(node.argument), node.argument),
		options.hook("assertions", options.nextNode(node.assertions), node.assertions),
		options.hook("qualifier", options.nextNode(node.qualifier), node.qualifier),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("isTypeOf", node.isTypeOf, node.isTypeOf)
	);
}
