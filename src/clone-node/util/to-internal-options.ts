import {CloneNodeFinalizerCallback, CloneNodeHookFactory, CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import * as TSModule from "typescript";
import {MetaNode} from "../type/meta-node";

export function toInternalOptions<T extends MetaNode>(options: Partial<CloneNodeOptions<T>>): CloneNodeInternalOptions<T> {
	const typescript = options.typescript ?? TSModule;
	return {
		...options,
		typescript,
		factory: options.factory ?? typescript.factory ?? typescript,
		setParents: options.setParents ?? false,
		setOriginalNodes: options.setOriginalNodes ?? false,
		preserveSymbols: options.preserveSymbols ?? false,
		preserveComments: options.preserveComments ?? true,
		commentRanges: new Set(),
		depth: 0,
		hook: (options.hook as CloneNodeHookFactory<MetaNode>) ?? (() => ({})),
		finalize:
			(options.finalize as CloneNodeFinalizerCallback<MetaNode> | undefined) ??
			(() => {
				// Noop
			})
	};
}
