import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocDeprecatedTag(node: Mutable<TS.JSDocDeprecatedTag>, options: CloneNodeVisitorOptions<TS.JSDocDeprecatedTag>): TS.JSDocDeprecatedTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocDeprecatedTag>, options: CloneNodeVisitorOptions<TS.JSDocDeprecatedTag>): TS.JSDocDeprecatedTag {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocTypedefTag, -1, -1) as unknown) as Mutable<TS.JSDocDeprecatedTag>;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocDeprecatedTag>, options: CloneNodeVisitorOptions<TS.JSDocDeprecatedTag>): TS.JSDocDeprecatedTag {
	const baseNode = options.factory.createJSDocDeprecatedTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocDeprecatedTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
