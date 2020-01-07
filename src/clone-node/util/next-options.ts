import {CloneNodeInternalOptions} from "../clone-node-options";
import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";

export function nextOptions<NewOptionsNode extends MetaNode, OldOptionsNode extends MetaNode>(
	_nextNode: readonly NewOptionsNode[] | NewOptionsNode | NewOptionsNode[] | TS.NodeArray<NewOptionsNode> | undefined,
	options: CloneNodeInternalOptions<OldOptionsNode>
): CloneNodeInternalOptions<NewOptionsNode> {
	return ({...options, depth: options.depth + 1} as unknown) as CloneNodeInternalOptions<NewOptionsNode>;
}
