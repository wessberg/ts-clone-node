import {createLabel, LabeledStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneLabeledStatement (node: LabeledStatement, options: CloneNodeInternalOptions<LabeledStatement>): LabeledStatement {
	return createLabel(
		options.hook("label", cloneNode(node.label)),
		options.hook("statement", cloneNode(node.statement))
	);
}