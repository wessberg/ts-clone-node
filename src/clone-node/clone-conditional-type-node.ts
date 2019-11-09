import {ConditionalTypeNode, createConditionalTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneConditionalTypeNode (node: ConditionalTypeNode, options: CloneNodeInternalOptions<ConditionalTypeNode>): ConditionalTypeNode {
	return createConditionalTypeNode(
		options.hook("checkType", cloneNode(node.checkType)),
		options.hook("extendsType", cloneNode(node.extendsType)),
		options.hook("trueType", cloneNode(node.trueType)),
		options.hook("falseType", cloneNode(node.falseType))
	);
}