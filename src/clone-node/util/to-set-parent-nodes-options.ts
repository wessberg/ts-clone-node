import type {SetParentNodesOptions} from "../type/set-parent-nodes-options.js";
import ts from "typescript";
import type { TS } from "../type/ts.js";

export function toSetParentNodesOptions(options: Partial<SetParentNodesOptions>): SetParentNodesOptions {
	return {
		typescript: options.typescript ?? ts as typeof TS,
		propertyName: options.propertyName ?? "parent",
		deep: options.deep ?? true
	};
}
