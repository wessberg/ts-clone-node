import {TS} from "./ts";

export type ParentPropertyName = "parent" | "_parent";

export interface SetParentNodesOptions {
	propertyName: ParentPropertyName;
	deep: boolean;
	typescript: typeof TS;
}
