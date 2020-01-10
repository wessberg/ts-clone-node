import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneReturnStatement(node: TS.ReturnStatement, options: CloneNodeVisitorOptions<TS.ReturnStatement>): TS.ReturnStatement {
	return options.typescript.createReturn(options.hook("expression", options.nextNode(node.expression), node.expression));
}
