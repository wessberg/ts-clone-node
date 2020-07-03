import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneMetaProperty(node: TS.MetaProperty, options: CloneNodeVisitorOptions<TS.MetaProperty>): TS.MetaProperty {
	return options.factory.createMetaProperty(options.hook("keywordToken", node.keywordToken, node.keywordToken), options.hook("name", options.nextNode(node.name), node.name));
}
