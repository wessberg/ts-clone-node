import test from "ava";
import {formatCode} from "./util/format-code";
import {cloneAsText} from "./util/clone-as-text";
import {withTypeScript, withTypeScriptVersions} from "./util/ts-macro";

test("Performs an identical clone. #1", withTypeScript, (t, {typescript}) => {
	const text = `export type Foo = "a"|"b"|"c"`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #2", withTypeScriptVersions(">=3.2"), (t, {typescript}) => {
	const text = `\
	function foo (el: number): typeof el extends number ? Array<infer R> : string {
		console.log(/bar/, 2n, 123, [123], {a: 1}, "foo", \`foo\${"bar"}\`);
		((foo ? bar : (() => {})["length"]) + 2);
		throw new Error();
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #3", withTypeScript, (t, {typescript}) => {
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

test("Performs an identical clone. #4", withTypeScript, (t, {typescript}) => {
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

test("Performs an identical clone. #5", withTypeScript, (t, {typescript}) => {
	const text = `\
	const template = html\`<p>\${foo}</p>\`;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #6", withTypeScript, (t, {typescript}) => {
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

test("Performs an identical clone. #7", withTypeScript, (t, {typescript, factory}) => {
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
							modifiers == null ? [factory.createModifier(typescript.SyntaxKind.ExportKeyword)] : [...modifiers, factory.createModifier(typescript.SyntaxKind.ExportKeyword)]
				  };
		}
	});

	t.deepEqual(formatCode(cloneResult), formatCode(`export ${text}`));
});

test("Performs an identical clone. #8", withTypeScriptVersions(">=3.8"), (t, {typescript}) => {
	const text = `export * as utilities from "./utilities.js";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #9", withTypeScriptVersions(">=3.8"), (t, {typescript}) => {
	const text = `import type { Foo } from "./foo";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #10", withTypeScriptVersions(">=4.0"), (t, {typescript}) => {
	const text = `\
type Range = [
    start: number,
    end: number
];
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #11", withTypeScriptVersions(">=4.0"), (t, {typescript}) => {
	const text = `\
let a;
a ||= 2;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #12", withTypeScript, (t, {typescript}) => {
	const text = `\
	({ foo: undefined as any });
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #13", withTypeScript, (t, {typescript}) => {
	const text = `\
foo(undefined as any)
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #14", withTypeScript, (t, {typescript}) => {
	const text = `\
	const foo = undefined as any
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #15", withTypeScriptVersions(">=4.1"), (t, {typescript}) => {
	const text = "type Greeting = `hello ${World}`;";

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #16", withTypeScriptVersions(">=4.1"), (t, {typescript}) => {
	const text = `\
type MappedTypeWithNewKeys<T> = {
    [K in keyof T as NewKeyType]: T[K];
};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #17", withTypeScriptVersions(">=4.2"), (t, {typescript}) => {
	const text = `\
let Ctor: abstract new () => unknown;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript}), {onlyWhitespace: true}), formatCode(text, {onlyWhitespace: true}));
});

test("Performs an identical clone. #18", withTypeScript, (t, {typescript}) => {
	const text = `\
	import Foo = bar;
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #19", withTypeScriptVersions(">=4.3"), (t, {typescript}) => {
	const text = `\
class Base {
    foo(): void { }
}
class Child {
    override foo(): void { }
}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript}), {onlyWhitespace: true}), formatCode(text, {onlyWhitespace: true}));
});

test("Performs an identical clone. #20", withTypeScript, (t, {typescript}) => {
	const text = `\
	declare const Foo = "Hello, World!";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
