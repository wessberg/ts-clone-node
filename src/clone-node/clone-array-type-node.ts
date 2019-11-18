import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneArrayTypeNode(node: TS.ArrayTypeNode, options: CloneNodeInternalOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	return options.typescript.createArrayTypeNode(options.hook("elementType", cloneNode(node.elementType, nextOptions(options)), payload(options)));
}
