import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneNamedExports(node: TS.NamedExports, options: CloneNodeInternalOptions<TS.NamedExports>): TS.NamedExports {
	return options.typescript.createNamedExports(
		options.hook("elements", cloneNodes(node.elements, nextOptions(options)), node.elements, payload(options))
	);
}
