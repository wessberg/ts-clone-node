import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneAssertEntry(node: TS.AssertEntry, options: CloneNodeVisitorOptions<TS.AssertEntry>): TS.AssertEntry {
	return options.factory.createAssertEntry(options.hook("name", options.nextNode(node.name), node.name), options.hook("value", options.nextNode(node.value), node.value));
}
