import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneObjectLiteralExpression(
	node: TS.ObjectLiteralExpression,
	options: CloneNodeInternalOptions<TS.ObjectLiteralExpression>
): TS.ObjectLiteralExpression {
	return options.typescript.createObjectLiteral(
		options.hook("properties", cloneNodes(node.properties, nextOptions(options)), node.properties, payload(options))
	);
}
