import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeOperatorNode(node: TS.TypeOperatorNode, options: CloneNodeInternalOptions<TS.TypeOperatorNode>): TS.TypeOperatorNode {
	return options.typescript.createTypeOperatorNode(
		options.hook("operator", node.operator, node.operator, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options))
	);
}
