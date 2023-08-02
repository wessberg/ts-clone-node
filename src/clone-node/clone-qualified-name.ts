import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneQualifiedName(node: TS.QualifiedName, options: CloneNodeVisitorOptions<TS.QualifiedName>): TS.QualifiedName {
	return options.factory.createQualifiedName(options.hook("left", options.nextNode(node.left), node.left), options.hook("right", options.nextNode(node.right), node.right));
}
