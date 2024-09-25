import {print} from "./print.js";
import {parse} from "./parse.js";
import {cloneNode} from "../../src/clone-node/clone-node.js";
import type {CloneNodeOptions} from "../../src/clone-node/clone-node-options.js";
import type {TS} from "../../src/clone-node/type/ts.js";
import type {MetaNode} from "../../src/clone-node/type/meta-node.js";

type SelectNodeCallback<T extends MetaNode> = (sourceFile: TS.SourceFile) => T;

export interface CloneAsTextOptions<T extends MetaNode = TS.SourceFile> extends Partial<CloneNodeOptions<T>> {
	selectNode?: SelectNodeCallback<MetaNode>;
	typescript: typeof TS;
}

export function cloneAsText<T extends MetaNode = TS.SourceFile>(text: string, {selectNode = sourceFile => sourceFile as unknown as T, ...options}: CloneAsTextOptions<T>): string {
	const parseResult = parse(text, options.typescript);

	const selectedNode = selectNode(parseResult) as T;

	if (Boolean(options.debug)) {
		console.log("BEFORE:");
		printNodeTree(selectedNode, options.typescript);
		console.log();
	}

	const clonedNode = cloneNode(selectedNode, options);

	if (Boolean(options.debug)) {
		console.log("AFTER:");
		printNodeTree(clonedNode, options.typescript);
		console.log();
	}

	return print(clonedNode, options.typescript, parseResult);
}

function printNodeTree(node: TS.Node, typescript: typeof TS, nest?: number) {
	if (nest == null) nest = 0;
	let space = "";
	for (let i = 0; i < nest; i++) space += " ";
	console.log(
		space,
		(typescript as Partial<typeof TS>).isPropertyAccessChain?.(node)
			? "PropertyAccessChain"
			: (typescript as Partial<typeof TS>).isImportTypeNode?.(node)
				? "ImportTypeNode"
				: (typescript as Partial<typeof TS>).isTypePredicateNode?.(node)
					? "TypePredicateNode"
					: typescript.SyntaxKind[node.kind]
	);
	node.forEachChild(child => printNodeTree(child, typescript, nest + 1));
}
