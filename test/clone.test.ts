import test from "./util/test-runner";
import {formatCode} from "./util/format-code";
import {cloneAsText} from "./util/clone-as-text";
import {lt} from "semver";

test("Performs an identical clone. #1", (t, {typescript}) => {
	const text = `export type Foo = "a"|"b"|"c"`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #2", (t, {typescript}) => {
	if (lt(typescript.version, "3.2.0")) {
		t.pass(`Current TypeScript version (${typescript.version} does not support BigInt, which is part of the test...)`);
		return;
	}
	const text = `\
	function foo (el: number): typeof el extends number ? Array<infer R> : string {
		console.log(/bar/, 2n, 123, [123], {a: 1}, "foo", \`foo\${"bar"}\`);
		((foo ? bar : (() => {})["length"]) + 2);
		throw new Error();
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #3", (t, {typescript}) => {
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

test("Performs an identical clone. #4", (t, {typescript}) => {
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

test("Performs an identical clone. #5", (t, {typescript}) => {
	const text = `\
	const template = html\`<p>\${foo}</p>\`;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #6", (t, {typescript}) => {
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

test("Performs an identical clone. #7", (t, {typescript, compatFactory}) => {
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
								? [compatFactory.createModifier(typescript.SyntaxKind.ExportKeyword)]
								: [...modifiers, compatFactory.createModifier(typescript.SyntaxKind.ExportKeyword)]
				  };
		}
	});

	t.deepEqual(formatCode(cloneResult), formatCode(`export ${text}`));
});

test("Performs an identical clone. #8", (t, {typescript}) => {
	if (lt(typescript.version, "3.8.0")) {
		t.pass(`Current TypeScript version (${typescript.version} does not exported namespace bindings...)`);
		return;
	}

	const text = `export * as utilities from "./utilities.js";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #9", (t, {typescript}) => {
	if (lt(typescript.version, "3.8.0")) {
		t.pass(`Current TypeScript version (${typescript.version} does not support 'import type {...}'...)`);
		return;
	}

	const text = `import type { Foo } from "./foo";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #10", (t, {typescript}) => {
	if (lt(typescript.version, "4.0.0")) {
		t.pass(`Current TypeScript version (${typescript.version} does not support labeled tuple elements ([start: number, end: number])`);
		return;
	}

	const text = `type Range = [start: number, end: number];`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #11", (t, {typescript}) => {
	if (lt(typescript.version, "4.0.0")) {
		t.pass(`Current TypeScript version (${typescript.version} does not support logical assignments (a ||= b;)`);
		return;
	}

	const text = `\
	let a;
	a ||= 2;
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #12", (t, {typescript}) => {
	const text = `\
	({ foo: undefined as any });
	`;

	t.deepEqual(cloneAsText(text, {typescript}), formatCode(text));
});
