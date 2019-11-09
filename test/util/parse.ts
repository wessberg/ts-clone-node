import {createSourceFile, SourceFile, ScriptTarget, ScriptKind} from "typescript";

/**
 * Parses the given text into a SourceFile
 * @param text
 */
export function parse (text: string): SourceFile {
	return createSourceFile(`sourcefile.ts`, text, ScriptTarget.ESNext, true, ScriptKind.TS);
}