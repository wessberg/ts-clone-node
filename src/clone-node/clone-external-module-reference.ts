import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExternalModuleReference(node: TS.ExternalModuleReference, options: CloneNodeVisitorOptions<TS.ExternalModuleReference>): TS.ExternalModuleReference {
	return options.factory.createExternalModuleReference(options.hook("expression", options.nextNode(node.expression), node.expression));
}
