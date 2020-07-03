import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamespaceImport(node: TS.NamespaceImport, options: CloneNodeVisitorOptions<TS.NamespaceImport>): TS.NamespaceImport {
	return options.factory.createNamespaceImport(options.hook("name", options.nextNode(node.name), node.name));
}
