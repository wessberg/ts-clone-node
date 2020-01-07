import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneMetaProperty(node: TS.MetaProperty, options: CloneNodeInternalOptions<TS.MetaProperty>): TS.MetaProperty {
	return options.typescript.createMetaProperty(
		options.hook("keywordToken", node.keywordToken, node.keywordToken, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options))
	);
}
