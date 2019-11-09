import {createStringLiteral, StringLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneStringLiteral (node: StringLiteral, options: CloneNodeInternalOptions<StringLiteral>): StringLiteral {
	return createStringLiteral(
		options.hook("text", node.text)
	);
}