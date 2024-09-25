import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";

export function cloneImportAttributes(node: TS.ImportAttributes, options: CloneNodeVisitorOptions<TS.ImportAttributes>): TS.ImportAttributes {
	return options.factory.createImportAttributes(
		ensureNodeArray(options.hook("elements", options.nextNodes(node.elements), node.elements), options.factory),
		options.hook("multiLine", node.multiLine, node.multiLine)
	);
}
