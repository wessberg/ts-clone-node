import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneReturnStatement(node: TS.ReturnStatement, options: CloneNodeVisitorOptions<TS.ReturnStatement>): TS.ReturnStatement {
	return options.factory.createReturnStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
