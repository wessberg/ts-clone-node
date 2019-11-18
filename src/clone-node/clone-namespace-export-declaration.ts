import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneNamespaceExportDeclaration(
	node: TS.NamespaceExportDeclaration,
	options: CloneNodeInternalOptions<TS.NamespaceExportDeclaration>
): TS.NamespaceExportDeclaration {
	return options.typescript.createNamespaceExportDeclaration(options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)));
}
