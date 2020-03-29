import * as TSModule from "typescript";
import {SetParentNodesOptions} from "../type/set-parent-nodes-options";

export function toSetParentNodesOptions(options: Partial<SetParentNodesOptions>): SetParentNodesOptions {
	return {
		typescript: options.typescript ?? TSModule,
		propertyName: "parent",
		deep: true
	};
}
