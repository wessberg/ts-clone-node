import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocSeeTag(node: Mutable<TS.JSDocSeeTag>, options: CloneNodeVisitorOptions<TS.JSDocSeeTag>): TS.JSDocSeeTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	throw new Error('No strategy for cloning JSDocSeeTag in TypeScript v3');
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocSeeTag>, options: CloneNodeVisitorOptions<TS.JSDocSeeTag>): TS.JSDocSeeTag {
	const baseNode = options.factory.createJSDocSeeTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		// NOTE: do we want to wrap around `node.name`, which is a
		// `JSDocNameReference`?
		options.hook("name", node.name, node.name),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocSeeTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
