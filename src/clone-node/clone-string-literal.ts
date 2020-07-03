import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneStringLiteral(node: TS.StringLiteral, options: CloneNodeVisitorOptions<TS.StringLiteral>): TS.StringLiteral {
	return options.factory.createStringLiteral(options.hook("text", node.text, node.text));
}
