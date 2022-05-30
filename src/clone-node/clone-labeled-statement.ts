import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneLabeledStatement(node: TS.LabeledStatement, options: CloneNodeVisitorOptions<TS.LabeledStatement>): TS.LabeledStatement {
	return options.factory.createLabeledStatement(
		options.hook("label", options.nextNode(node.label), node.label),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
