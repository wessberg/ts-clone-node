import type {TS} from "../type/ts.js";

export function getModifierLikes(node: TS.Node): readonly TS.ModifierLike[] | undefined {
	const modifiers = "modifiers" in node && Array.isArray(node.modifiers) ? node.modifiers : [];

	if ("decorators" in node && Array.isArray(node.decorators)) {
		return [...node.decorators, ...modifiers];
	} else {
		return modifiers;
	}
}
