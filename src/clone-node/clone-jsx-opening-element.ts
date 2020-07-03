import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxOpeningElement(node: TS.JsxOpeningElement, options: CloneNodeVisitorOptions<TS.JsxOpeningElement>): TS.JsxOpeningElement {
	return options.factory.createJsxOpeningElement(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("attributes", options.nextNode(node.attributes), node.attributes)
	);
}
