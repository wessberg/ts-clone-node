import {createKeywordTypeNode, KeywordTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneKeywordTypeNode (node: KeywordTypeNode, options: CloneNodeInternalOptions<KeywordTypeNode>): KeywordTypeNode {
	return createKeywordTypeNode(
		options.hook("kind", cloneNode(node.kind))
	);
}