import {CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import * as TSModule from "typescript";
import {MetaNode} from "../type/meta-node";

export function toInternalOptions<T extends MetaNode>(options: Partial<CloneNodeOptions<T>>): CloneNodeInternalOptions<T> {
	return {
		...options,
		typescript: options.typescript ?? TSModule,
		setParents: options.setParents ?? false,
		preserveComments: options.preserveComments ?? true,
		commentRanges: new Set(),
		depth: 0,
		hook: options.hook ?? (_ => ({})),
		finalize: options.finalize ?? (_ => {})
	};
}
