import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneMappedTypeNode(node: TS.MappedTypeNode, options: CloneNodeInternalOptions<TS.MappedTypeNode>): TS.MappedTypeNode {
	return options.typescript.createMappedTypeNode(
		options.hook("readonlyToken", cloneNode(node.readonlyToken, nextOptions(options)), node.readonlyToken, payload(options)),
		options.hook("typeParameter", cloneNode(node.typeParameter, nextOptions(options)), node.typeParameter, payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), node.questionToken, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options))
	);
}
