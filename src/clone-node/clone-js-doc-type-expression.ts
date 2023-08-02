import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocTypeExpression(node: Mutable<TS.JSDocTypeExpression>, options: CloneNodeVisitorOptions<TS.JSDocTypeExpression>): TS.JSDocTypeExpression {
	const baseNode = options.factory.createJSDocTypeExpression(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocTypeExpression>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
