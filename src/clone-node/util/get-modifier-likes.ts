import type {TS} from "../type/ts.js";

export function getModifierLikes(node: TS.Node): readonly TS.ModifierLike[] | undefined {
	const modifiers = ("modifiers" in node && Array.isArray(node.modifiers) ? node.modifiers : []) as TS.ModifierLike[] | undefined;

	if ("decorators" in node && Array.isArray(node.decorators)) {
		return [...(node.decorators as TS.Decorator[]), ...(modifiers as TS.Modifier[])];
	} else {
		return modifiers;
	}
}
