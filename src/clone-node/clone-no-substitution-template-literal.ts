import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneNoSubstitutionTemplateLiteral(
	node: TS.NoSubstitutionTemplateLiteral,
	options: CloneNodeInternalOptions<TS.NoSubstitutionTemplateLiteral>
): TS.NoSubstitutionTemplateLiteral {
	return options.typescript.createNoSubstitutionTemplateLiteral(
		options.hook("text", node.text, node.text, payload(options)),
		options.hook("rawText", node.rawText, node.text, payload(options))
	);
}
