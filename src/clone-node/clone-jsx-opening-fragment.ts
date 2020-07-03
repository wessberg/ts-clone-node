import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsxOpeningFragment(_node: TS.JsxOpeningFragment, options: CloneNodeVisitorOptions<TS.JsxOpeningFragment>): TS.JsxOpeningFragment {
	return options.factory.createJsxOpeningFragment();
}
