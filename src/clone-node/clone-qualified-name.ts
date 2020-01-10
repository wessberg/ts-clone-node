import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneQualifiedName(node: TS.QualifiedName, options: CloneNodeVisitorOptions<TS.QualifiedName>): TS.QualifiedName {
	return options.typescript.createQualifiedName(
		options.hook("left", options.nextNode(node.left), node.left),
		options.hook("right", options.nextNode(node.right), node.right)
	);
}
