import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneBigIntLiteral(node: TS.BigIntLiteral, options: CloneNodeInternalOptions<TS.BigIntLiteral>): TS.BigIntLiteral {
	return options.typescript.createBigIntLiteral(options.hook("text", node.text, node.text, payload(options)));
}
