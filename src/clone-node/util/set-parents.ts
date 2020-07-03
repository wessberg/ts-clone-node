import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";
import {SetParentNodesOptions} from "../type/set-parent-nodes-options";
import {Mutable} from "./mutable";

function fixupParentReferences(rootNode: MetaNode, {deep, propertyName, typescript}: SetParentNodesOptions): void {
	let parent = rootNode;
	typescript.forEachChild(rootNode, visitNode);

	function visitNode(n: MetaNode) {
		if (n[propertyName] !== parent) {
			(n as Mutable<MetaNode>)[propertyName] = parent;
			const saveParent = parent;
			parent = n;
			if (deep) {
				typescript.forEachChild(n, visitNode);
			}
			if (n.jsDoc != null) {
				for (const jsDocComment of n.jsDoc as MetaNode[]) {
					(jsDocComment as Mutable<MetaNode>)[propertyName] = n as TS.HasJSDoc;
					parent = jsDocComment;
					typescript.forEachChild(jsDocComment, visitNode);
				}
			}
			parent = saveParent;
		}
	}
}

export function setParents<T extends MetaNode>(node: T, options: SetParentNodesOptions): T {
	fixupParentReferences(node, options);
	return node;
}
