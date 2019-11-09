import {createQualifiedName, QualifiedName} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneQualifiedName (node: QualifiedName, options: CloneNodeInternalOptions<QualifiedName>): QualifiedName {
	return createQualifiedName(
		options.hook("left", cloneNode(node.left)),
		options.hook("right", cloneNode(node.right))
	);
}