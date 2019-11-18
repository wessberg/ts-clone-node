import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneMethodDeclaration(node: TS.MethodDeclaration, options: CloneNodeInternalOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	return options.typescript.createMethod(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(options)), payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("asteriskToken", cloneNode(node.asteriskToken, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(options)), payload(options))
	);
}
