import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePrivateIdentifier(node: TS.PrivateIdentifier, options: CloneNodeVisitorOptions<TS.PrivateIdentifier>): TS.PrivateIdentifier {
	return options.factory.createPrivateIdentifier(options.hook("text", node.text, node.text));
}
