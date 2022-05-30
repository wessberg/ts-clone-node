import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxClosingElement(node: TS.JsxClosingElement, options: CloneNodeVisitorOptions<TS.JsxClosingElement>): TS.JsxClosingElement {
	return options.factory.createJsxClosingElement(options.hook("tagName", options.nextNode(node.tagName), node.tagName));
}
