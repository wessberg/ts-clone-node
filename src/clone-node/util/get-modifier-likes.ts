import { TS } from "../type/ts";

export function getModifierLikes (node: TS.Node): readonly TS.ModifierLike[] | undefined {
    if ("decorators" in node && Array.isArray(node.decorators)) {
        return [...node.decorators, ...(node.modifiers ?? [])];
    } else {
        return node.modifiers;
    }
}