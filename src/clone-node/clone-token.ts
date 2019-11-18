import {CloneNodeInternalOptions, NodeHookValue} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneToken<TKind extends TS.SyntaxKind>(node: TS.Token<TKind>, options: CloneNodeInternalOptions<TS.Token<TKind>>): TS.Token<TKind> {
	return options.typescript.createToken(options.hook("kind", node.kind as NodeHookValue<TS.Token<TKind>, "kind">, payload(options)) as TKind);
}
