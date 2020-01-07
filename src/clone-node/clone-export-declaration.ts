import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExportDeclaration(node: TS.ExportDeclaration, options: CloneNodeInternalOptions<TS.ExportDeclaration>): TS.ExportDeclaration {
	return options.typescript.createExportDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("exportClause", cloneNode(node.exportClause, nextOptions(node.exportClause, options)), node.exportClause, payload(options)),
		options.hook(
			"moduleSpecifier",
			cloneNode(node.moduleSpecifier, nextOptions(node.moduleSpecifier, options)),
			node.moduleSpecifier,
			payload(options)
		)
	);
}
