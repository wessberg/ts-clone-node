import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSpreadElement(node: TS.SpreadElement, options: CloneNodeVisitorOptions<TS.SpreadElement>): TS.SpreadElement {
	return options.factory.createSpreadElement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
