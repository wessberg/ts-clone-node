import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypeAssertion(node: TS.TypeAssertion, options: CloneNodeInternalOptions<TS.TypeAssertion>): TS.TypeAssertion {
	return options.typescript.createTypeAssertion(
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options))
	);
}
