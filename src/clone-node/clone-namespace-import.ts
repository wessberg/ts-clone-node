import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneNamespaceImport(node: TS.NamespaceImport, options: CloneNodeInternalOptions<TS.NamespaceImport>): TS.NamespaceImport {
	return options.typescript.createNamespaceImport(
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options))
	);
}
