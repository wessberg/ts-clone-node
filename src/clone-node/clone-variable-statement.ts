import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneVariableStatement(node: TS.VariableStatement, options: CloneNodeInternalOptions<TS.VariableStatement>): TS.VariableStatement {
	return options.typescript.createVariableStatement(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("declarationList", cloneNode(node.declarationList, nextOptions(options)), node.declarationList, payload(options))
	);
}
