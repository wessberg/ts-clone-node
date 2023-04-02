import { TS } from "../type/ts";
import {BaseCloneNodeOptions} from "../clone-node-options";

export function getModifierLikes (node: TS.Node, options: BaseCloneNodeOptions): readonly TS.ModifierLike[] | undefined {
    let setFromModifiers = false;
    const result: TS.ModifierLike[] = [];
    if ("canHaveDecorators" in options.typescript && options.typescript.canHaveDecorators(node) && node.modifiers) {
        if ("getDecorators" in options.typescript) {
            result.push(...(options.typescript.getDecorators(node) ?? []));
        } else {
            setFromModifiers = true;
            result.push(...node.modifiers);
        }
    } else if ("decorators" in node && Array.isArray(node.decorators)) {
        result.push(...node.decorators);
    }
    if ("canHaveModifiers" in options.typescript && options.typescript.canHaveModifiers(node) && node.modifiers) {
        if ("getModifiers" in options.typescript) {
            result.push(...(options.typescript.getModifiers(node) ?? []));
        } else if (!setFromModifiers){
            result.push(...node.modifiers);
        }
    } else if ("modifiers" in node && Array.isArray(node.modifiers)) {
        result.push(...node.modifiers);
    }
    return result;
}