import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneInferTypeNode(node: TS.InferTypeNode, options: CloneNodeVisitorOptions<TS.InferTypeNode>): TS.InferTypeNode {
	return options.typescript.createInferTypeNode(options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter));
}
