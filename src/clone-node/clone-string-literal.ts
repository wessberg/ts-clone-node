import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneStringLiteral(node: TS.StringLiteral, options: CloneNodeInternalOptions<TS.StringLiteral>): TS.StringLiteral {
	return options.typescript.createStringLiteral(options.hook("text", node.text, node.text, payload(options)));
}
