import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNumericLiteral(node: TS.NumericLiteral, options: CloneNodeVisitorOptions<TS.NumericLiteral>): TS.NumericLiteral {
	return options.factory.createNumericLiteral(options.hook("text", node.text, node.text));
}
