import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneKeywordTypeNode(node: TS.KeywordTypeNode, options: CloneNodeInternalOptions<TS.KeywordTypeNode>): TS.KeywordTypeNode {
	return options.typescript.createKeywordTypeNode(options.hook("kind", cloneNode(node.kind, nextOptions(options)), payload(options)));
}
