import test from "ava";
import {formatCode} from "./util/format-code";
import {cloneAsText} from "./util/clone-as-text";
import {withTypeScript} from "./util/ts-macro";

test("Clones comments correctly. #1", withTypeScript, (t, {typescript}) => {
	const text = `\
	export default {
		/**
	 	* This is a comment
	 	* @param {string} foo - foobarbaz
	 	* @returns {string}
	 	*/
		foo: (bar: string) => {
			return foo;
		}
	};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #2", withTypeScript, (t, {typescript}) => {
	const text = `\
	export default {
		// This is a comment
		foo: (foo: string) => {
			return foo;
		}
	};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #3", withTypeScript, (t, {typescript}) => {
	const text = `\
	export default {
		/* This is a comment */
		foo: (foo: string) => {
			return foo;
		}
	};
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #4", withTypeScript, (t, {typescript}) => {
	const text = `\
	const foo = /** @type {string} */ "foo";
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #5", withTypeScript, (t, {typescript}) => {
	const text = `\
	const foo = "foo"; // This comment comes after
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #6", withTypeScript, (t, {typescript}) => {
	const text = `\
	
	/**
	 * Enum for tri-state values.
	 * @readonly
	 * @private
	 * @protected
	 * @public
	 * @enum {number}
	 */
	const enum FooKind {
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #7", withTypeScript, (t, {typescript}) => {
	const text = `\
	 /**
    * Snowball event.
    * @event Hurl#snowball
    * @type {object}
    * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
    */
    this.foo();
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #8", withTypeScript, (t, {typescript}) => {
	const text = `\
	 class Foo {
	 
	 	/**
	   * Foo
	   */
	 	doStuff (): void {
	 	}
   }
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #9", withTypeScript, (t, {typescript}) => {
	const text = `\
	/**
	 * Comment
	 */
	 interface Foo {
	 /**
	  * Comment #2
	  */
	 	member: string;
	 	/**
	 	 * Comment #3
	 	 * @param {string} arg - An Argument
	 	 * @returns {string}
	 	 */
	 	method (arg: string): string;
	 }
	 export const foo: Foo = {
	 	member: "",
	 	method (arg: string): string {
	 		// Single-line comment
	 		return arg.toUppercase();
	 	}
	 };
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #10", withTypeScript, (t, {typescript}) => {
	const text = `\
	function foo () {
	} // This comes after
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #11", withTypeScript, (t, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * 
	 */
	 function foo (): void {}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #12", withTypeScript, (t, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @deprecated
	 */
	 function foo (): void {}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #13", withTypeScript, (t, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @see https://example.com/
	 */
	 function foo (): void {}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #14", withTypeScript, (t, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @example foo();
	 */
	 function foo (): void {}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
