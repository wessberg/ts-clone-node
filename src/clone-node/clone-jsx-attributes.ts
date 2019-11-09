import {createJsxAttributes, JsxAttributes} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneJsxAttributes (node: JsxAttributes, options: CloneNodeInternalOptions<JsxAttributes>): JsxAttributes {
	return createJsxAttributes(
		options.hook("properties", cloneNodes(node.properties))
	);
}