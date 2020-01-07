import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneFunctionExpression(
	node: TS.FunctionExpression,
	options: CloneNodeInternalOptions<TS.FunctionExpression>
): TS.FunctionExpression {
	return options.typescript.createFunctionExpression(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("asteriskToken", cloneNode(node.asteriskToken, nextOptions(options)), node.asteriskToken, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(options)), node.body, payload(options))
	);
}
