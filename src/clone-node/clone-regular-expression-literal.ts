import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneRegularExpressionLiteral(node: TS.RegularExpressionLiteral, options: CloneNodeVisitorOptions<TS.RegularExpressionLiteral>): TS.RegularExpressionLiteral {
	return options.factory.createRegularExpressionLiteral(options.hook("text", node.text, node.text));
}
