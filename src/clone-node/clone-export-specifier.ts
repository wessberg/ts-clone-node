import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExportSpecifier(node: TS.ExportSpecifier, options: CloneNodeInternalOptions<TS.ExportSpecifier>): TS.ExportSpecifier {
	return options.typescript.createExportSpecifier(
		options.hook("propertyName", cloneNode(node.propertyName, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options))
	);
}
