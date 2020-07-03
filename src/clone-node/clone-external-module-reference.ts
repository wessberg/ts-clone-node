import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExternalModuleReference(node: TS.ExternalModuleReference, options: CloneNodeVisitorOptions<TS.ExternalModuleReference>): TS.ExternalModuleReference {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExternalModuleReference, options: CloneNodeVisitorOptions<TS.ExternalModuleReference>): TS.ExternalModuleReference {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExternalModuleReference(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never
	) as unknown) as TS.ExternalModuleReference;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExternalModuleReference, options: CloneNodeVisitorOptions<TS.ExternalModuleReference>): TS.ExternalModuleReference {
	return options.factory.createExternalModuleReference(options.hook("expression", options.nextNode(node.expression), node.expression));
}
