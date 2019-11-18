import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneShorthandPropertyAssignment(
	node: TS.ShorthandPropertyAssignment,
	options: CloneNodeInternalOptions<TS.ShorthandPropertyAssignment>
): TS.ShorthandPropertyAssignment {
	return options.typescript.createShorthandPropertyAssignment(
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("objectAssignmentInitializer", cloneNode(node.objectAssignmentInitializer, nextOptions(options)), payload(options))
	);
}
