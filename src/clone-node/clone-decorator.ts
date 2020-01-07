import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneDecorator(node: TS.Decorator, options: CloneNodeInternalOptions<TS.Decorator>): TS.Decorator {
	return options.typescript.createDecorator(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
