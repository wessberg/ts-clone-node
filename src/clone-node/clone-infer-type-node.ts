import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneInferTypeNode(node: TS.InferTypeNode, options: CloneNodeInternalOptions<TS.InferTypeNode>): TS.InferTypeNode {
	return options.typescript.createInferTypeNode(options.hook("typeParameter", cloneNode(node.typeParameter, nextOptions(options)), payload(options)));
}
