import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateLiteralTypeSpan(node: TS.TemplateLiteralTypeSpan, options: CloneNodeVisitorOptions<TS.TemplateLiteralTypeSpan>): TS.TemplateLiteralTypeSpan {
	return options.factory.createTemplateLiteralTypeSpan(
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("literal", options.nextNode(node.literal), node.literal)
	);
}
