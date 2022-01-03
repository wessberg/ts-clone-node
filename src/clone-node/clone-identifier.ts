import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIdentifier(node: TS.Identifier, options: CloneNodeVisitorOptions<TS.Identifier>): TS.Identifier {
	const text = "text" in node ? node.text : options.typescript.unescapeLeadingUnderscores(node.escapedText);
	return options.factory.createIdentifier(options.hook("text", text, text));
}
