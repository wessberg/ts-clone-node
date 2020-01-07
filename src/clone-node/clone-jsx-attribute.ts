import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxAttribute(node: TS.JsxAttribute, options: CloneNodeInternalOptions<TS.JsxAttribute>): TS.JsxAttribute {
	return options.typescript.createJsxAttribute(
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(node.initializer, options)), node.initializer, payload(options))!
	);
}
