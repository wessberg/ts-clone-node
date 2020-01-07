import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportClause(node: TS.ImportClause, options: CloneNodeInternalOptions<TS.ImportClause>): TS.ImportClause {
	return options.typescript.createImportClause(
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("namedBindings", cloneNode(node.namedBindings, nextOptions(node.namedBindings, options)), node.namedBindings, payload(options))
	);
}
