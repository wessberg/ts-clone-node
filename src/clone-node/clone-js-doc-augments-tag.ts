import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocAugmentsTag(node: Mutable<TS.JSDocAugmentsTag>, options: CloneNodeVisitorOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocAugmentsTag>, options: CloneNodeVisitorOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocAugmentsTag, -1, -1) as unknown) as Mutable<TS.JSDocAugmentsTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.class = options.hook("class", options.nextNode(node.class), node.class);
	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocAugmentsTag>, options: CloneNodeVisitorOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	const baseNode = options.factory.createJSDocAugmentsTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("class", options.nextNode(node.class), node.class),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocAugmentsTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	return baseNode;
}
