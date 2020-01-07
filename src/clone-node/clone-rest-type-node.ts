import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneRestTypeNode(node: TS.RestTypeNode, options: CloneNodeInternalOptions<TS.RestTypeNode>): TS.RestTypeNode {
	return options.typescript.createRestTypeNode(
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options))
	);
}
