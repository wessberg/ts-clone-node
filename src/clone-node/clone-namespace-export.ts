import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamespaceExport(node: TS.NamespaceExport, options: CloneNodeVisitorOptions<TS.NamespaceExport>): TS.NamespaceExport {
	return options.typescript.createNamespaceExport(options.hook("name", options.nextNode(node.name), node.name));
}
