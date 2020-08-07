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

	if (options.debug) {
		console.log("BEFORE:");
		printNodeTree(selectedNode, options.typescript);
		console.log();
	}

	const clonedNode = cloneNode(selectedNode, options);

	if (options.debug) {
		console.log("AFTER:");
		printNodeTree(clonedNode, options.typescript);
		console.log();
	}

	return print(clonedNode, options.typescript, parseResult);
}

function printNodeTree(node: TS.Node, typescript: typeof TS, nest?: number) {
	if (!nest) nest = 0;
	let space = "";
	for (let i = 0; i < nest; i++) space += " ";
	console.log(space, typescript.SyntaxKind[node.kind]);
	node.forEachChild(child => printNodeTree(child, typescript, (nest ?? 0) + 1));
}
