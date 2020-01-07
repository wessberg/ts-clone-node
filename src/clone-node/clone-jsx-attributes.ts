import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxAttributes(node: TS.JsxAttributes, options: CloneNodeInternalOptions<TS.JsxAttributes>): TS.JsxAttributes {
	return options.typescript.createJsxAttributes(
		options.hook("properties", cloneNodes(node.properties, nextOptions(options)), node.properties, payload(options))
	);
}
