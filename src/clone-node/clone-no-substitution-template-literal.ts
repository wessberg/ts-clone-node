import {createNoSubstitutionTemplateLiteral, NoSubstitutionTemplateLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneNoSubstitutionTemplateLiteral (node: NoSubstitutionTemplateLiteral, options: CloneNodeInternalOptions<NoSubstitutionTemplateLiteral>): NoSubstitutionTemplateLiteral {
	return createNoSubstitutionTemplateLiteral(
		options.hook("text", node.text),
		options.hook("rawText", node.rawText)
	);
}