import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneInferTypeNode(node: TS.InferTypeNode, options: CloneNodeVisitorOptions<TS.InferTypeNode>): TS.InferTypeNode {
	return options.factory.createInferTypeNode(options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter));
}
