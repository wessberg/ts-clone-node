import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneIdentifier(node: TS.Identifier, options: CloneNodeVisitorOptions<TS.Identifier>): TS.Identifier {
	const text = "text" in node ? node.text : options.typescript.unescapeLeadingUnderscores((node as TS.Identifier).escapedText);
	return options.factory.createIdentifier(options.hook("text", text, text));
}
