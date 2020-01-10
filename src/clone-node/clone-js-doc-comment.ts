import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneJsDoc(node: TS.JSDoc, options: CloneNodeVisitorOptions<TS.JSDoc>): TS.JSDoc {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocComment, -1, -1) as TS.JSDoc;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tags = ensureNodeArray(options.hook("tags", options.nextNodes(node.tags), node.tags), options.typescript);

	return baseNode;
}
