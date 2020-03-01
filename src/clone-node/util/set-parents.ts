import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";
import {CloneNodeInternalOptions} from "../clone-node-options";

function fixupParentReferences(rootNode: MetaNode, typescript: typeof TS, deep: boolean): void {
	let parent = rootNode;
	typescript.forEachChild(rootNode, visitNode);

	function visitNode(n: MetaNode) {
		if (n.parent !== parent) {
			n.parent = parent;
			const saveParent = parent;
			parent = n;
			if (deep) {
				typescript.forEachChild(n, visitNode);
			}
			if (n.jsDoc != null) {
				for (const jsDocComment of n.jsDoc) {
					jsDocComment.parent = n as TS.HasJSDoc;
					parent = jsDocComment;
					typescript.forEachChild(jsDocComment, visitNode);
				}
			}
			parent = saveParent;
		}
	}
}

export function setParents<T extends MetaNode>(node: T, options: CloneNodeInternalOptions, deep = true): T {
	if (!options.setParents) return node;
	fixupParentReferences(node, options.typescript, deep);
	return node;
}
