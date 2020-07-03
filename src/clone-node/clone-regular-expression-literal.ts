import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneRegularExpressionLiteral(node: TS.RegularExpressionLiteral, options: CloneNodeVisitorOptions<TS.RegularExpressionLiteral>): TS.RegularExpressionLiteral {
	return options.factory.createRegularExpressionLiteral(options.hook("text", node.text, node.text));
}
