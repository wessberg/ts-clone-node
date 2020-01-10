import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBooleanLiteral(node: TS.BooleanLiteral, options: CloneNodeVisitorOptions<TS.BooleanLiteral>): TS.BooleanLiteral {
	if (node.kind === options.typescript.SyntaxKind.TrueKeyword) {
		return options.typescript.createTrue();
	}
	return options.typescript.createFalse();
}
