import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneIdentifier(node: TS.Identifier, options: CloneNodeInternalOptions<TS.Identifier>): TS.Identifier {
	return options.typescript.createIdentifier(options.hook("text", node.text, node.text, payload(options)));
}
