import {createJsxFragment, JsxFragment} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneJsxFragment (node: JsxFragment, options: CloneNodeInternalOptions<JsxFragment>): JsxFragment {
	return createJsxFragment(
		options.hook("openingFragment", cloneNode(node.openingFragment)),
		options.hook("children", cloneNodes(node.children)),
		options.hook("closingFragment", cloneNode(node.closingFragment))
	);
}