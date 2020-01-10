import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamedExports(node: TS.NamedExports, options: CloneNodeVisitorOptions<TS.NamedExports>): TS.NamedExports {
	return options.typescript.createNamedExports(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
