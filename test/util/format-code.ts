import {format} from "prettier";
import {formatWhitespace} from "./format-whitespace";

interface FormatOptions {
	parser: "typescript"|"json";
	onlyWhitespace: boolean;
}

export function formatCode(code: string, {parser = "typescript", onlyWhitespace = false}: Partial<FormatOptions> = {}): string {
	if (onlyWhitespace) {
		return formatWhitespace(code);
	}
	try {
		return format(code, {parser, endOfLine: "lf"});
	} catch {
		return formatWhitespace(code);
	}
}
