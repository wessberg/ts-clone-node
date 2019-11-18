import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneBooleanLiteral(node: TS.BooleanLiteral, options: CloneNodeInternalOptions<TS.BooleanLiteral>): TS.BooleanLiteral {
	if (node.kind === options.typescript.SyntaxKind.TrueKeyword) {
		return options.typescript.createTrue();
	}
	return options.typescript.createFalse();
}
