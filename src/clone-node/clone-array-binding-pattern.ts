import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneArrayBindingPattern(node: TS.ArrayBindingPattern, options: CloneNodeVisitorOptions<TS.ArrayBindingPattern>): TS.ArrayBindingPattern {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ArrayBindingPattern, options: CloneNodeVisitorOptions<TS.ArrayBindingPattern>): TS.ArrayBindingPattern {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createArrayBindingPattern(options.hook("elements", options.nextNodes(node.elements), node.elements) as never) as unknown) as TS.ArrayBindingPattern;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ArrayBindingPattern, options: CloneNodeVisitorOptions<TS.ArrayBindingPattern>): TS.ArrayBindingPattern {
	return options.factory.createArrayBindingPattern(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
