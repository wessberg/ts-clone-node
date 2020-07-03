import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";
import {Mutable} from "./util/mutable";

export function cloneJsDocTemplateTag(node: Mutable<TS.JSDocTemplateTag>, options: CloneNodeVisitorOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocTemplateTag>, options: CloneNodeVisitorOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocTemplateTag, -1, -1) as unknown) as Mutable<TS.JSDocTemplateTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.constraint = options.hook("constraint", options.nextNode(node.constraint), node.constraint);
	baseNode.typeParameters = ensureNodeArray(options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters), options.factory);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocTemplateTag>, options: CloneNodeVisitorOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	const baseNode = options.factory.createJSDocTemplateTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("constraint", options.nextNode(node.constraint), node.constraint),
		ensureNodeArray(options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters), options.factory),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocTemplateTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
