import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {TS} from "./type/ts.js";

export function cloneArrayBindingPattern(node: TS.ArrayBindingPattern, options: CloneNodeVisitorOptions<TS.ArrayBindingPattern>): TS.ArrayBindingPattern {
	return options.factory.createArrayBindingPattern(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
