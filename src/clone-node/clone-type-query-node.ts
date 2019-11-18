import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeQueryNode(node: TS.TypeQueryNode, options: CloneNodeInternalOptions<TS.TypeQueryNode>): TS.TypeQueryNode {
	return options.typescript.createTypeQueryNode(options.hook("exprName", cloneNode(node.exprName, nextOptions(options)), payload(options)));
}
