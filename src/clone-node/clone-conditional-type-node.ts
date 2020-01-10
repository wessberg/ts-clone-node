import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneConditionalTypeNode(
	node: TS.ConditionalTypeNode,
	options: CloneNodeVisitorOptions<TS.ConditionalTypeNode>
): TS.ConditionalTypeNode {
	return options.typescript.createConditionalTypeNode(
		options.hook("checkType", options.nextNode(node.checkType), node.checkType),
		options.hook("extendsType", options.nextNode(node.extendsType), node.extendsType),
		options.hook("trueType", options.nextNode(node.trueType), node.trueType),
		options.hook("falseType", options.nextNode(node.falseType), node.falseType)
	);
}
