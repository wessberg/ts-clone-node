import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeLiteralNode(node: TS.TypeLiteralNode, options: CloneNodeInternalOptions<TS.TypeLiteralNode>): TS.TypeLiteralNode {
	return options.typescript.createTypeLiteralNode(
		options.hook("members", cloneNodes(node.members, nextOptions(options)), node.members, payload(options))
	);
}
