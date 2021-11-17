import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportSpecifier(node: TS.ExportSpecifier, options: CloneNodeVisitorOptions<TS.ExportSpecifier>): TS.ExportSpecifier {
	return options.factory.createExportSpecifier(
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("propertyName", options.nextNode(node.propertyName), node.propertyName),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
