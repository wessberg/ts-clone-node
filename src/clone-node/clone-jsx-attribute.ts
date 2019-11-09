import {createJsxAttribute, JsxAttribute} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneJsxAttribute (node: JsxAttribute, options: CloneNodeInternalOptions<JsxAttribute>): JsxAttribute {
	return createJsxAttribute(
		options.hook("name", cloneNode(node.name)),
		options.hook("initializer", cloneNode(node.initializer))!
	);
}