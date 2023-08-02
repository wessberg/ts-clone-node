import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxSpreadAttribute(node: TS.JsxSpreadAttribute, options: CloneNodeVisitorOptions<TS.JsxSpreadAttribute>): TS.JsxSpreadAttribute {
	return options.factory.createJsxSpreadAttribute(options.hook("expression", options.nextNode(node.expression), node.expression));
}
