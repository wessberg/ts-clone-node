import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneArrowFunction(node: TS.ArrowFunction, options: CloneNodeInternalOptions<TS.ArrowFunction>): TS.ArrowFunction {
	return options.typescript.createArrowFunction(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), node.modifiers, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options)),
		options.hook(
			"equalsGreaterThanToken",
			cloneNode(node.equalsGreaterThanToken, nextOptions(options)),
			node.equalsGreaterThanToken,
			payload(options)
		),
		options.hook("body", cloneNode(node.body, nextOptions(options)), node.body, payload(options))
	);
}
