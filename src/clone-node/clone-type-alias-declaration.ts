import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeAliasDeclaration(
	node: TS.TypeAliasDeclaration,
	options: CloneNodeInternalOptions<TS.TypeAliasDeclaration>
): TS.TypeAliasDeclaration {
	return options.typescript.createTypeAliasDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(node.typeParameters, options)), node.typeParameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options))
	);
}
