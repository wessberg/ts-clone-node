import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTemplateLiteralTypeNode(node: TS.TemplateLiteralTypeNode, options: CloneNodeVisitorOptions<TS.TemplateLiteralTypeNode>): TS.TemplateLiteralTypeNode {
	return options.factory.createTemplateLiteralType(
		options.hook("head", options.nextNode(node.head), node.head),
		options.hook("templateSpans", options.nextNodes(node.templateSpans), node.templateSpans)
	);
}
