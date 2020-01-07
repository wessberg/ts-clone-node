import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneKeywordTypeNode(node: TS.KeywordTypeNode, options: CloneNodeInternalOptions<TS.KeywordTypeNode>): TS.KeywordTypeNode {
	return options.typescript.createKeywordTypeNode(options.hook("kind", node.kind, node.kind, payload(options)));
}
