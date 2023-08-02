import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBigIntLiteral(node: TS.BigIntLiteral, options: CloneNodeVisitorOptions<TS.BigIntLiteral>): TS.BigIntLiteral {
	return options.factory.createBigIntLiteral(options.hook("text", node.text, node.text));
}
