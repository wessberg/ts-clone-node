import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneSpreadElement(node: TS.SpreadElement, options: CloneNodeInternalOptions<TS.SpreadElement>): TS.SpreadElement {
	return options.typescript.createSpread(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
