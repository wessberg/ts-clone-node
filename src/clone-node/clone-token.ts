import {CloneNodeVisitorOptions, NodeHookValue} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneToken<Tkind extends TS.SyntaxKind>(node: TS.Token<Tkind>, options: CloneNodeVisitorOptions<TS.Token<Tkind>>): TS.Token<Tkind> {
	return options.factory.createToken(
		options.hook("kind", node.kind as NodeHookValue<TS.Token<Tkind>, "kind">, node.kind as NodeHookValue<TS.Token<Tkind>, "kind">) as never
	) as unknown as TS.Token<Tkind>;
}
