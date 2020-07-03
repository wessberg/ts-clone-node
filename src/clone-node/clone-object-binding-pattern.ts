import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneObjectBindingPattern(node: TS.ObjectBindingPattern, options: CloneNodeVisitorOptions<TS.ObjectBindingPattern>): TS.ObjectBindingPattern {
	return options.factory.createObjectBindingPattern(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
