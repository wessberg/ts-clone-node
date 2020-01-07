import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneLiteralTypeNode(node: TS.LiteralTypeNode, options: CloneNodeInternalOptions<TS.LiteralTypeNode>): TS.LiteralTypeNode {
	return options.typescript.createLiteralTypeNode(
		options.hook("literal", cloneNode(node.literal, nextOptions(options)), node.literal, payload(options))
	);
}
