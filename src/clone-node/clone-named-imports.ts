import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNamedImports(node: TS.NamedImports, options: CloneNodeVisitorOptions<TS.NamedImports>): TS.NamedImports {
	return options.typescript.createNamedImports(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
