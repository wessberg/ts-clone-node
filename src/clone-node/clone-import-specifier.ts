import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportSpecifier(node: TS.ImportSpecifier, options: CloneNodeInternalOptions<TS.ImportSpecifier>): TS.ImportSpecifier {
	return options.typescript.createImportSpecifier(
		options.hook("propertyName", cloneNode(node.propertyName, nextOptions(options)), node.propertyName, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options))
	);
}
