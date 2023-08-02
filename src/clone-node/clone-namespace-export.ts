import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNamespaceExport(node: TS.NamespaceExport, options: CloneNodeVisitorOptions<TS.NamespaceExport>): TS.NamespaceExport {
	return options.factory.createNamespaceExport(options.hook("name", options.nextNode(node.name), node.name));
}
