import {createJsxOpeningFragment, JsxOpeningFragment} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneJsxOpeningFragment (_node: JsxOpeningFragment, _options: CloneNodeInternalOptions<JsxOpeningFragment>): JsxOpeningFragment {
	return createJsxOpeningFragment();
}