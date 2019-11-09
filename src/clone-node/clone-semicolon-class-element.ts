import {createSemicolonClassElement, SemicolonClassElement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneSemicolonClassElement (_node: SemicolonClassElement, _options: CloneNodeInternalOptions<SemicolonClassElement>): SemicolonClassElement {
	return createSemicolonClassElement();
}