import {BooleanLiteral, createFalse, createTrue, SyntaxKind} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneBooleanLiteral (node: BooleanLiteral, _options: CloneNodeInternalOptions<BooleanLiteral>): BooleanLiteral {
	if (node.kind === SyntaxKind.TrueKeyword) {
		return createTrue();
	}
	return createFalse();
}