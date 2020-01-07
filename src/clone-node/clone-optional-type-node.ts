import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneOptionalTypeNode(node: TS.OptionalTypeNode, options: CloneNodeInternalOptions<TS.OptionalTypeNode>): TS.OptionalTypeNode {
	return options.typescript.createOptionalTypeNode(options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options)));
}
