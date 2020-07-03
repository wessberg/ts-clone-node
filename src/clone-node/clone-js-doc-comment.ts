import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";
import {Mutable} from "./util/mutable";

export function cloneJsDoc(node: Mutable<TS.JSDoc>, options: CloneNodeVisitorOptions<TS.JSDoc>): TS.JSDoc {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDoc>, options: CloneNodeVisitorOptions<TS.JSDoc>): TS.JSDoc {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocComment, -1, -1) as unknown) as Mutable<TS.JSDoc>;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tags = ensureNodeArray(options.hook("tags", options.nextNodes(node.tags), node.tags), options.factory);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDoc>, options: CloneNodeVisitorOptions<TS.JSDoc>): TS.JSDoc {
	const baseNode = options.factory.createJSDocComment(
		options.hook("comment", node.comment, node.comment),
		ensureNodeArray(options.hook("tags", options.nextNodes(node.tags), node.tags), options.factory)
	) as Mutable<TS.JSDoc>;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
