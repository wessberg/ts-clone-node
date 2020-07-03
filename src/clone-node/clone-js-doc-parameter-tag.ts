import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocParameterTag(node: Mutable<TS.JSDocParameterTag>, options: CloneNodeVisitorOptions<TS.JSDocParameterTag>): TS.JSDocParameterTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocParameterTag>, options: CloneNodeVisitorOptions<TS.JSDocParameterTag>): TS.JSDocParameterTag {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocParameterTag, -1, -1) as unknown) as Mutable<TS.JSDocParameterTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);
	baseNode.isNameFirst = options.hook("isNameFirst", node.isNameFirst, node.isNameFirst);
	baseNode.isBracketed = options.hook("isBracketed", node.isBracketed, node.isBracketed);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocParameterTag>, options: CloneNodeVisitorOptions<TS.JSDocParameterTag>): TS.JSDocParameterTag {
	const baseNode = options.factory.createJSDocParameterTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("isBracketed", node.isBracketed, node.isBracketed),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("isNameFirst", node.isNameFirst, node.isNameFirst),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocParameterTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
