import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneEnumMember(node: TS.EnumMember, options: CloneNodeInternalOptions<TS.EnumMember>): TS.EnumMember {
	return options.typescript.createEnumMember(
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), payload(options))
	);
}
