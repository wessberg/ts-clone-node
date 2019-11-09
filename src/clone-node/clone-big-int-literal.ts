import {BigIntLiteral, createBigIntLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneBigIntLiteral (node: BigIntLiteral, options: CloneNodeInternalOptions<BigIntLiteral>): BigIntLiteral {
	return createBigIntLiteral(
		options.hook("text", node.text)
	);
}