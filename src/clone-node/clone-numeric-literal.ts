import {createNumericLiteral, NumericLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneNumericLiteral (node: NumericLiteral, options: CloneNodeInternalOptions<NumericLiteral>): NumericLiteral {
	return createNumericLiteral(
		options.hook("text", node.text)
	);
}