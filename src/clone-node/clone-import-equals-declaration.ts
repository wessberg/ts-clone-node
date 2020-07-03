import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportEqualsDeclaration(node: TS.ImportEqualsDeclaration, options: CloneNodeVisitorOptions<TS.ImportEqualsDeclaration>): TS.ImportEqualsDeclaration {
	return options.factory.createImportEqualsDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("moduleReference", options.nextNode(node.moduleReference), node.moduleReference)
	);
}
