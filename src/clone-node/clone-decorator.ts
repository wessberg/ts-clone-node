import {createDecorator, Decorator} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneDecorator (node: Decorator, options: CloneNodeInternalOptions<Decorator>): Decorator {
	return createDecorator(
		options.hook("expression", cloneNode(node.expression))
	);
}