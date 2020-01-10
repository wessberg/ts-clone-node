import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxText(node: TS.JsxText, options: CloneNodeVisitorOptions<TS.JsxText>): TS.JsxText {
	return options.typescript.createJsxText(
		options.hook("text", node.text, node.text),
		options.hook("containsOnlyTriviaWhiteSpaces", node.containsOnlyTriviaWhiteSpaces, node.containsOnlyTriviaWhiteSpaces)
	);
}
