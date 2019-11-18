import {TS} from "../../src/clone-node/type/ts";

/**
 * Parses the given text into a SourceFile
 */
export function parse(text: string, typescript: typeof TS): TS.SourceFile {
	return typescript.createSourceFile(`sourcefile.ts`, text, typescript.ScriptTarget.ESNext, true, typescript.ScriptKind.TS);
}
