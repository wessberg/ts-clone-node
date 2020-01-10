import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxSpreadAttribute(node: TS.JsxSpreadAttribute, options: CloneNodeVisitorOptions<TS.JsxSpreadAttribute>): TS.JsxSpreadAttribute {
	return options.typescript.createJsxSpreadAttribute(options.hook("expression", options.nextNode(node.expression), node.expression));
}
