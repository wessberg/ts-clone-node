import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {TS} from "./type/ts.js";

export function cloneClassStaticBlockDeclaration(
	node: TS.ClassStaticBlockDeclaration,
	options: CloneNodeVisitorOptions<TS.ClassStaticBlockDeclaration>
): TS.ClassStaticBlockDeclaration {
	return options.factory.createClassStaticBlockDeclaration(
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
