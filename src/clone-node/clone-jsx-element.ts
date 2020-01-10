import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxElement(node: TS.JsxElement, options: CloneNodeVisitorOptions<TS.JsxElement>): TS.JsxElement {
	return options.typescript.createJsxElement(
		options.hook("openingElement", options.nextNode(node.openingElement), node.openingElement),
		options.hook("children", options.nextNodes(node.children), node.children),
		options.hook("closingElement", options.nextNode(node.closingElement), node.closingElement)
	);
}
