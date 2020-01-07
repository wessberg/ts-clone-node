import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneIfStatement(node: TS.IfStatement, options: CloneNodeInternalOptions<TS.IfStatement>): TS.IfStatement {
	return options.typescript.createIf(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options)),
		options.hook("thenStatement", cloneNode(node.thenStatement, nextOptions(options)), node.thenStatement, payload(options)),
		options.hook("elseStatement", cloneNode(node.elseStatement, nextOptions(options)), node.elseStatement, payload(options))
	);
}
