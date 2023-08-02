import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxFragment(node: TS.JsxFragment, options: CloneNodeVisitorOptions<TS.JsxFragment>): TS.JsxFragment {
	return options.factory.createJsxFragment(
		options.hook("openingFragment", options.nextNode(node.openingFragment), node.openingFragment),
		options.hook("children", options.nextNodes(node.children), node.children),
		options.hook("closingFragment", options.nextNode(node.closingFragment), node.closingFragment)
	);
}
