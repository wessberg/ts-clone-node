import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSemicolonClassElement(_node: TS.SemicolonClassElement, options: CloneNodeVisitorOptions<TS.SemicolonClassElement>): TS.SemicolonClassElement {
	return options.factory.createSemicolonClassElement();
}
