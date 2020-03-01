import {CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import * as TSModule from "typescript";
import {MetaNode} from "../type/meta-node";

/* eslint-disable @typescript-eslint/no-unused-vars */

export function toInternalOptions<T extends MetaNode>(options: Partial<CloneNodeOptions<T>>): CloneNodeInternalOptions<T> {
	return {
		...options,
		typescript: options.typescript ?? TSModule,
		setParents: options.setParents ?? false,
		setOriginalNodes: options.setOriginalNodes ?? false,
		preserveSymbols: options.preserveSymbols ?? false,
		preserveComments: options.preserveComments ?? true,
		commentRanges: new Set(),
		depth: 0,
		hook: options.hook ?? (_ => ({})),
		finalize:
			options.finalize ??
			(_ => {
				// Noop
			})
	};
}
