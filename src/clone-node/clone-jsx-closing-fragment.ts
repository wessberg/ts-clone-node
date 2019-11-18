import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneJsxClosingFragment(
	_node: TS.JsxClosingFragment,
	options: CloneNodeInternalOptions<TS.JsxClosingFragment>
): TS.JsxClosingFragment {
	return options.typescript.createJsxJsxClosingFragment();
}
