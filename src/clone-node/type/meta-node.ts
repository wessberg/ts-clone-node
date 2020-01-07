import {TS} from "./ts";

export type MetaNode = TS.Node & {
	jsDoc?: TS.JSDoc[];
};
