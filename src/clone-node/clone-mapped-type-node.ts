import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneMappedTypeNode(node: TS.MappedTypeNode, options: CloneNodeVisitorOptions<TS.MappedTypeNode>): TS.MappedTypeNode {
	// If `createMappedTypeNode` takes four arguments, this is TypeScript before v4.1
	if (options.factory.createMappedTypeNode.length === 4) {
		const legacyFactory = (options.factory as unknown) as import("typescript-4-0-3").NodeFactory;
		return (legacyFactory.createMappedTypeNode(
			options.hook("readonlyToken", options.nextNode(node.readonlyToken), node.readonlyToken) as never,
			options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter) as never,
			options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never,
			options.hook("type", options.nextNode(node.type), node.type) as never
		) as unknown) as TS.MappedTypeNode;
	}

	// Otherwise, this is TypeScript 4.1 or newer
	else {
		return options.factory.createMappedTypeNode(
			options.hook("readonlyToken", options.nextNode(node.readonlyToken), node.readonlyToken),
			options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter),
			options.hook("nameType", options.nextNode(node.nameType), node.nameType),
			options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
			options.hook("type", options.nextNode(node.type), node.type)
		);
	}
}
