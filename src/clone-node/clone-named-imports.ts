import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneNamedImports(node: TS.NamedImports, options: CloneNodeInternalOptions<TS.NamedImports>): TS.NamedImports {
	return options.typescript.createNamedImports(
		options.hook("elements", cloneNodes(node.elements, nextOptions(options)), node.elements, payload(options))
	);
}
