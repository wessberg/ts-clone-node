import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneJsDoc(node: TS.JSDoc, options: CloneNodeInternalOptions<TS.JSDoc>): TS.JSDoc {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocComment, -1, -1) as TS.JSDoc;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tags = ensureNodeArray(
		options.hook("tags", cloneNodes(node.tags, nextOptions(node.tags, options)), node.tags, payload(options)),
		options.typescript
	);

	return baseNode;
}
