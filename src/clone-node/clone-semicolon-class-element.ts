import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSemicolonClassElement(_node: TS.SemicolonClassElement, options: CloneNodeVisitorOptions<TS.SemicolonClassElement>): TS.SemicolonClassElement {
	return options.factory.createSemicolonClassElement();
}
