import {SourceFile, Node} from "typescript";
import {print} from "./print";
import {parse} from "./parse";
import {cloneNode} from "../../src/clone-node/clone-node";
import {CloneNodeOptions} from "../../src/clone-node/clone-node-options";

type SelectNodeCallback<T extends Node> = (sourceFile: SourceFile) => T;

export function cloneAsText<T extends Node = SourceFile> (text: string, selectNode: SelectNodeCallback<T> = sourceFile => sourceFile as unknown as T, options?: Partial<CloneNodeOptions<T>>): string {
	const parseResult = parse(text);
	const selectedNode = selectNode(parseResult);
	return print(
		cloneNode(
			selectedNode,
			options
		)
	);
}