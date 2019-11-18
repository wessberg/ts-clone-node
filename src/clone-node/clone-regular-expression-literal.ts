import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneRegularExpressionLiteral(
	node: TS.RegularExpressionLiteral,
	options: CloneNodeInternalOptions<TS.RegularExpressionLiteral>
): TS.RegularExpressionLiteral {
	return options.typescript.createRegularExpressionLiteral(options.hook("text", node.text, payload(options)));
}
