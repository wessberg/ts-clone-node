import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneThrowStatement(node: TS.ThrowStatement, options: CloneNodeVisitorOptions<TS.ThrowStatement>): TS.ThrowStatement {
	return options.factory.createThrowStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
