import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNamespaceImport(node: TS.NamespaceImport, options: CloneNodeVisitorOptions<TS.NamespaceImport>): TS.NamespaceImport {
	return options.factory.createNamespaceImport(options.hook("name", options.nextNode(node.name), node.name));
}
