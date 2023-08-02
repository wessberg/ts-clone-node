import {test} from "./util/test-runner.js";
import {formatCode} from "./util/format-code.js";
import {cloneAsText} from "./util/clone-as-text.js";

test("Performs an identical clone. #1", "*", (t, {typescript}) => {
	const text = `export type Foo = "a"|"b"|"c"`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #2", ">=3.2", (t, {typescript}) => {
	const text = `\
	function foo (el: number): typeof el extends number ? Array<infer R> : string {
		console.log(/bar/, 2n, 123, [123], {a: 1}, "foo", \`foo\${"bar"}\`);
		((foo ? bar : (() => {})["length"]) + 2);
		throw new Error();
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #3", "*", (t, {typescript}) => {
	const text = `\
	interface Baz {
		foo (): void;
	}
	enum FooKind {
		A = 1,
		B
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

test("Performs an identical clone. #4", "*", (t, {typescript}) => {
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

test("Performs an identical clone. #5", "*", (t, {typescript}) => {
	const text = `\
	const template = html\`<p>\${foo}</p>\`;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #6", "*", (t, {typescript}) => {
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

test("Performs an identical clone. #7", "*", (t, {typescript, factory}) => {
	const text = `\
	function foo () {
		return function () {};
	}
`;

	const cloneResult = cloneAsText(text, {
		typescript,
		selectNode: sourceFile => sourceFile.statements.filter(typescript.isFunctionDeclaration)[0],
		hook: (_, {depth}) =>
			depth > 0
				? {}
				: {
						modifiers: modifiers =>
							modifiers == null ? [factory.createModifier(typescript.SyntaxKind.ExportKeyword)] : [...modifiers, factory.createModifier(typescript.SyntaxKind.ExportKeyword)]
				  }
	});

	t.deepEqual(formatCode(cloneResult), formatCode(`export ${text}`));
});

test("Performs an identical clone. #8", ">=3.8", (t, {typescript}) => {
	const text = `export * as utilities from "./utilities.js";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #9", ">=3.8", (t, {typescript}) => {
	const text = `import type { Foo } from "./foo.js";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #10", ">=4.0", (t, {typescript}) => {
	const text = `\
type Range = [
    start: number,
    end: number
];
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #11", ">=4.0", (t, {typescript}) => {
	const text = `\
let a;
a ||= 2;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #12", "*", (t, {typescript}) => {
	const text = `\
	({ foo: undefined as any });
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #13", "*", (t, {typescript}) => {
	const text = `\
foo(undefined as any)
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #14", "*", (t, {typescript}) => {
	const text = `\
	const foo = undefined as any
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #15", ">=4.1", (t, {typescript}) => {
	const text = "type Greeting = `hello ${World}`;";

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #16", ">=4.1", (t, {typescript}) => {
	const text = `\
type MappedTypeWithNewKeys<T> = {
    [K in keyof T as NewKeyType]: T[K];
};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #17", ">=4.2", (t, {typescript}) => {
	const text = `\
let Ctor: abstract new () => unknown;
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript}), {onlyWhitespace: true}), formatCode(text, {onlyWhitespace: true}));
});

test("Performs an identical clone. #18", "*", (t, {typescript}) => {
	const text = `\
	import Foo = bar;
	`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #19", ">=4.3", (t, {typescript}) => {
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

test("Performs an identical clone. #20", "*", (t, {typescript}) => {
	const text = `\
	declare const Foo = "Hello, World!";`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #21", ">=3.7", (t, {typescript}) => {
	const text = `\
	this.person?.hasEmailAddress?.emailAddress;`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #22", ">=4.4", (t, {typescript}) => {
	const text = `\
class {
	static {
	}
}
`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #23", "*", (t, {typescript}) => {
	const text = `\
		export type Foo = "bar"[];
`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #24", "*", (t, {typescript}) => {
	const text = `\
	export type Foo = (string | [string, string])[];
`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #25", ">=4.5", (t, {typescript}) => {
	const text = `\
	import obj from "./something.json" assert { type: "json" };
`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #26", ">=4.7", (t, {typescript}) => {
	const text = `\
	export type TypeFromRequire = import("pkg", { assert: { "resolution-mode": "require" } }).TypeFromRequire;
`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #27", ">=4.5", (t, {typescript}) => {
	const text = `\
	import type { TypeFromRequire } from "pkg" assert {
		"resolution-mode": "require"
	};`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #28", ">=4.6", (t, {typescript}) => {
	const text = `\
	const foo = import("pkg", { assert: { "type": "json" } })`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #29", ">=4.9", (t, {typescript}) => {
	const text = `\
	const foo = {foo: "bar"} satisfies Record<string, "bar">;`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #30", ">=4.9", (t, {typescript}) => {
	const text = `\
	class Person {
		accessor name: string;
		constructor(name: string) {
			this.name = name;
		}
	}`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Performs an identical clone. #31", "*", (t, {typescript}) => {
	const text = `\
	@decorated()
	class Person {
	}`;
	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
