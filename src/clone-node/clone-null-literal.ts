import {createNull, NullLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneNullLiteral (_node: NullLiteral, _options: CloneNodeInternalOptions<NullLiteral>): NullLiteral {
	return createNull();
}