import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneOptionalTypeNode(node: TS.OptionalTypeNode, options: CloneNodeVisitorOptions<TS.OptionalTypeNode>): TS.OptionalTypeNode {
	return options.factory.createOptionalTypeNode(options.hook("type", options.nextNode(node.type), node.type));
}
