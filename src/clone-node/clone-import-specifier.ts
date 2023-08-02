import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportSpecifier(node: TS.ImportSpecifier, options: CloneNodeVisitorOptions<TS.ImportSpecifier>): TS.ImportSpecifier {
	return options.factory.createImportSpecifier(
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("propertyName", options.nextNode(node.propertyName), node.propertyName),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
