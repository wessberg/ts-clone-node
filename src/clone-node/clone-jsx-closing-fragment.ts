import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxClosingFragment(_node: TS.JsxClosingFragment, options: CloneNodeVisitorOptions<TS.JsxClosingFragment>): TS.JsxClosingFragment {
	return options.factory.createJsxJsxClosingFragment();
}
