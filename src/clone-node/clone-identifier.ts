import {createIdentifier, Identifier} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneIdentifier (node: Identifier, options: CloneNodeInternalOptions<Identifier>): Identifier {
	return createIdentifier(
		options.hook("text", node.text)
	);
}