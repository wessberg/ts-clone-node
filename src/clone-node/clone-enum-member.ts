import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneEnumMember(node: TS.EnumMember, options: CloneNodeVisitorOptions<TS.EnumMember>): TS.EnumMember {
	return options.factory.createEnumMember(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
