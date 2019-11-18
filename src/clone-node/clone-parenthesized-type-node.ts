import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneParenthesizedTypeNode(
	node: TS.ParenthesizedTypeNode,
	options: CloneNodeInternalOptions<TS.ParenthesizedTypeNode>
): TS.ParenthesizedTypeNode {
	return options.typescript.createParenthesizedType(options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)));
}
