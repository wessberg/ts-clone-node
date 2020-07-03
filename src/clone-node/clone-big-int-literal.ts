import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBigIntLiteral(node: TS.BigIntLiteral, options: CloneNodeVisitorOptions<TS.BigIntLiteral>): TS.BigIntLiteral {
	return options.factory.createBigIntLiteral(options.hook("text", node.text, node.text));
}
