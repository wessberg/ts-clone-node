import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportAttribute(node: TS.ImportAttribute, options: CloneNodeVisitorOptions<TS.ImportAttribute>): TS.ImportAttribute {
	return options.factory.createImportAttribute(options.hook("name", options.nextNode(node.name), node.name), options.hook("value", options.nextNode(node.value), node.value));
}
