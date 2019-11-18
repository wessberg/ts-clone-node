import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneIndexedAccessTypeNode(
	node: TS.IndexedAccessTypeNode,
	options: CloneNodeInternalOptions<TS.IndexedAccessTypeNode>
): TS.IndexedAccessTypeNode {
	return options.typescript.createIndexedAccessTypeNode(
		options.hook("objectType", cloneNode(node.objectType, nextOptions(options)), payload(options)),
		options.hook("indexType", cloneNode(node.indexType, nextOptions(options)), payload(options))
	);
}
