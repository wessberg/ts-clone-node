import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneDecorator(node: TS.Decorator, options: CloneNodeVisitorOptions<TS.Decorator>): TS.Decorator {
	return options.factory.createDecorator(options.hook("expression", options.nextNode(node.expression), node.expression));
}
