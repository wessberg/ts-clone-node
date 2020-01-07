import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";
import {CloneNodeInternalOptions} from "../clone-node-options";

function fixupParentReferences(rootNode: MetaNode, typescript: typeof TS): void {
	let parent = rootNode;
	typescript.forEachChild(rootNode, visitNode);
	return;
	function visitNode(n: MetaNode) {
		if (n.parent !== parent) {
			n.parent = parent;
			let saveParent = parent;
			parent = n;
			typescript.forEachChild(n, visitNode);
			if (((typescript as unknown) as {hasJSDocNodes(n: TS.Node): boolean}).hasJSDocNodes(n)) {
				// tslint:disable-next-line:one-variable-per-declaration
				for (let _i = 0, _a = n.jsDoc; _i < _a!.length; _i++) {
					let jsDoc = _a![_i];
					jsDoc.parent = n as TS.HasJSDoc;
					parent = jsDoc;
					typescript.forEachChild(jsDoc, visitNode);
				}
			}
			parent = saveParent;
		}
	}
}

export function setParents<T extends MetaNode>(node: T, options: CloneNodeInternalOptions): T {
	fixupParentReferences(node, options.typescript);
	return node;
}
