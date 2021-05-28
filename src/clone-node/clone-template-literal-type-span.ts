import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateLiteralTypeSpan(node: TS.TemplateLiteralTypeSpan, options: CloneNodeVisitorOptions<TS.TemplateLiteralTypeSpan>): TS.TemplateLiteralTypeSpan {
	return options.factory.createTemplateLiteralTypeSpan(
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("literal", options.nextNode(node.literal), node.literal)
	);
}
