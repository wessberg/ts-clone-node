import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneJsxText(node: TS.JsxText, options: CloneNodeInternalOptions<TS.JsxText>): TS.JsxText {
	return options.typescript.createJsxText(
		options.hook("text", node.text, payload(options)),
		options.hook("containsOnlyTriviaWhiteSpaces", node.containsOnlyTriviaWhiteSpaces, payload(options))
	);
}
