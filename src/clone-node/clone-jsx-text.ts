import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxText(node: TS.JsxText, options: CloneNodeVisitorOptions<TS.JsxText>): TS.JsxText {
	return options.factory.createJsxText(
		options.hook("text", node.text, node.text),
		options.hook("containsOnlyTriviaWhiteSpaces", node.containsOnlyTriviaWhiteSpaces, node.containsOnlyTriviaWhiteSpaces)
	);
}
