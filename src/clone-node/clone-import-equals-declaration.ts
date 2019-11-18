import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportEqualsDeclaration(
	node: TS.ImportEqualsDeclaration,
	options: CloneNodeInternalOptions<TS.ImportEqualsDeclaration>
): TS.ImportEqualsDeclaration {
	return options.typescript.createImportEqualsDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("moduleReference", cloneNode(node.moduleReference, nextOptions(options)), payload(options))
	);
}
