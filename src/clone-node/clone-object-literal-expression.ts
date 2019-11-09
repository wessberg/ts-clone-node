import {createObjectLiteral, ObjectLiteralExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneObjectLiteralExpression (node: ObjectLiteralExpression, options: CloneNodeInternalOptions<ObjectLiteralExpression>): ObjectLiteralExpression {
	return createObjectLiteral(
		options.hook("properties", cloneNodes(node.properties))
	);
}