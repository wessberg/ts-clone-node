import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneJsxOpeningFragment(
	_node: TS.JsxOpeningFragment,
	options: CloneNodeInternalOptions<TS.JsxOpeningFragment>
): TS.JsxOpeningFragment {
	return options.typescript.createJsxOpeningFragment();
}
