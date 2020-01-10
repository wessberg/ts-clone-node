import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneEnumMember(node: TS.EnumMember, options: CloneNodeVisitorOptions<TS.EnumMember>): TS.EnumMember {
	return options.typescript.createEnumMember(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
