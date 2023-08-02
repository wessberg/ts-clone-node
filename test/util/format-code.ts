import prettier from "@prettier/sync";
import {formatWhitespace} from "./format-whitespace.js";

interface FormatOptions {
	parser: "typescript" | "json";
	onlyWhitespace: boolean;
}

export function formatCode(code: string, {parser = "typescript", onlyWhitespace = false}: Partial<FormatOptions> = {}): string {
	if (onlyWhitespace) {
		return formatWhitespace(code);
	}
	try {
		return prettier.format(code, {parser, endOfLine: "lf"});
	} catch {
		return formatWhitespace(code);
	}
}
