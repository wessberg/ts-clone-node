import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneSemicolonClassElement(
	_node: TS.SemicolonClassElement,
	options: CloneNodeInternalOptions<TS.SemicolonClassElement>
): TS.SemicolonClassElement {
	return options.typescript.createSemicolonClassElement();
}
