import {createMetaProperty, MetaProperty} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneMetaProperty (node: MetaProperty, options: CloneNodeInternalOptions<MetaProperty>): MetaProperty {
	return createMetaProperty(
		options.hook("keywordToken", cloneNode(node.keywordToken)),
		options.hook("name", cloneNode(node.name))
	);
}