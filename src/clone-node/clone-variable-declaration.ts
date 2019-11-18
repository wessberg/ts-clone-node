import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneVariableDeclaration(
	node: TS.VariableDeclaration,
	options: CloneNodeInternalOptions<TS.VariableDeclaration>
): TS.VariableDeclaration {
	return options.typescript.createVariableDeclaration(
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), payload(options))
	);
}
