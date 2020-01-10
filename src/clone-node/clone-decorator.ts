import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDecorator(node: TS.Decorator, options: CloneNodeVisitorOptions<TS.Decorator>): TS.Decorator {
	return options.typescript.createDecorator(options.hook("expression", options.nextNode(node.expression), node.expression));
}
