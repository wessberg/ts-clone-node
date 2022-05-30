import {SetParentNodesOptions} from "../type/set-parent-nodes-options.js";
import ts from "typescript";

export function toSetParentNodesOptions(options: Partial<SetParentNodesOptions>): SetParentNodesOptions {
	return {
		typescript: options.typescript ?? ts,
		propertyName: options.propertyName ?? "parent",
		deep: options.deep ?? true
	};
}
