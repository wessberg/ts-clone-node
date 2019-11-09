import {createJsxText, JsxText} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneJsxText (node: JsxText, options: CloneNodeInternalOptions<JsxText>): JsxText {
	return createJsxText(
		options.hook("text", node.text),
		options.hook("containsOnlyTriviaWhiteSpaces", node.containsOnlyTriviaWhiteSpaces)
	);
}