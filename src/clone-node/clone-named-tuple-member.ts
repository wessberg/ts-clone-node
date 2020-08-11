import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamedTupleMember(node: TS.NamedTupleMember, options: CloneNodeVisitorOptions<TS.NamedTupleMember>): TS.NamedTupleMember {
	return options.factory.createNamedTupleMember(
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
