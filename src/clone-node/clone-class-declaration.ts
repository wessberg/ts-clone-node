import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneClassDeclaration(node: TS.ClassDeclaration, options: CloneNodeInternalOptions<TS.ClassDeclaration>): TS.ClassDeclaration {
	return options.typescript.createClassDeclaration(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), payload(options)),
		options.hook("heritageClauses", cloneNodes(node.heritageClauses, nextOptions(options)), payload(options)),
		options.hook("members", cloneNodes(node.members, nextOptions(options)), payload(options))
	);
}
