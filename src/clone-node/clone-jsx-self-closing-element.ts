import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxSelfClosingElement(node: TS.JsxSelfClosingElement, options: CloneNodeVisitorOptions<TS.JsxSelfClosingElement>): TS.JsxSelfClosingElement {
	return options.factory.createJsxSelfClosingElement(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("attributes", options.nextNode(node.attributes), node.attributes)
	);
}
