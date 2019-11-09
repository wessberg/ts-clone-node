import {createTaggedTemplate, TaggedTemplateExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneTaggedTemplateExpression (node: TaggedTemplateExpression, options: CloneNodeInternalOptions<TaggedTemplateExpression>): TaggedTemplateExpression {
	return createTaggedTemplate(
		options.hook("tag", cloneNode(node.tag)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("template", cloneNode(node.template))
	);
}