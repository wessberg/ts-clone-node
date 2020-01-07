import {CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import * as TSModule from "typescript";
import {MetaNode} from "../type/meta-node";

export function toInternalOptions<T extends MetaNode>(
	node: T,
	options: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T>
): CloneNodeInternalOptions<T> {
	if ("internal" in options) {
		return options;
	}

	const typescript = options.typescript ?? TSModule;
	return {
		...options,
		typescript,
		internal: true,
		depth: 0,
		sourceFile: options.sourceFile ?? node.getSourceFile(),
		commentRanges: new Set(),
		hook: (key, value, oldValue, payload) => {
			if (options.hook != null) {
				if (typeof options.hook === "function") {
					return options.hook(key, value, oldValue, payload);
				} else {
					const entry = options.hook[key];
					if (entry != null) {
						return entry(value, oldValue, payload);
					}
				}
			}
			return value;
		}
	};
}
