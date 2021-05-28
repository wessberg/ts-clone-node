import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneClassExpression(node: TS.ClassExpression, options: CloneNodeVisitorOptions<TS.ClassExpression>): TS.ClassExpression {
	return options.factory.createClassExpression(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("heritageClauses", options.nextNodes(node.heritageClauses), node.heritageClauses),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
