import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExternalModuleReference(
	node: TS.ExternalModuleReference,
	options: CloneNodeInternalOptions<TS.ExternalModuleReference>
): TS.ExternalModuleReference {
	return options.typescript.createExternalModuleReference(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options))
	);
}
