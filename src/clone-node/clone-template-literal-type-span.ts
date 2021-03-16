import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTemplateLiteralTypeSpan(node: TS.TemplateLiteralTypeSpan, options: CloneNodeVisitorOptions<TS.TemplateLiteralTypeSpan>): TS.TemplateLiteralTypeSpan {
	if ("casing" in node && options.factory.createTemplateLiteralTypeSpan.length === 3) {
		const legacyNode = (node as unknown) as import("typescript-4-1-0-beta").TemplateLiteralTypeSpan;
		const legacyCreateTemplateLiteralTypeSpan = options.factory.createTemplateLiteralTypeSpan as unknown as import("typescript-4-1-0-beta").NodeFactory["createTemplateLiteralTypeSpan"];

		return (legacyCreateTemplateLiteralTypeSpan(
			options.hook("casing" as never, legacyNode.casing as never, legacyNode.casing as never) as never,
			options.hook("type", options.nextNode(legacyNode.type as never), legacyNode.type as never) as never,
			options.hook("literal", options.nextNode(legacyNode.literal as never), legacyNode.literal as never) as never
		) as unknown) as TS.TemplateLiteralTypeSpan;
	} else {
		return options.factory.createTemplateLiteralTypeSpan(
			options.hook("type", options.nextNode(node.type), node.type),
			options.hook("literal", options.nextNode(node.literal), node.literal)
		);
	}
}
