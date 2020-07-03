import * as TS301 from "typescript-3-0-1";
import * as TS311 from "typescript-3-1-1";
import * as TS321 from "typescript-3-2-1";
import * as TS331 from "typescript-3-3-1";
import * as TS341 from "typescript-3-4-1";
import * as TS351 from "typescript-3-5-1";
import * as TS362 from "typescript-3-6-2";
import * as TS372 from "typescript-3-7-2";
import * as TS383 from "typescript-3-8-3";
import * as TS392 from "typescript-3-9-2";
import * as TSCurrent from "typescript";
import avaTest, {ExecutionContext, ImplementationResult} from "ava";
import {TS} from "../../src/clone-node/type/ts";

export type ExtendedImplementation<Context = unknown> = (t: ExecutionContext<Context>, ts: typeof TS, factory: TS.NodeFactory) => ImplementationResult;

function sharedTest<Context = unknown>(title: string, implementation: ExtendedImplementation<Context>, subMethod?: "skip" | "only"): void {
	for (const ts of [TS301, TS311, TS321, TS331, TS341, TS351, TS362, TS372, TS383, TS392, TSCurrent] as typeof TS[]) {
		const func = subMethod != null ? avaTest[subMethod] : avaTest;
		func(`${title} (TypeScript v${ts.version})`, ctx => implementation(ctx as ExecutionContext<Context>, ts, "factory" in ts ? ts.factory : ts));
	}
}

export default function test<Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void {
	return sharedTest(title, implementation);
}

test.only = <Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void => {
	return sharedTest(title, implementation, "only");
};

test.skip = <Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void => {
	return sharedTest(title, implementation, "skip");
};
