import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxFragment(node: TS.JsxFragment, options: CloneNodeInternalOptions<TS.JsxFragment>): TS.JsxFragment {
	return options.typescript.createJsxFragment(
		options.hook(
			"openingFragment",
			cloneNode(node.openingFragment, nextOptions(node.openingFragment, options)),
			node.openingFragment,
			payload(options)
		),
		options.hook("children", cloneNodes(node.children, nextOptions(node.children, options)), node.children, payload(options)),
		options.hook(
			"closingFragment",
			cloneNode(node.closingFragment, nextOptions(node.closingFragment, options)),
			node.closingFragment,
			payload(options)
		)
	);
}
