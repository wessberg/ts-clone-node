import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBooleanLiteral(node: TS.BooleanLiteral, options: CloneNodeVisitorOptions<TS.BooleanLiteral>): TS.BooleanLiteral {
	if (node.kind === options.typescript.SyntaxKind.TrueKeyword) {
		return options.factory.createTrue();
	}
	return options.factory.createFalse();
}
