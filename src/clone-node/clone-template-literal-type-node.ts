import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateLiteralTypeNode(node: TS.TemplateLiteralTypeNode, options: CloneNodeVisitorOptions<TS.TemplateLiteralTypeNode>): TS.TemplateLiteralTypeNode {
	return options.factory.createTemplateLiteralType(
		options.hook("head", options.nextNode(node.head), node.head),
		options.hook("templateSpans", options.nextNodes(node.templateSpans), node.templateSpans)
	);
}
