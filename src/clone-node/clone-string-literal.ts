import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneStringLiteral(node: TS.StringLiteral, options: CloneNodeVisitorOptions<TS.StringLiteral>): TS.StringLiteral {
	return options.factory.createStringLiteral(options.hook("text", node.text, node.text));
}
