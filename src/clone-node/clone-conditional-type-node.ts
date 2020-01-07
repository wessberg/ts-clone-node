import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConditionalTypeNode(
	node: TS.ConditionalTypeNode,
	options: CloneNodeInternalOptions<TS.ConditionalTypeNode>
): TS.ConditionalTypeNode {
	return options.typescript.createConditionalTypeNode(
		options.hook("checkType", cloneNode(node.checkType, nextOptions(node.checkType, options)), node.checkType, payload(options)),
		options.hook("extendsType", cloneNode(node.extendsType, nextOptions(node.extendsType, options)), node.extendsType, payload(options)),
		options.hook("trueType", cloneNode(node.trueType, nextOptions(node.trueType, options)), node.trueType, payload(options)),
		options.hook("falseType", cloneNode(node.falseType, nextOptions(node.falseType, options)), node.falseType, payload(options))
	);
}
