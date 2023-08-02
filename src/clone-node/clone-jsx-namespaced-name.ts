import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxNamespacedName(node: TS.JsxNamespacedName, options: CloneNodeVisitorOptions<TS.JsxNamespacedName>): TS.JsxNamespacedName {
	return options.factory.createJsxNamespacedName(
		options.hook("namespace", options.nextNode(node.namespace), node.namespace),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
