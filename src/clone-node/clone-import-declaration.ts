import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportDeclaration(node: TS.ImportDeclaration, options: CloneNodeInternalOptions<TS.ImportDeclaration>): TS.ImportDeclaration {
	return options.typescript.createImportDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("importClause", cloneNode(node.importClause, nextOptions(options)), payload(options)),
		options.hook("moduleSpecifier", cloneNode(node.moduleSpecifier, nextOptions(options)), payload(options))
	);
}
