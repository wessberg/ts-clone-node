import {TS} from "./ts.js";

export type ParentPropertyName = "parent" | "_parent";

export interface SetParentNodesOptions {
	propertyName: ParentPropertyName;
	deep: boolean;
	typescript: typeof TS;
}
