const NON_WHITESPACE_CHARACTER_REGEXP = /\S/;
const NEWLINE_CHARACTERS = "\n";
const TAB_CHARACTER = " ";
const TAB_SIZE = 2;
const TAB_CHARACTERS = TAB_CHARACTER.repeat(TAB_SIZE);

export function formatWhitespace(code: string): string {
	// Normalize whitespace to start with
	const normalizedWhitespace = code.replace(/\r?\n/g, NEWLINE_CHARACTERS).replace(/\t/g, TAB_CHARACTERS);

	// Split into lines.
	const [head, ...tail] = normalizedWhitespace.split(NEWLINE_CHARACTERS);
	if (head == null || tail.length === 0) {
		// If there's only one line, just trim the input
		return head?.trim() ?? "";
	}

	let indentation: number | undefined;

	return [head, ...tail]
		.map(line => {
			const currentIndentation = line.match(NON_WHITESPACE_CHARACTER_REGEXP)?.index ?? 0;
			const trimmed = line.trim();
			const isEmpty = trimmed.length < 1;
			if (isEmpty) return trimmed;

			if (indentation == null) {
				indentation = currentIndentation;
				return line.slice(currentIndentation);
			}

			const indentationDiff = currentIndentation - indentation;
			const constrainedIndentationDiff = Math.max(0, Math.min(TAB_SIZE, indentationDiff));
			const sliceIndex = currentIndentation - constrainedIndentationDiff;

			return line.slice(sliceIndex);
		})
		.join(NEWLINE_CHARACTERS);
}
