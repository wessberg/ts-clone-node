import {CloneNodeFinalizerCallback, CloneNodeHookFactory, CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options.js";
import {MetaNode} from "../type/meta-node.js";
import {ensureNodeFactory} from "compatfactory";
import ts from "typescript";

export function toInternalOptions<T extends MetaNode>(options: Partial<CloneNodeOptions<T>>): CloneNodeInternalOptions<T> {
	const typescript = options.typescript ?? ts;
	return {
		...options,
		typescript,
		factory: ensureNodeFactory(options.factory ?? typescript),
		setParents: options.setParents ?? false,
		setOriginalNodes: options.setOriginalNodes ?? false,
		preserveSymbols: options.preserveSymbols ?? false,
		preserveComments: options.preserveComments ?? true,
		commentRanges: new Set(),
		debug: options.debug ?? false,
		depth: 0,
		hook: (options.hook as CloneNodeHookFactory<MetaNode>) ?? (() => ({})),
		finalize:
			(options.finalize as CloneNodeFinalizerCallback<MetaNode> | undefined) ??
			(() => {
				// Noop
			})
	};
}
