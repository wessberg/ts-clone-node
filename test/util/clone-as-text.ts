import {print} from "./print";
import {parse} from "./parse";
import {cloneNode} from "../../src/clone-node/clone-node";
import {CloneNodeHook} from "../../src/clone-node/clone-node-options";
import {TS} from "../../src/clone-node/type/ts";

type SelectNodeCallback<T extends TS.Node> = (sourceFile: TS.SourceFile) => T;

export interface CloneAsTextOptions<T extends TS.Node = TS.SourceFile> {
	selectNode?: SelectNodeCallback<TS.Node>;
	hook?: CloneNodeHook<T>;
	typescript: typeof TS;
}

export function cloneAsText<T extends TS.Node = TS.SourceFile>(
	text: string,
	{selectNode = sourceFile => (sourceFile as unknown) as T, ...options}: CloneAsTextOptions<T>
): string {
	const parseResult = parse(text, options.typescript);
	const selectedNode = selectNode(parseResult);
	return print(cloneNode(selectedNode, options), options.typescript);
}
