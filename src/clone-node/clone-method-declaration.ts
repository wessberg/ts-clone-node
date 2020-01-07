import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneMethodDeclaration(node: TS.MethodDeclaration, options: CloneNodeInternalOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	return options.typescript.createMethod(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("asteriskToken", cloneNode(node.asteriskToken, nextOptions(node.asteriskToken, options)), node.asteriskToken, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(node.questionToken, options)), node.questionToken, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(node.typeParameters, options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(node.parameters, options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options)),
		options.hook("body", cloneNode(node.body, nextOptions(node.body, options)), node.body, payload(options))
	);
}
