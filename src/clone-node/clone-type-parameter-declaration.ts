import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeParameterDeclaration(
	node: TS.TypeParameterDeclaration,
	options: CloneNodeInternalOptions<TS.TypeParameterDeclaration>
): TS.TypeParameterDeclaration {
	return options.typescript.createTypeParameterDeclaration(
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("constraint", cloneNode(node.constraint, nextOptions(node.constraint, options)), node.constraint, payload(options)),
		options.hook("default", cloneNode(node.default, nextOptions(node.default, options)), node.default, payload(options))
	);
}
