import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNoSubstitutionTemplateLiteral(
	node: TS.NoSubstitutionTemplateLiteral,
	options: CloneNodeVisitorOptions<TS.NoSubstitutionTemplateLiteral>
): TS.NoSubstitutionTemplateLiteral {
	return options.factory.createNoSubstitutionTemplateLiteral(options.hook("text", node.text, node.text), options.hook("rawText", node.rawText, node.text));
}
