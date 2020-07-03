import {CloneNodeVisitorOptions, NodeHookValue} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneToken<Tkind extends TS.SyntaxKind>(node: TS.Token<Tkind>, options: CloneNodeVisitorOptions<TS.Token<Tkind>>): TS.Token<Tkind> {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy<Tkind extends TS.SyntaxKind>(node: TS.Token<Tkind>, options: CloneNodeVisitorOptions<TS.Token<Tkind>>): TS.Token<Tkind> {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createToken(
		options.hook("kind", node.kind as NodeHookValue<TS.Token<Tkind>, "kind">, node.kind as NodeHookValue<TS.Token<Tkind>, "kind">) as never
	) as unknown) as TS.Token<Tkind>;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy<Tkind extends TS.SyntaxKind>(node: TS.Token<Tkind>, options: CloneNodeVisitorOptions<TS.Token<Tkind>>): TS.Token<Tkind> {
	return (options.factory.createToken(
		options.hook("kind", node.kind as NodeHookValue<TS.Token<Tkind>, "kind">, node.kind as NodeHookValue<TS.Token<Tkind>, "kind">) as never
	) as unknown) as TS.Token<Tkind>;
}
