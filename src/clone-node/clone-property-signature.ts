import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePropertySignature(node: TS.PropertySignature, options: CloneNodeInternalOptions<TS.PropertySignature>): TS.PropertySignature {
	return options.typescript.createPropertySignature(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), payload(options))
	);
}
