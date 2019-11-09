import {createToken, SyntaxKind, Token} from "typescript";
import {CloneNodeInternalOptions, NodeHookValue} from "./clone-node-options";

export function cloneToken<TKind extends SyntaxKind> (node: Token<TKind>, options: CloneNodeInternalOptions<Token<TKind>>): Token<TKind> {
	return createToken(
		options.hook("kind", node.kind as NodeHookValue<Token<TKind>, "kind">) as TKind
	);
}