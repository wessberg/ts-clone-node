import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTaggedTemplateExpression(
	node: TS.TaggedTemplateExpression,
	options: CloneNodeInternalOptions<TS.TaggedTemplateExpression>
): TS.TaggedTemplateExpression {
	return options.typescript.createTaggedTemplate(
		options.hook("tag", cloneNode(node.tag, nextOptions(options)), node.tag, payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(options)), node.typeArguments, payload(options)),
		options.hook("template", cloneNode(node.template, nextOptions(options)), node.template, payload(options))
	);
}
