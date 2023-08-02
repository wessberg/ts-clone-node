import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneConditionalTypeNode(node: TS.ConditionalTypeNode, options: CloneNodeVisitorOptions<TS.ConditionalTypeNode>): TS.ConditionalTypeNode {
	return options.factory.createConditionalTypeNode(
		options.hook("checkType", options.nextNode(node.checkType), node.checkType),
		options.hook("extendsType", options.nextNode(node.extendsType), node.extendsType),
		options.hook("trueType", options.nextNode(node.trueType), node.trueType),
		options.hook("falseType", options.nextNode(node.falseType), node.falseType)
	);
}
