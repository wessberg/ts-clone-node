import {CloneNodeVisitorOptions, NodeHookValue} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneToken<TKind extends TS.SyntaxKind>(node: TS.Token<TKind>, options: CloneNodeVisitorOptions<TS.Token<TKind>>): TS.Token<TKind> {
	return options.typescript.createToken(
		options.hook("kind", node.kind as NodeHookValue<TS.Token<TKind>, "kind">, node.kind as NodeHookValue<TS.Token<TKind>, "kind">) as TKind
	);
}
