import {createEnumMember, EnumMember} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneEnumMember (node: EnumMember, options: CloneNodeInternalOptions<EnumMember>): EnumMember {
	return createEnumMember(
		options.hook("name", cloneNode(node.name)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}