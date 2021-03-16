import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportEqualsDeclaration(node: TS.ImportEqualsDeclaration, options: CloneNodeVisitorOptions<TS.ImportEqualsDeclaration>): TS.ImportEqualsDeclaration {
	if (options.factory.createImportEqualsDeclaration.length === 4) {
		const importEqualsDeclaration = (options.factory as unknown as import("typescript-4-1-2").NodeFactory).createImportEqualsDeclaration(
			options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
			options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
			options.hook("name", options.nextNode(node.name), node.name),
			options.hook("moduleReference", options.nextNode(node.moduleReference), node.moduleReference)
		);
		return importEqualsDeclaration as TS.ImportEqualsDeclaration;
	} else {
		return options.factory.createImportEqualsDeclaration(
			options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
			options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
			options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
			options.hook("name", options.nextNode(node.name), node.name),
			options.hook("moduleReference", options.nextNode(node.moduleReference), node.moduleReference)
		);
	}

}
