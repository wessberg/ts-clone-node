import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneKeywordTypeNode(node: TS.KeywordTypeNode, options: CloneNodeVisitorOptions<TS.KeywordTypeNode>): TS.KeywordTypeNode {
	return options.factory.createKeywordTypeNode(options.hook("kind", node.kind, node.kind));
}
