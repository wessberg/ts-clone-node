import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";
import {nextOptions} from "./util/next-options";

export function cloneJSDocVariadicType(node: TS.JSDocVariadicType, options: CloneNodeInternalOptions<TS.JSDocVariadicType>): TS.JSDocVariadicType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocVariadicType, -1, -1) as TS.JSDocVariadicType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.type = options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options));

	return baseNode;
}
