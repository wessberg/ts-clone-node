import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportTypeAssertionContainer(
	node: TS.ImportTypeAssertionContainer,
	options: CloneNodeVisitorOptions<TS.ImportTypeAssertionContainer>
): TS.ImportTypeAssertionContainer {
	return options.factory.createImportTypeAssertionContainer(
		options.hook("assertClause", options.nextNode(node.assertClause), node.assertClause),
		options.hook("multiLine", node.multiLine, node.multiLine)
	);
}
