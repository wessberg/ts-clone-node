import {createRegularExpressionLiteral, RegularExpressionLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneRegularExpressionLiteral (node: RegularExpressionLiteral, options: CloneNodeInternalOptions<RegularExpressionLiteral>): RegularExpressionLiteral {
	return createRegularExpressionLiteral(
		options.hook("text", node.text)
	);
}