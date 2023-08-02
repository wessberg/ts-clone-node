import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxSelfClosingElement(node: TS.JsxSelfClosingElement, options: CloneNodeVisitorOptions<TS.JsxSelfClosingElement>): TS.JsxSelfClosingElement {
	return options.factory.createJsxSelfClosingElement(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("attributes", options.nextNode(node.attributes), node.attributes)
	);
}
