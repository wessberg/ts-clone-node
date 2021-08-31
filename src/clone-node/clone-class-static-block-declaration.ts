import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneClassStaticBlockDeclaration(
	node: TS.ClassStaticBlockDeclaration,
	options: CloneNodeVisitorOptions<TS.ClassStaticBlockDeclaration>
): TS.ClassStaticBlockDeclaration {
	return options.factory.createClassStaticBlockDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
