import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneOptionalTypeNode(node: TS.OptionalTypeNode, options: CloneNodeVisitorOptions<TS.OptionalTypeNode>): TS.OptionalTypeNode {
	return options.typescript.createOptionalTypeNode(options.hook("type", options.nextNode(node.type), node.type));
}
