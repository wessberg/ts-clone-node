import {createSpread, SpreadElement} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneSpreadElement (node: SpreadElement, options: CloneNodeInternalOptions<SpreadElement>): SpreadElement {
	return createSpread(
		options.hook("expression", cloneNode(node.expression))
	);
}