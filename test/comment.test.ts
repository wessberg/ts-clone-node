import assert from "node:assert";
import {test} from "./util/test-runner.js";
import {formatCode} from "./util/format-code.js";
import {cloneAsText} from "./util/clone-as-text.js";

test("Clones comments correctly. #1", "*", (_, {typescript}) => {
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

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #2", "*", (_, {typescript}) => {
	const text = `\
	export default {
		// This is a comment
		foo: (foo: string) => {
			return foo;
		}
	};
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #3", "*", (_, {typescript}) => {
	const text = `\
	export default {
		/* This is a comment */
		foo: (foo: string) => {
			return foo;
		}
	};
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #4", "*", (_, {typescript}) => {
	const text = `\
	const foo = /** @type {string} */ "foo";
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #5", "*", (_, {typescript}) => {
	const text = `\
	const foo = "foo"; // This comment comes after
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #6", "*", (_, {typescript}) => {
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

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #7", "*", (_, {typescript}) => {
	const text = `\
	 /**
    * Snowball event.
    * @event Hurl#snowball
    * @type {object}
    * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
    */
    this.foo();
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #8", "*", (_, {typescript}) => {
	const text = `\
	 class Foo {
	 
	 	/**
	   * Foo
	   */
	 	doStuff (): void {
	 	}
   }
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #9", "*", (_, {typescript}) => {
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

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #10", "*", (_, {typescript}) => {
	const text = `\
	function foo () {
	} // This comes after
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #11", "*", (_, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * 
	 */
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #12", "*", (_, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @deprecated
	 */
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #13", "*", (_, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @see https://example.com/
	 */
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #14", "*", (_, {typescript}) => {
	const text = `\
	interface Foo {
	}
	/**
	 * @example foo();
	 */
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #15", "*", (_, {typescript}) => {
	const text = `\
	
	/**
	 * @typedef CompilerOptions
	 * @prop {boolean} [strict]
	 * @prop {string} [outDir]
	 */
	/**
	 * @satisfies {CompilerOptions}
	 */ 
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #16", "*", (_, {typescript}) => {
	const text = `\
	
	/**
	 * @overload
	 * @param {string} value
	 * @return {void}
	 */
	/**
	 * @overload
	 * @param {number} value
	 * @param {number} [maximumFractionDigits]
	 * @return {void}
	 */
	/**
	 * @param {string | number} value
	 * @param {number} [maximumFractionDigits]
	 */
	function printValue(value, maximumFractionDigits) {
		if (typeof value === "number") {
			const formatter = Intl.NumberFormat("en-US", { maximumFractionDigits });
			value = formatter.format(value);
		}
		console.log(value);
	}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #17", "*", (_, {typescript}) => {
	const text = `\
	
	/**
	 * @typedef FooError
	 */
	/**
	 * @throws {FooError}
	 */ 
	 function foo (): void {}
`;

	assert.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
