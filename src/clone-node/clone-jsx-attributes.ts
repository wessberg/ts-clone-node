import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxAttributes(node: TS.JsxAttributes, options: CloneNodeVisitorOptions<TS.JsxAttributes>): TS.JsxAttributes {
	return options.factory.createJsxAttributes(options.hook("properties", options.nextNodes(node.properties), node.properties));
}
