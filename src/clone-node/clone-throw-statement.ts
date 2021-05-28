import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneThrowStatement(node: TS.ThrowStatement, options: CloneNodeVisitorOptions<TS.ThrowStatement>): TS.ThrowStatement {
	return options.factory.createThrowStatement(options.hook("expression", options.nextNode(node.expression), node.expression)!);
}
