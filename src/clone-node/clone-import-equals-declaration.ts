import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneImportEqualsDeclaration(node: TS.ImportEqualsDeclaration, options: CloneNodeVisitorOptions<TS.ImportEqualsDeclaration>): TS.ImportEqualsDeclaration {
	return options.factory.createImportEqualsDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("moduleReference", options.nextNode(node.moduleReference), node.moduleReference)
	);
}
