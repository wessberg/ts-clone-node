import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxAttributes(node: TS.JsxAttributes, options: CloneNodeVisitorOptions<TS.JsxAttributes>): TS.JsxAttributes {
	return options.factory.createJsxAttributes(options.hook("properties", options.nextNodes(node.properties), node.properties));
}
