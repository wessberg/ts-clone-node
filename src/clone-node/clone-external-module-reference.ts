import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneExternalModuleReference(node: TS.ExternalModuleReference, options: CloneNodeVisitorOptions<TS.ExternalModuleReference>): TS.ExternalModuleReference {
	return options.factory.createExternalModuleReference(options.hook("expression", options.nextNode(node.expression), node.expression));
}
