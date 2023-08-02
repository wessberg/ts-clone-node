import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneKeywordTypeNode(node: TS.KeywordTypeNode, options: CloneNodeVisitorOptions<TS.KeywordTypeNode>): TS.KeywordTypeNode {
	return options.factory.createKeywordTypeNode(options.hook("kind", node.kind, node.kind));
}
