import test from "ava";
import {formatCode} from "./util/format-code";
import {cloneAsText} from "./util/clone-as-text";
import {TS as typescript} from "../src/clone-node/type/ts";

test("Clones comments correctly. #1", t => {
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

test("Clones comments correctly. #2", t => {
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

test("Clones comments correctly. #3", t => {
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

test("Clones comments correctly. #4", t => {
	const text = `\
	const foo = /** @type {string} */ "foo";
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #5", t => {
	const text = `\
	const foo = "foo"; // This comment comes after
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #6", t => {
	const text = `\
	
	/**
	 * Enum for tri-state values.
	 * @readonly
	 * @enum {number}
	 */
	const enum FooKind {
	}
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});

test("Clones comments correctly. #7", t => {
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

test("Clones comments correctly. #8", t => {
	const text = `\
	 export class Foo {
		/**
     * Does something
     * @returns {void}
     */
     doFoo(): void {}
   }
`;

	t.deepEqual(formatCode(cloneAsText(text, {typescript})), formatCode(text));
});
