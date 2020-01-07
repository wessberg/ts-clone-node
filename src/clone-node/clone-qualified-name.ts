import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneQualifiedName(node: TS.QualifiedName, options: CloneNodeInternalOptions<TS.QualifiedName>): TS.QualifiedName {
	return options.typescript.createQualifiedName(
		options.hook("left", cloneNode(node.left, nextOptions(node.left, options)), node.left, payload(options)),
		options.hook("right", cloneNode(node.right, nextOptions(node.right, options)), node.right, payload(options))
	);
}
