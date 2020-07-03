import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSwitchStatement(node: TS.SwitchStatement, options: CloneNodeVisitorOptions<TS.SwitchStatement>): TS.SwitchStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.SwitchStatement, options: CloneNodeVisitorOptions<TS.SwitchStatement>): TS.SwitchStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createSwitch(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("caseBlock", options.nextNode(node.caseBlock), node.caseBlock) as never
	) as unknown) as TS.SwitchStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.SwitchStatement, options: CloneNodeVisitorOptions<TS.SwitchStatement>): TS.SwitchStatement {
	return options.factory.createSwitchStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("caseBlock", options.nextNode(node.caseBlock), node.caseBlock)
	);
}
