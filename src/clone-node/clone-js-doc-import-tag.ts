import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocImportTag(node: Mutable<TS.JSDocImportTag>, options: CloneNodeVisitorOptions<TS.JSDocImportTag>): TS.JSDocImportTag {
	const baseNode = options.factory.createJSDocImportTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("importClause", options.nextNode(node.importClause), node.importClause),
		options.hook("moduleSpecifier", options.nextNode(node.moduleSpecifier), node.moduleSpecifier),
		options.hook("attributes", options.nextNode(node.attributes), node.attributes),
		options.hook("comment", typeof node.comment === "string" ? node.comment : options.nextNodes(node.comment), node.comment)
	) as Mutable<TS.JSDocImportTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
