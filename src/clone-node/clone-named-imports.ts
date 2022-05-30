import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNamedImports(node: TS.NamedImports, options: CloneNodeVisitorOptions<TS.NamedImports>): TS.NamedImports {
	return options.factory.createNamedImports(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
