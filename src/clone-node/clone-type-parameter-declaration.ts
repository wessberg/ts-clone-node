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
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("constraint", cloneNode(node.constraint, nextOptions(options)), payload(options)),
		options.hook("default", cloneNode(node.default, nextOptions(options)), payload(options))
	);
}
