import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIdentifier(node: TS.Identifier, options: CloneNodeVisitorOptions<TS.Identifier>): TS.Identifier {
	return options.typescript.createIdentifier(options.hook("text", node.text, node.text));
}
