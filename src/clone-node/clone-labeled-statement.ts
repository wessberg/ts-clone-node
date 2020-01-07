import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneLabeledStatement(node: TS.LabeledStatement, options: CloneNodeInternalOptions<TS.LabeledStatement>): TS.LabeledStatement {
	return options.typescript.createLabel(
		options.hook("label", cloneNode(node.label, nextOptions(options)), node.label, payload(options)),
		options.hook("statement", cloneNode(node.statement, nextOptions(options)), node.statement, payload(options))
	);
}
