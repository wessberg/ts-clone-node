import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneArrayBindingPattern(
	node: TS.ArrayBindingPattern,
	options: CloneNodeVisitorOptions<TS.ArrayBindingPattern>
): TS.ArrayBindingPattern {
	return options.typescript.createArrayBindingPattern(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
