import {createJsxJsxClosingFragment, JsxClosingFragment} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneJsxClosingFragment (_node: JsxClosingFragment, _options: CloneNodeInternalOptions<JsxClosingFragment>): JsxClosingFragment {
	return createJsxJsxClosingFragment();
}