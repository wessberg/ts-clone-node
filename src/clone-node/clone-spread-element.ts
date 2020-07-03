import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSpreadElement(node: TS.SpreadElement, options: CloneNodeVisitorOptions<TS.SpreadElement>): TS.SpreadElement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.SpreadElement, options: CloneNodeVisitorOptions<TS.SpreadElement>): TS.SpreadElement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createSpread(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.SpreadElement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.SpreadElement, options: CloneNodeVisitorOptions<TS.SpreadElement>): TS.SpreadElement {
	return options.factory.createSpreadElement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
