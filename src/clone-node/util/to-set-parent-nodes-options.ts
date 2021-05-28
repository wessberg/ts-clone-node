import {SetParentNodesOptions} from "../type/set-parent-nodes-options";
import {TS} from "../type/ts";

export function toSetParentNodesOptions(options: Partial<SetParentNodesOptions>): SetParentNodesOptions {
	return {
		typescript: options.typescript ?? TS,
		propertyName: options.propertyName ?? "parent",
		deep: options.deep ?? true
	};
}
