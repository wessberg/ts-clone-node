import {format} from "prettier";

interface FormatOptions {
	parser: "typescript"|"json";
	onlyWhitespace: boolean;
}

export function formatCode(code: string, {parser = "typescript", onlyWhitespace = false}: Partial<FormatOptions> = {}): string {
	if (onlyWhitespace) {
		return code.replace(/\r?\n/g, "\n");
	}
	return format(code, {parser, endOfLine: "lf"});
}
