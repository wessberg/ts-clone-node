import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNamedExports(node: TS.NamedExports, options: CloneNodeVisitorOptions<TS.NamedExports>): TS.NamedExports {
	return options.factory.createNamedExports(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
