import {createTypeAssertion, TypeAssertion} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTypeAssertion (node: TypeAssertion, options: CloneNodeInternalOptions<TypeAssertion>): TypeAssertion {
	return createTypeAssertion(
		options.hook("type", cloneNode(node.type)),
		options.hook("expression", cloneNode(node.expression))
	);
}