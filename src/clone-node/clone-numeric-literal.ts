import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneNumericLiteral(node: TS.NumericLiteral, options: CloneNodeInternalOptions<TS.NumericLiteral>): TS.NumericLiteral {
	return options.typescript.createNumericLiteral(options.hook("text", node.text, node.text, payload(options)));
}
