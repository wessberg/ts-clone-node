import test from "ava";
import {formatCode} from "./util/format-code";
import {cloneAsText} from "./util/clone-as-text";
import {TS as typescript} from "../src/clone-node/type/ts";

test("Performs an identical clone. #1", t => {
	const text = `export type Foo = "a"|"b"|"c"`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
test("Performs an identical clone. #2", t => {
	const text = `\
	function foo (el: number): typeof el extends number ? Array<infer R> : string {
		console.log(/bar/, 2n, 123, [123], {a: 1}, "foo", \`foo\${"bar"}\`);
		((foo ? bar : (() => {})["length"]) + 2);
		throw new Error();
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #3", t => {
	const text = `\
	interface Baz {
		foo (): void;
	}
	enum FooKind {
		A = 1,
		B
	}
	function* myGenerator () {
		yield true;
	}
	class Foo extends Bar implements Baz {
	 get foo () {}
	 set foo (val) {}
	 private bar: string = "hello";
	 static aMethod (arg1: number): void {}
	 constructor () {
	 	super();
	 }
	 foo () {
	 	super.foo();
	 	console.log(this);
	 	delete (this as any)[<any> "abc"];
	 	return;
	 }
	 async bar (): Promise<void> {
	 	return await new Promise<void>(resolve => resolve());
	 }
	};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #4", t => {
	const text = `\
	for await (const foo of []) {
		if (2+2 === 4) continue;
		else if (2+2 === 5) {
			do {
			} while (false);
		}
		else {
			(num!)++;
		}
		for (let foo in baz) {
			myLoop:
				for (let i = 0; i < something.length; i++) {
					while(2+2 === 5) {
						break myLoop;
					}
				}
		}
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #5", t => {
	const text = `\
	const template = html\`<p>\${foo}</p>\`;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #6", t => {
	const text = `\
	switch (foo) {
		case bar:
			return true;
		default: {
			try {
				return false;
			} catch {
			} finally {}
				
		}
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #7", t => {
	const text = `\
	function foo () {
		return function () {};
	}
`;

	const cloneResult = cloneAsText(text, {
		typescript,
		selectNode: sourceFile => sourceFile.statements.filter(typescript.isFunctionDeclaration)[0],
		hook: (_, {depth}) => {
			return depth > 0
				? {}
				: {
						modifiers: modifiers =>
							modifiers == null
								? [typescript.createModifier(typescript.SyntaxKind.ExportKeyword)]
								: [...modifiers, typescript.createModifier(typescript.SyntaxKind.ExportKeyword)]
				  };
		}
	});

	t.deepEqual(formatCode(cloneResult), formatCode(`export ${text}`));
});

test("Performs an identical clone. #8", t => {
	const text = `export * as utilities from "./utilities.js";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #9", t => {
	const text = `import type { Foo } from "./foo";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
