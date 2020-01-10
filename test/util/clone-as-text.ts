import {print} from "./print";
import {parse} from "./parse";
import {cloneNode} from "../../src/clone-node/clone-node";
import {CloneNodeOptions} from "../../src/clone-node/clone-node-options";
import {TS} from "../../src/clone-node/type/ts";
import {MetaNode} from "../../src/clone-node/type/meta-node";

type SelectNodeCallback<T extends MetaNode> = (sourceFile: TS.SourceFile) => T;

export interface CloneAsTextOptions<T extends MetaNode = TS.SourceFile> extends Partial<CloneNodeOptions<T>> {
	selectNode?: SelectNodeCallback<MetaNode>;
	typescript: typeof TS;
}

export function cloneAsText<T extends MetaNode = TS.SourceFile>(
	text: string,
	{selectNode = sourceFile => (sourceFile as unknown) as T, ...options}: CloneAsTextOptions<T>
): string {
	const parseResult = parse(text, options.typescript);
	const selectedNode = selectNode(parseResult) as T;
	const clonedNode = cloneNode(selectedNode, options);
	return print(clonedNode, options.typescript, parseResult);
}
