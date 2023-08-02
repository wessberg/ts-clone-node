import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxClosingFragment(_node: TS.JsxClosingFragment, options: CloneNodeVisitorOptions<TS.JsxClosingFragment>): TS.JsxClosingFragment {
	return options.factory.createJsxJsxClosingFragment();
}
