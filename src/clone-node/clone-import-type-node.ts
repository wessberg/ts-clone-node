import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportTypeNode(node: TS.ImportTypeNode, options: CloneNodeVisitorOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	return options.factory.createImportTypeNode(
		options.hook("argument", options.nextNode(node.argument), node.argument),
		options.hook("qualifier", options.nextNode(node.qualifier), node.qualifier),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("isTypeOf", node.isTypeOf, node.isTypeOf)
	);
}
