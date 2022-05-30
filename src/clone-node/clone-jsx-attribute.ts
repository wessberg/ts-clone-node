import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxAttribute(node: TS.JsxAttribute, options: CloneNodeVisitorOptions<TS.JsxAttribute>): TS.JsxAttribute {
	return options.factory.createJsxAttribute(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
