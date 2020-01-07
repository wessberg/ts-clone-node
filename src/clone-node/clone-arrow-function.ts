import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneArrowFunction(node: TS.ArrowFunction, options: CloneNodeInternalOptions<TS.ArrowFunction>): TS.ArrowFunction {
	return options.typescript.createArrowFunction(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(node.typeParameters, options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(node.parameters, options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options)),
		options.hook(
			"equalsGreaterThanToken",
			cloneNode(node.equalsGreaterThanToken, nextOptions(node.equalsGreaterThanToken, options)),
			node.equalsGreaterThanToken,
			payload(options)
		),
		options.hook("body", cloneNode(node.body, nextOptions(node.body, options)), node.body, payload(options))
	);
}
