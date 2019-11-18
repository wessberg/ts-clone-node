import {TS} from "../type/ts";
import {CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import * as TSModule from "typescript";

export function toInternalOptions<T extends TS.Node>(
	options: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T>
): CloneNodeInternalOptions<T> {
	return "internal" in options
		? options
		: {
				...options,
				internal: true,
				depth: 0,
				typescript: options.typescript ?? TSModule,
				hook: (key, value, payload) => {
					if (options.hook != null) {
						const entry = options.hook[key];
						if (entry != null) {
							return entry(value, payload);
						}
					}
					return value;
				}
		  };
}
