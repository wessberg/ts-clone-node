import {cloneIdentifier} from "./clone-identifier";
import {cloneTypeAliasDeclaration} from "./clone-type-alias-declaration";
import {CloneNodeHook, CloneNodeInternalOptions, CloneNodeOptions, CloneNodeVisitorOptions, NodeHookValue} from "./clone-node-options";
import {cloneToken} from "./clone-token";
import {cloneDecorator} from "./clone-decorator";
import {cloneTypeParameterDeclaration} from "./clone-type-parameter-declaration";
import {cloneQualifiedName} from "./clone-qualified-name";
import {cloneComputedPropertyName} from "./clone-computed-property-name";
import {cloneCallSignatureDeclaration} from "./clone-call-signature-declaration";
import {cloneConstructSignatureDeclaration} from "./clone-construct-signature-declaration";
import {cloneVariableDeclaration} from "./clone-variable-declaration";
import {cloneVariableDeclarationList} from "./clone-variable-declaration-list";
import {cloneVariableStatement} from "./clone-variable-statement";
import {cloneParameterDeclaration} from "./clone-parameter-declaration";
import {cloneBindingElement} from "./clone-binding-element";
import {clonePropertySignature} from "./clone-property-signature";
import {clonePropertyDeclaration} from "./clone-property-declaration";
import {clonePropertyAssignment} from "./clone-property-assignment";
import {cloneShorthandPropertyAssignment} from "./clone-shorthand-property-assignment";
import {cloneSpreadAssignment} from "./clone-spread-assignment";
import {cloneObjectBindingPattern} from "./clone-object-binding-pattern";
import {cloneArrayBindingPattern} from "./clone-array-binding-pattern";
import {cloneFunctionDeclaration} from "./clone-function-declaration";
import {cloneMethodSignature} from "./clone-method-signature";
import {cloneMethodDeclaration} from "./clone-method-declaration";
import {cloneConstructorDeclaration} from "./clone-constructor-declaration";
import {cloneSemicolonClassElement} from "./clone-semicolon-class-element";
import {cloneGetAccessorDeclaration} from "./clone-get-accessor-declaration";
import {cloneSetAccessorDeclaration} from "./clone-set-accessor-declaration";
import {cloneIndexSignatureDeclaration} from "./clone-index-signature-declaration";
import {isKeywordTypeNode} from "./util/is-keyword-type-node";
import {cloneKeywordTypeNode} from "./clone-keyword-type-node";
import {cloneImportTypeNode} from "./clone-import-type-node";
import {cloneThisTypeNode} from "./clone-this-type-node";
import {cloneFunctionTypeNode} from "./clone-function-type-node";
import {cloneConstructorTypeNode} from "./clone-constructor-type-node";
import {cloneTypeReferenceNode} from "./clone-type-reference-node";
import {cloneTypePredicateNode} from "./clone-type-predicate-node";
import {cloneSourceFile} from "./clone-source-file";
import {cloneTypeQueryNode} from "./clone-type-query-node";
import {cloneTypeLiteralNode} from "./clone-type-literal-node";
import {cloneArrayTypeNode} from "./clone-array-type-node";
import {cloneTupleTypeNode} from "./clone-tuple-type-node";
import {cloneOptionalTypeNode} from "./clone-optional-type-node";
import {isOptionalTypeNode} from "./util/is-optional-type-node";
import {cloneRestTypeNode} from "./clone-rest-type-node";
import {isRestTypeNode} from "./util/is-rest-type-node";
import {cloneUnionTypeNode} from "./clone-union-type-node";
import {cloneIntersectionTypeNode} from "./clone-intersection-type-node";
import {cloneLiteralTypeNode} from "./clone-literal-type-node";
import {cloneStringLiteral} from "./clone-string-literal";
import {isBooleanLiteral} from "./util/is-boolean-literal";
import {cloneBooleanLiteral} from "./clone-boolean-literal";
import {clonePrefixUnaryExpression} from "./clone-prefix-unary-expression";
import {cloneRegularExpressionLiteral} from "./clone-regular-expression-literal";
import {cloneNoSubstitutionTemplateLiteral} from "./clone-no-substitution-template-literal";
import {cloneNumericLiteral} from "./clone-numeric-literal";
import {cloneBigIntLiteral} from "./clone-big-int-literal";
import {cloneConditionalTypeNode} from "./clone-conditional-type-node";
import {cloneInferTypeNode} from "./clone-infer-type-node";
import {cloneBlock} from "./clone-block";
import {cloneThrowStatement} from "./clone-throw-statement";
import {cloneNewExpression} from "./clone-new-expression";
import {cloneCallExpression} from "./clone-call-expression";
import {cloneExpressionStatement} from "./clone-expression-statement";
import {cloneExpressionWithTypeArguments} from "./clone-expression-with-type-arguments";
import {clonePropertyAccessExpression} from "./clone-property-access-expression";
import {cloneElementAccessExpression} from "./clone-element-access-expression";
import {cloneArrayLiteralExpression} from "./clone-array-literal-expression";
import {cloneObjectLiteralExpression} from "./clone-object-literal-expression";
import {cloneTemplateExpression} from "./clone-template-expression";
import {cloneTemplateSpan} from "./clone-template-span";
import {cloneTemplateHead} from "./clone-template-head";
import {cloneTemplateMiddle} from "./clone-template-middle";
import {cloneTemplateTail} from "./clone-template-tail";
import {cloneConditionalExpression} from "./clone-conditional-expression";
import {cloneBinaryExpression} from "./clone-binary-expression";
import {cloneParenthesizedExpression} from "./clone-parenthesized-expression";
import {cloneParenthesizedTypeNode} from "./clone-parenthesized-type-node";
import {cloneArrowFunction} from "./clone-arrow-function";
import {cloneClassDeclaration} from "./clone-class-declaration";
import {cloneClassExpression} from "./clone-class-expression";
import {cloneEnumDeclaration} from "./clone-enum-declaration";
import {cloneInterfaceDeclaration} from "./clone-interface-declaration";
import {cloneEnumMember} from "./clone-enum-member";
import {cloneHeritageClause} from "./clone-heritage-clause";
import {cloneEmptyStatement} from "./clone-empty-statement";
import {cloneTypeOperatorNode} from "./clone-type-operator-node";
import {cloneIndexedAccessTypeNode} from "./clone-indexed-access-type-node";
import {cloneMappedTypeNode} from "./clone-mapped-type-node";
import {cloneOmittedExpression} from "./clone-omitted-expression";
import {clonePartiallyEmittedExpression} from "./clone-partially-omitted-expression";
import {isPartiallyEmittedExpression} from "./util/is-partially-emitted-expression";
import {clonePostfixUnaryExpression} from "./clone-postfix-unary-expression";
import {isNullLiteral} from "./util/is-null-literal";
import {cloneNullLiteral} from "./clone-null-literal";
import {isThisExpression} from "./util/is-this-expression";
import {cloneThisExpression} from "./clone-this-expression";
import {cloneReturnStatement} from "./clone-return-statement";
import {isSuperExpression} from "./util/is-super-expression";
import {cloneSuperExpression} from "./clone-super-expression";
import {cloneDeleteExpression} from "./clone-delete-expression";
import {cloneAsExpression} from "./clone-as-expression";
import {cloneTypeAssertion} from "./clone-type-assertion";
import {cloneAwaitExpression} from "./clone-await-expression";
import {cloneYieldExpression} from "./clone-yield-expression";
import {cloneForOfStatement} from "./clone-for-of-statement";
import {cloneForInStatement} from "./clone-for-in-statement";
import {cloneForStatement} from "./clone-for-statement";
import {cloneWhileStatement} from "./clone-while-statement";
import {cloneLabeledStatement} from "./clone-labeled-statement";
import {cloneBreakStatement} from "./clone-break-statement";
import {cloneContinueStatement} from "./clone-continue-statement";
import {cloneIfStatement} from "./clone-if-statement";
import {cloneDoStatement} from "./clone-do-statement";
import {cloneNonNullExpression} from "./clone-non-null-expression";
import {cloneTypeOfExpression} from "./clone-type-of-expression";
import {cloneVoidExpression} from "./clone-void-expression";
import {cloneFunctionExpression} from "./clone-function-expression";
import {cloneSpreadElement} from "./clone-spread-element";
import {cloneTaggedTemplateExpression} from "./clone-tagged-template-expression";
import {cloneMetaProperty} from "./clone-meta-property";
import {cloneJsxElement} from "./clone-jsx-element";
import {cloneJsxAttributes} from "./clone-jsx-attributes";
import {cloneJsxOpeningElement} from "./clone-jsx-opening-element";
import {cloneJsxSelfClosingElement} from "./clone-jsx-self-closing-element";
import {cloneJsxFragment} from "./clone-jsx-fragment";
import {cloneJsxOpeningFragment} from "./clone-jsx-opening-fragment";
import {cloneJsxClosingFragment} from "./clone-jsx-closing-fragment";
import {cloneJsxAttribute} from "./clone-jsx-attribute";
import {cloneJsxSpreadAttribute} from "./clone-jsx-spread-attribute";
import {cloneJsxClosingElement} from "./clone-jsx-closing-element";
import {cloneJsxExpression} from "./clone-jsx-expression";
import {cloneJsxText} from "./clone-jsx-text";
import {isNotEmittedStatement} from "./util/is-not-emitted-statement";
import {cloneNotEmittedStatement} from "./clone-not-emitted-statement";
import {isCommaListExpression} from "./util/is-comma-list-expression";
import {cloneCommaListExpression} from "./clone-comma-list-expression";
import {cloneDebuggerStatement} from "./clone-debugger-statement";
import {cloneWithStatement} from "./clone-with-statement";
import {cloneSwitchStatement} from "./clone-switch-statement";
import {cloneCaseBlock} from "./clone-case-block";
import {cloneCaseClause} from "./clone-case-clause";
import {cloneDefaultClause} from "./clone-default-clause";
import {cloneTryStatement} from "./clone-try-statement";
import {cloneCatchClause} from "./clone-catch-clause";
import {cloneModuleDeclaration} from "./clone-module-declaration";
import {cloneModuleBlock} from "./clone-module-block";
import {cloneImportDeclaration} from "./clone-import-declaration";
import {cloneImportEqualsDeclaration} from "./clone-import-equals-declaration";
import {cloneImportClause} from "./clone-import-clause";
import {cloneNamedImports} from "./clone-named-imports";
import {cloneNamespaceImport} from "./clone-namespace-import";
import {cloneImportSpecifier} from "./clone-import-specifier";
import {cloneExternalModuleReference} from "./clone-external-module-reference";
import {cloneNamespaceExportDeclaration} from "./clone-namespace-export-declaration";
import {cloneExportDeclaration} from "./clone-export-declaration";
import {cloneNamedExports} from "./clone-named-exports";
import {cloneExportSpecifier} from "./clone-export-specifier";
import {cloneExportAssignment} from "./clone-export-assignment";
import {TS} from "./type/ts";
import {toInternalOptions} from "./util/to-internal-options";
import {MetaNode} from "./type/meta-node";
import {isJsDocComment} from "./util/is-js-doc-comment";
import {cloneJsDoc} from "./clone-js-doc-comment";
import {isJsDocUnknownTag} from "./util/is-js-doc-unknown-tag";
import {isJsDocParameterTag} from "./util/is-js-doc-parameter-tag";
import {cloneJsDocParameterTag} from "./clone-js-doc-parameter-tag";
import {isJsDocReturnTag} from "./util/is-js-doc-return-tag";
import {cloneJsDocReturnTag} from "./clone-js-doc-return-tag";
import {isJsDocTypeExpression} from "./util/is-js-doc-type-expression";
import {cloneJsDocTypeExpression} from "./clone-js-doc-type-expression";
import {isJsDocEnumTag} from "./util/is-js-doc-enum-tag";
import {cloneJsDocEnumTag} from "./clone-js-doc-enum-tag";
import {isJsDocTypeTag} from "./util/is-js-doc-type-tag";
import {cloneJsDocTypeTag} from "./clone-js-doc-type-tag";
import {isJsDocAllType} from "./util/is-js-doc-all-type";
import {cloneJsDocAllType} from "./clone-js-doc-all-type";
import {isJsDocUnknownType} from "./util/is-js-doc-unknown-type";
import {cloneJsDocUnknownType} from "./clone-js-doc-unknown-type";
import {isJsDocNonNullableType} from "./util/is-js-doc-non-nullable-type";
import {cloneJsDocNonNullableType} from "./clone-js-doc-non-nullable-type";
import {isJsDocNullableType} from "./util/is-js-doc-nullable-type";
import {cloneJsDocNullableType} from "./clone-js-doc-nullable-type";
import {isJsDocOptionalType} from "./util/is-js-doc-optional-type";
import {cloneJsDocOptionalType} from "./clone-js-doc-optional-type";
import {isJsDocFunctionType} from "./util/is-js-doc-function-type";
import {cloneJsDocFunctionType} from "./clone-js-doc-function-type";
import {isJsDocVariadicType} from "./util/is-js-doc-variadic-type";
import {cloneJsDocVariadicType} from "./clone-js-doc-variadic-type";
import {isJsDocNamepathType} from "./util/is-js-doc-namepath-type";
import {cloneJsDocNamepathType} from "./clone-js-doc-namepath-type";
import {cloneJsDocUnknownTag} from "./clone-js-doc-unknown-tag";
import {isJsDocAugmentsTag} from "./util/is-js-doc-augments-tag";
import {cloneJsDocAugmentsTag} from "./clone-js-doc-augments-tag";
import {isJsDocAuthorTag} from "./util/is-js-doc-author-tag";
import {cloneJsDocAuthorTag} from "./clone-js-doc-author-tag";
import {isJsDocClassTag} from "./util/is-js-doc-class-tag";
import {cloneJsDocClassTag} from "./clone-js-doc-class-tag";
import {isJsDocThisTag} from "./util/is-js-doc-this-tag";
import {cloneJsDocThisTag} from "./clone-js-doc-this-tag";
import {isJsDocTemplateTag} from "./util/is-js-doc-template-tag";
import {cloneJsDocTemplateTag} from "./clone-js-doc-template-tag";
import {isJsDocTypedefTag} from "./util/is-js-doc-typedef-tag";
import {cloneJsDocTypedefTag} from "./clone-js-doc-typedef-tag";
import {isJsDocCallbackTag} from "./util/is-js-doc-callback-tag";
import {cloneJsDocCallbackTag} from "./clone-js-doc-callback-tag";
import {isJsDocSignature} from "./util/is-js-doc-signature";
import {cloneJsDocSignature} from "./clone-js-doc-signature";
import {isJsDocPropertyTag} from "./util/is-js-doc-property-tag";
import {cloneJsDocPropertyTag} from "./clone-js-doc-property-tag";
import {isJsDocTypeLiteral} from "./util/is-js-doc-type-literal";
import {cloneJsDocTypeLiteral} from "./clone-js-doc-type-literal";
import {setParents} from "./util/set-parents";
import {preserveAllComments, preserveComments} from "./util/preserve-comments";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNamespaceExport} from "./clone-namespace-export";
import {isJsDocReadonlyTag} from "./util/is-js-doc-readonly-tag";
import {cloneJsDocReadonlyTag} from "./clone-js-doc-readonly-tag";
import {isJsDocPrivateTag} from "./util/is-js-doc-private-tag";
import {cloneJsDocPrivateTag} from "./clone-js-doc-private-tag";
import {isJsDocProtectedTag} from "./util/is-js-doc-protected-tag";
import {cloneJsDocProtectedTag} from "./clone-js-doc-protected-tag";
import {isJsDocPublicTag} from "./util/is-js-doc-public-tag";
import {cloneJsDocPublicTag} from "./clone-js-doc-public-tag";
import {clonePrivateIdentifier} from "./clone-private-identifier";
import {SetParentNodesOptions} from "./type/set-parent-nodes-options";
import {toSetParentNodesOptions} from "./util/to-set-parent-nodes-options";
import {Mutable} from "./util/mutable";
import {isNamedTupleMember} from "./util/is-named-tuple-member";
import {cloneNamedTupleMember} from "./clone-named-tuple-member";

export function setParentNodes<T extends MetaNode>(node: T, options: Partial<SetParentNodesOptions>): T {
	return setParents(node, toSetParentNodesOptions(options));
}

export function preserveNode<T extends MetaNode>(node: T, oldNode: T, options?: Partial<CloneNodeOptions<T>>): T;
export function preserveNode<T extends MetaNode>(node: undefined, oldNode: undefined, options?: Partial<CloneNodeOptions<T>>): undefined;
export function preserveNode<T extends MetaNode>(node: T | undefined, oldNode: T | undefined, options?: Partial<CloneNodeOptions<T>>): T | undefined;
export function preserveNode<T extends MetaNode>(node: T | undefined, oldNode: T | undefined, options: Partial<CloneNodeOptions<T>> = {}): T | undefined {
	const internalOptions = toInternalOptions(options);
	executePreserveNode(node, oldNode, internalOptions);

	if (node != null) {
		const parentValue = node._parent ?? node.parent ?? oldNode?._parent ?? oldNode?.parent;
		if (internalOptions.setParents) {
			(node as Mutable<T>).parent = parentValue;
		} else {
			node._parent = parentValue;
		}
	}

	return node;
}

export function cloneNode<T extends MetaNode>(node: T, options?: Partial<CloneNodeOptions<T>>): T;
export function cloneNode<T extends MetaNode>(node: undefined, options?: Partial<CloneNodeOptions<T>>): undefined;
export function cloneNode<T extends MetaNode>(node: T | undefined, options?: Partial<CloneNodeOptions<T>>): T | undefined;
export function cloneNode<T extends MetaNode>(node: T | undefined, options: Partial<CloneNodeOptions<T>> = {}): T | undefined {
	if (node === undefined) return undefined;
	const internalOptions = toInternalOptions(options);
	const clone = nextNode(node, internalOptions);
	executePreserveNode(clone, node, internalOptions);

	if (clone != null) {
		const parentValue = node._parent ?? node.parent ?? clone._parent ?? clone.parent;
		if (internalOptions.setParents) {
			(clone as Mutable<T>).parent = parentValue;
		} else {
			clone._parent = parentValue;
		}
	}

	return clone;
}

function nextNode<Next extends MetaNode>(node: Next | undefined, options: CloneNodeInternalOptions): Next | undefined {
	if (node === undefined) return undefined;

	const hook = (options.hook(node, payload(options)) ?? {}) as CloneNodeHook<Next>;
	const visitorOptions: CloneNodeVisitorOptions<Next> = {
		...options,
		nextNode: <T extends MetaNode>(actualNode: T) => nextNode(actualNode, nextOptions(options)),
		nextNodes: (<T extends MetaNode>(actualNodes: readonly T[] | T[] | undefined) => nextNodes(actualNodes, nextOptions(options))) as CloneNodeVisitorOptions["nextNodes"],
		hook: (key, newValue, oldValue) => {
			const callback = hook[key];
			if (callback != null) {
				return callback(newValue, oldValue);
			} else {
				return newValue;
			}
		}
	};

	const clone = executeCloneNode(node, visitorOptions) as Next | undefined;
	if (clone === undefined) return undefined;

	if (node.jsDoc != null) {
		clone.jsDoc = visitorOptions.hook("jsDoc", visitorOptions.nextNodes(node.jsDoc) as NodeHookValue<Next, "jsDoc">, node.jsDoc as NodeHookValue<Next, "jsDoc">) as TS.JSDoc[];
	}

	setOriginalNodes(clone, node, options);
	preserveSymbols(clone, node, options);

	return options.finalize == null ? clone : (options.finalize(clone, node, payload(options)) as Next | undefined) ?? clone;
}

function executePreserveNode<T extends MetaNode>(node: T | undefined, oldNode: T | undefined, options: CloneNodeInternalOptions<T>): void {
	if (node == null || oldNode == null || node === oldNode) return undefined;
	setParents(node, toSetParentNodesOptions({...options, propertyName: options.setParents ? "parent" : "_parent"}));
	// Prioritize leading over trailing comments
	preserveAllComments(node, options);
	preserveComments(node, oldNode, options);
	setOriginalNodes(node, oldNode, options);
	preserveSymbols(node, oldNode, options);
}

function setOriginalNodes<T extends MetaNode>(newNode: T, oldNode: MetaNode, options: CloneNodeInternalOptions): void {
	if (newNode === oldNode) return;
	if (options.setOriginalNodes) {
		options.typescript.setOriginalNode(newNode, oldNode);
		newNode._original = newNode.original;
	} else {
		newNode._original = oldNode;
	}
}

function preserveSymbols<T extends MetaNode>(node: T, otherNode: MetaNode, options: CloneNodeInternalOptions): T {
	if (node === otherNode) return node;
	const otherSymbol = otherNode._symbol ?? otherNode.symbol;
	if (otherSymbol != null) {
		node._symbol = otherSymbol;
	}
	if (options.preserveSymbols) {
		node.symbol = node._symbol;
	}
	return node;
}

function nextNodes<Next extends MetaNode>(nodes: readonly Next[] | Next[] | undefined, options: CloneNodeInternalOptions): Next[] | undefined {
	if (nodes === undefined) return undefined;

	return (nodes as Next[]).map(node => nextNode(node, options)) as Next[] | undefined;
}

function executeCloneNode<T extends MetaNode>(node: T | undefined, options: CloneNodeVisitorOptions<T>): MetaNode | undefined {
	if (node == null) return undefined;

	// Handle the Node
	if (options.typescript.isSourceFile(node)) {
		return cloneSourceFile(node, (options as unknown) as CloneNodeVisitorOptions<TS.SourceFile>);
	}

	// Handle the Node
	else if (options.typescript.isIdentifier(node)) {
		return cloneIdentifier(node, (options as unknown) as CloneNodeVisitorOptions<TS.Identifier>);
	}

	// Handle the Node
	// Note: isPrivateIdentifier may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isPrivateIdentifier?.(node)) {
		return clonePrivateIdentifier(node, (options as unknown) as CloneNodeVisitorOptions<TS.PrivateIdentifier>);
	}

	// Handle the Node
	else if (options.typescript.isTypeAliasDeclaration(node)) {
		return cloneTypeAliasDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeAliasDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isTypeParameterDeclaration(node)) {
		return cloneTypeParameterDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeParameterDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isDecorator(node)) {
		return cloneDecorator(node, (options as unknown) as CloneNodeVisitorOptions<TS.Decorator>);
	}

	// Handle the Node
	else if (options.typescript.isQualifiedName(node)) {
		return cloneQualifiedName(node, (options as unknown) as CloneNodeVisitorOptions<TS.QualifiedName>);
	}

	// Handle the Node
	else if (options.typescript.isComputedPropertyName(node)) {
		return cloneComputedPropertyName(node, (options as unknown) as CloneNodeVisitorOptions<TS.ComputedPropertyName>);
	}

	// Handle the Node
	else if (options.typescript.isCallSignatureDeclaration(node)) {
		return cloneCallSignatureDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.CallSignatureDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isConstructSignatureDeclaration(node)) {
		return cloneConstructSignatureDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ConstructSignatureDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isVariableDeclaration(node)) {
		return cloneVariableDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.VariableDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isVariableDeclarationList(node)) {
		return cloneVariableDeclarationList(node, (options as unknown) as CloneNodeVisitorOptions<TS.VariableDeclarationList>);
	}

	// Handle the Node
	else if (options.typescript.isVariableStatement(node)) {
		return cloneVariableStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.VariableStatement>);
	}

	// Handle the Node
	else if (options.typescript.isParameter(node)) {
		return cloneParameterDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ParameterDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isBindingElement(node)) {
		return cloneBindingElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.BindingElement>);
	}

	// Handle the Node
	else if (options.typescript.isPropertySignature(node)) {
		return clonePropertySignature(node, (options as unknown) as CloneNodeVisitorOptions<TS.PropertySignature>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyDeclaration(node)) {
		return clonePropertyDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.PropertyDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyAssignment(node)) {
		return clonePropertyAssignment(node, (options as unknown) as CloneNodeVisitorOptions<TS.PropertyAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isShorthandPropertyAssignment(node)) {
		return cloneShorthandPropertyAssignment(node, (options as unknown) as CloneNodeVisitorOptions<TS.ShorthandPropertyAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isSpreadAssignment(node)) {
		return cloneSpreadAssignment(node, (options as unknown) as CloneNodeVisitorOptions<TS.SpreadAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isObjectBindingPattern(node)) {
		return cloneObjectBindingPattern(node, (options as unknown) as CloneNodeVisitorOptions<TS.ObjectBindingPattern>);
	}

	// Handle the Node
	else if (options.typescript.isArrayBindingPattern(node)) {
		return cloneArrayBindingPattern(node, (options as unknown) as CloneNodeVisitorOptions<TS.ArrayBindingPattern>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionDeclaration(node)) {
		return cloneFunctionDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.FunctionDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isMethodSignature(node)) {
		return cloneMethodSignature(node, (options as unknown) as CloneNodeVisitorOptions<TS.MethodSignature>);
	}

	// Handle the Node
	else if (options.typescript.isMethodDeclaration(node)) {
		return cloneMethodDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.MethodDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isConstructorDeclaration(node)) {
		return cloneConstructorDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ConstructorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isSemicolonClassElement(node)) {
		return cloneSemicolonClassElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.SemicolonClassElement>);
	}

	// Handle the Node
	else if (options.typescript.isGetAccessorDeclaration(node)) {
		return cloneGetAccessorDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.GetAccessorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isSetAccessorDeclaration(node)) {
		return cloneSetAccessorDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.SetAccessorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isIndexSignatureDeclaration(node)) {
		return cloneIndexSignatureDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>);
	}

	// Handle the Node
	else if (isKeywordTypeNode(node, options.typescript)) {
		return cloneKeywordTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.KeywordTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isImportTypeNode(node)) {
		return cloneImportTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ImportTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isThisTypeNode(node)) {
		return cloneThisTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ThisTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionTypeNode(node)) {
		return cloneFunctionTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.FunctionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isConstructorTypeNode(node)) {
		return cloneConstructorTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ConstructorTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeReferenceNode(node)) {
		return cloneTypeReferenceNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeReferenceNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypePredicateNode(node)) {
		return cloneTypePredicateNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypePredicateNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeQueryNode(node)) {
		return cloneTypeQueryNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeQueryNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeLiteralNode(node)) {
		return cloneTypeLiteralNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeLiteralNode>);
	}

	// Handle the Node
	else if (options.typescript.isArrayTypeNode(node)) {
		return cloneArrayTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ArrayTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isTupleTypeNode(node)) {
		return cloneTupleTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TupleTypeNode>);
	}

	// Handle the Node
	else if (isOptionalTypeNode(node, options.typescript)) {
		return cloneOptionalTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.OptionalTypeNode>);
	}

	// Handle the Node
	else if (isRestTypeNode(node, options.typescript)) {
		return cloneRestTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.RestTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isUnionTypeNode(node)) {
		return cloneUnionTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.UnionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isIntersectionTypeNode(node)) {
		return cloneIntersectionTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.IntersectionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isConditionalTypeNode(node)) {
		return cloneConditionalTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ConditionalTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isInferTypeNode(node)) {
		return cloneInferTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.InferTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isLiteralTypeNode(node)) {
		return cloneLiteralTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.LiteralTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isStringLiteral(node)) {
		return cloneStringLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.StringLiteral>);
	}

	// Handle the Node
	else if (isBooleanLiteral(node, options.typescript)) {
		return cloneBooleanLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.BooleanLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isRegularExpressionLiteral(node)) {
		return cloneRegularExpressionLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.RegularExpressionLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isNoSubstitutionTemplateLiteral(node)) {
		return cloneNoSubstitutionTemplateLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.NoSubstitutionTemplateLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isNumericLiteral(node)) {
		return cloneNumericLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.NumericLiteral>);
	}

	// Handle the Node.
	// Note: isBigIntLiteral may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isBigIntLiteral?.(node)) {
		return cloneBigIntLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.BigIntLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isArrayLiteralExpression(node)) {
		return cloneArrayLiteralExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ArrayLiteralExpression>);
	}

	// Handle the Node
	else if (options.typescript.isObjectLiteralExpression(node)) {
		return cloneObjectLiteralExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ObjectLiteralExpression>);
	}

	// Handle the Node
	else if (options.typescript.isPrefixUnaryExpression(node)) {
		return clonePrefixUnaryExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.PrefixUnaryExpression>);
	}

	// Handle the Node
	else if (options.typescript.isBlock(node)) {
		return cloneBlock(node, (options as unknown) as CloneNodeVisitorOptions<TS.Block>);
	}

	// Handle the Node
	else if (options.typescript.isThrowStatement(node)) {
		return cloneThrowStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ThrowStatement>);
	}

	// Handle the Node
	else if (options.typescript.isReturnStatement(node)) {
		return cloneReturnStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ReturnStatement>);
	}

	// Handle the Node
	else if (options.typescript.isNewExpression(node)) {
		return cloneNewExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.NewExpression>);
	}

	// Handle the Node
	else if (options.typescript.isCallExpression(node)) {
		return cloneCallExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.CallExpression>);
	}

	// Handle the Node
	else if (options.typescript.isExpressionStatement(node)) {
		return cloneExpressionStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExpressionStatement>);
	}

	// Handle the Node
	else if (options.typescript.isExpressionWithTypeArguments(node)) {
		return cloneExpressionWithTypeArguments(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyAccessExpression(node)) {
		return clonePropertyAccessExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.PropertyAccessExpression>);
	}

	// Handle the Node
	else if (options.typescript.isElementAccessExpression(node)) {
		return cloneElementAccessExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ElementAccessExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateExpression(node)) {
		return cloneTemplateExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.TemplateExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateSpan(node)) {
		return cloneTemplateSpan(node, (options as unknown) as CloneNodeVisitorOptions<TS.TemplateSpan>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateHead(node)) {
		return cloneTemplateHead(node, (options as unknown) as CloneNodeVisitorOptions<TS.TemplateHead>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateMiddle(node)) {
		return cloneTemplateMiddle(node, (options as unknown) as CloneNodeVisitorOptions<TS.TemplateMiddle>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateTail(node)) {
		return cloneTemplateTail(node, (options as unknown) as CloneNodeVisitorOptions<TS.TemplateTail>);
	}

	// Handle the Node
	else if (options.typescript.isConditionalExpression(node)) {
		return cloneConditionalExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ConditionalExpression>);
	}

	// Handle the Node
	else if (options.typescript.isBinaryExpression(node)) {
		return cloneBinaryExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.BinaryExpression>);
	}

	// Handle the Node
	else if (options.typescript.isParenthesizedExpression(node)) {
		return cloneParenthesizedExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ParenthesizedExpression>);
	}

	// Handle the Node
	else if (options.typescript.isParenthesizedTypeNode(node)) {
		return cloneParenthesizedTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.ParenthesizedTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isArrowFunction(node)) {
		return cloneArrowFunction(node, (options as unknown) as CloneNodeVisitorOptions<TS.ArrowFunction>);
	}

	// Handle the Node
	else if (options.typescript.isClassDeclaration(node)) {
		return cloneClassDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ClassDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isClassExpression(node)) {
		return cloneClassExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ClassExpression>);
	}

	// Handle the Node
	else if (options.typescript.isEnumDeclaration(node)) {
		return cloneEnumDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.EnumDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isEnumMember(node)) {
		return cloneEnumMember(node, (options as unknown) as CloneNodeVisitorOptions<TS.EnumMember>);
	}

	// Handle the Node
	else if (options.typescript.isInterfaceDeclaration(node)) {
		return cloneInterfaceDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.InterfaceDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isHeritageClause(node)) {
		return cloneHeritageClause(node, (options as unknown) as CloneNodeVisitorOptions<TS.HeritageClause>);
	}

	// Handle the Node
	else if (options.typescript.isEmptyStatement(node)) {
		return cloneEmptyStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.EmptyStatement>);
	}

	// Handle the Node
	else if (options.typescript.isAsExpression(node)) {
		return cloneAsExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.AsExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeAssertion(node)) {
		return cloneTypeAssertion(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeAssertion>);
	}

	// Handle the Node
	else if (options.typescript.isAwaitExpression(node)) {
		return cloneAwaitExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.AwaitExpression>);
	}

	// Handle the Node
	else if (options.typescript.isYieldExpression(node)) {
		return cloneYieldExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.YieldExpression>);
	}

	// Handle the Node
	else if (options.typescript.isForOfStatement(node)) {
		return cloneForOfStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ForOfStatement>);
	}

	// Handle the Node
	else if (options.typescript.isForInStatement(node)) {
		return cloneForInStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ForInStatement>);
	}

	// Handle the Node
	else if (options.typescript.isForStatement(node)) {
		return cloneForStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ForStatement>);
	}

	// Handle the Node
	else if (options.typescript.isWhileStatement(node)) {
		return cloneWhileStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.WhileStatement>);
	}

	// Handle the Node
	else if (options.typescript.isLabeledStatement(node)) {
		return cloneLabeledStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.LabeledStatement>);
	}

	// Handle the Node
	else if (options.typescript.isBreakStatement(node)) {
		return cloneBreakStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.BreakStatement>);
	}

	// Handle the Node
	else if (options.typescript.isContinueStatement(node)) {
		return cloneContinueStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.ContinueStatement>);
	}

	// Handle the Node
	else if (options.typescript.isIfStatement(node)) {
		return cloneIfStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.IfStatement>);
	}

	// Handle the Node
	else if (options.typescript.isDoStatement(node)) {
		return cloneDoStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.DoStatement>);
	}

	// Handle the Node
	else if (options.typescript.isNonNullExpression(node)) {
		return cloneNonNullExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.NonNullExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeOperatorNode(node)) {
		return cloneTypeOperatorNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeOperatorNode>);
	}

	// Handle the Node
	else if (options.typescript.isIndexedAccessTypeNode(node)) {
		return cloneIndexedAccessTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>);
	}

	// Handle the Node
	// Note: isMappedTypeNode may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isMappedTypeNode?.(node)) {
		return cloneMappedTypeNode(node, (options as unknown) as CloneNodeVisitorOptions<TS.MappedTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isOmittedExpression(node)) {
		return cloneOmittedExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.OmittedExpression>);
	}

	// Handle the Node
	else if (isPartiallyEmittedExpression(node, options.typescript)) {
		return clonePartiallyEmittedExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.PartiallyEmittedExpression>);
	}

	// Handle the Node
	else if (options.typescript.isPostfixUnaryExpression(node)) {
		return clonePostfixUnaryExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.PostfixUnaryExpression>);
	}

	// Handle the Node
	else if (isNullLiteral(node, options.typescript)) {
		return cloneNullLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.NullLiteral>);
	}

	// Handle the Node
	else if (isThisExpression(node, options.typescript)) {
		return cloneThisExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.ThisExpression>);
	}

	// Handle the Node
	else if (isSuperExpression(node, options.typescript)) {
		return cloneSuperExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.SuperExpression>);
	}

	// Handle the Node
	else if (options.typescript.isDeleteExpression(node)) {
		return cloneDeleteExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.DeleteExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeOfExpression(node)) {
		return cloneTypeOfExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.TypeOfExpression>);
	}

	// Handle the Node
	else if (options.typescript.isVoidExpression(node)) {
		return cloneVoidExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.VoidExpression>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionExpression(node)) {
		return cloneFunctionExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.FunctionExpression>);
	}

	// Handle the Node
	else if (options.typescript.isSpreadElement(node)) {
		return cloneSpreadElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.SpreadElement>);
	}

	// Handle the Node
	else if (options.typescript.isTaggedTemplateExpression(node)) {
		return cloneTaggedTemplateExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.TaggedTemplateExpression>);
	}

	// Handle the Node
	else if (options.typescript.isMetaProperty(node)) {
		return cloneMetaProperty(node, (options as unknown) as CloneNodeVisitorOptions<TS.MetaProperty>);
	}

	// Handle the Node
	else if (options.typescript.isJsxElement(node)) {
		return cloneJsxElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxAttributes(node)) {
		return cloneJsxAttributes(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxAttributes>);
	}

	// Handle the Node
	else if (options.typescript.isJsxOpeningElement(node)) {
		return cloneJsxOpeningElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxOpeningElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxSelfClosingElement(node)) {
		return cloneJsxSelfClosingElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxSelfClosingElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxFragment(node)) {
		return cloneJsxFragment(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxOpeningFragment(node)) {
		return cloneJsxOpeningFragment(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxOpeningFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxClosingFragment(node)) {
		return cloneJsxClosingFragment(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxClosingFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxAttribute(node)) {
		return cloneJsxAttribute(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxAttribute>);
	}

	// Handle the Node
	else if (options.typescript.isJsxSpreadAttribute(node)) {
		return cloneJsxSpreadAttribute(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxSpreadAttribute>);
	}

	// Handle the Node
	else if (options.typescript.isJsxClosingElement(node)) {
		return cloneJsxClosingElement(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxClosingElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxExpression(node)) {
		return cloneJsxExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxExpression>);
	}

	// Handle the Node
	else if (options.typescript.isJsxText(node)) {
		return cloneJsxText(node, (options as unknown) as CloneNodeVisitorOptions<TS.JsxText>);
	}

	// Handle the Node
	else if (isNotEmittedStatement(node, options.typescript)) {
		return cloneNotEmittedStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.NotEmittedStatement>);
	}

	// Handle the Node
	else if (isCommaListExpression(node, options.typescript)) {
		return cloneCommaListExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.CommaListExpression>);
	}

	// Handle the Node
	else if (options.typescript.isDebuggerStatement(node)) {
		return cloneDebuggerStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.DebuggerStatement>);
	}

	// Handle the Node
	else if (options.typescript.isWithStatement(node)) {
		return cloneWithStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.WithStatement>);
	}

	// Handle the Node
	else if (options.typescript.isSwitchStatement(node)) {
		return cloneSwitchStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.SwitchStatement>);
	}

	// Handle the Node
	else if (options.typescript.isCaseBlock(node)) {
		return cloneCaseBlock(node, (options as unknown) as CloneNodeVisitorOptions<TS.CaseBlock>);
	}

	// Handle the Node
	else if (options.typescript.isCaseClause(node)) {
		return cloneCaseClause(node, (options as unknown) as CloneNodeVisitorOptions<TS.CaseClause>);
	}

	// Handle the Node
	else if (options.typescript.isDefaultClause(node)) {
		return cloneDefaultClause(node, (options as unknown) as CloneNodeVisitorOptions<TS.DefaultClause>);
	}

	// Handle the Node
	else if (options.typescript.isTryStatement(node)) {
		return cloneTryStatement(node, (options as unknown) as CloneNodeVisitorOptions<TS.TryStatement>);
	}

	// Handle the Node
	else if (options.typescript.isCatchClause(node)) {
		return cloneCatchClause(node, (options as unknown) as CloneNodeVisitorOptions<TS.CatchClause>);
	}

	// Handle the Node
	else if (options.typescript.isModuleDeclaration(node)) {
		return cloneModuleDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ModuleDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isModuleBlock(node)) {
		return cloneModuleBlock(node, (options as unknown) as CloneNodeVisitorOptions<TS.ModuleBlock>);
	}

	// Handle the Node
	else if (options.typescript.isImportEqualsDeclaration(node)) {
		return cloneImportEqualsDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ImportEqualsDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isExternalModuleReference(node)) {
		return cloneExternalModuleReference(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExternalModuleReference>);
	}

	// Handle the Node
	else if (options.typescript.isImportDeclaration(node)) {
		return cloneImportDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ImportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isImportClause(node)) {
		return cloneImportClause(node, (options as unknown) as CloneNodeVisitorOptions<TS.ImportClause>);
	}

	// Handle the Node
	else if (options.typescript.isNamedImports(node)) {
		return cloneNamedImports(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamedImports>);
	}

	// Handle the Node
	else if (options.typescript.isNamespaceImport(node)) {
		return cloneNamespaceImport(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamespaceImport>);
	}

	// Handle the Node
	else if (options.typescript.isImportSpecifier(node)) {
		return cloneImportSpecifier(node, (options as unknown) as CloneNodeVisitorOptions<TS.ImportSpecifier>);
	}

	// Handle the Node
	else if (options.typescript.isNamespaceExportDeclaration(node)) {
		return cloneNamespaceExportDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamespaceExportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isExportDeclaration(node)) {
		return cloneExportDeclaration(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isNamedExports(node)) {
		return cloneNamedExports(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamedExports>);
	}

	// Handle the Node
	// Note: isNamespaceExport may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isNamespaceExport?.(node)) {
		return cloneNamespaceExport(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamespaceExport>);
	}

	// Handle the Node
	// Note: isNamedTupleMember may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (isNamedTupleMember?.(node, options.typescript)) {
		return cloneNamedTupleMember(node, (options as unknown) as CloneNodeVisitorOptions<TS.NamedTupleMember>);
	}

	// Handle the Node
	else if (options.typescript.isExportSpecifier(node)) {
		return cloneExportSpecifier(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExportSpecifier>);
	}

	// Handle the Node
	else if (options.typescript.isExportAssignment(node)) {
		return cloneExportAssignment(node, (options as unknown) as CloneNodeVisitorOptions<TS.ExportAssignment>);
	}

	// Handle the Node
	else if (isJsDocComment(node, options.typescript)) {
		return cloneJsDoc(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDoc>);
	}

	// Handle the Node
	else if (isJsDocParameterTag(node, options.typescript)) {
		return cloneJsDocParameterTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocParameterTag>);
	}

	// Handle the Node
	else if (isJsDocReturnTag(node, options.typescript)) {
		return cloneJsDocReturnTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocReturnTag>);
	}

	// Handle the Node
	else if (isJsDocTypeExpression(node, options.typescript)) {
		return cloneJsDocTypeExpression(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocTypeExpression>);
	}

	// Handle the Node
	else if (isJsDocEnumTag(node, options.typescript)) {
		return cloneJsDocEnumTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocEnumTag>);
	}

	// Handle the Node
	else if (isJsDocTypeTag(node, options.typescript)) {
		return cloneJsDocTypeTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocTypeTag>);
	}

	// Handle the Node
	else if (isJsDocAllType(node, options.typescript)) {
		return cloneJsDocAllType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocAllType>);
	}

	// Handle the Node
	else if (isJsDocUnknownType(node, options.typescript)) {
		return cloneJsDocUnknownType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocUnknownType>);
	}

	// Handle the Node
	else if (isJsDocNonNullableType(node, options.typescript)) {
		return cloneJsDocNonNullableType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocNonNullableType>);
	}

	// Handle the Node
	else if (isJsDocNullableType(node, options.typescript)) {
		return cloneJsDocNullableType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocNullableType>);
	}

	// Handle the Node
	else if (isJsDocOptionalType(node, options.typescript)) {
		return cloneJsDocOptionalType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocOptionalType>);
	}

	// Handle the Node
	else if (isJsDocFunctionType(node, options.typescript)) {
		return cloneJsDocFunctionType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocFunctionType>);
	}

	// Handle the Node
	else if (isJsDocVariadicType(node, options.typescript)) {
		return cloneJsDocVariadicType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocVariadicType>);
	}

	// Handle the Node
	else if (isJsDocNamepathType(node, options.typescript)) {
		return cloneJsDocNamepathType(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocNamepathType>);
	}

	// Handle the Node
	else if (isJsDocUnknownTag(node, options.typescript)) {
		return cloneJsDocUnknownTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocUnknownTag>);
	}

	// Handle the Node
	else if (isJsDocAugmentsTag(node, options.typescript)) {
		return cloneJsDocAugmentsTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocAugmentsTag>);
	}

	// Handle the Node
	else if (isJsDocAuthorTag(node, options.typescript)) {
		return cloneJsDocAuthorTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocAuthorTag>);
	}

	// Handle the Node
	else if (isJsDocClassTag(node, options.typescript)) {
		return cloneJsDocClassTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocClassTag>);
	}

	// Handle the Node
	else if (isJsDocThisTag(node, options.typescript)) {
		return cloneJsDocThisTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocThisTag>);
	}

	// Handle the Node
	else if (isJsDocTemplateTag(node, options.typescript)) {
		return cloneJsDocTemplateTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocTemplateTag>);
	}

	// Handle the Node
	else if (isJsDocTypedefTag(node, options.typescript)) {
		return cloneJsDocTypedefTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocTypedefTag>);
	}

	// Handle the Node
	else if (isJsDocCallbackTag(node, options.typescript)) {
		return cloneJsDocCallbackTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocCallbackTag>);
	}

	// Handle the Node
	else if (isJsDocSignature(node, options.typescript)) {
		return cloneJsDocSignature(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocSignature>);
	}

	// Handle the Node
	else if (isJsDocPropertyTag(node, options.typescript)) {
		return cloneJsDocPropertyTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocPropertyTag>);
	}

	// Handle the Node
	else if (isJsDocTypeLiteral(node, options.typescript)) {
		return cloneJsDocTypeLiteral(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocTypeLiteral>);
	}

	// Handle the Node
	else if (isJsDocReadonlyTag(node, options.typescript)) {
		return cloneJsDocReadonlyTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocReadonlyTag>);
	}

	// Handle the Node
	else if (isJsDocPrivateTag(node, options.typescript)) {
		return cloneJsDocPrivateTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocPrivateTag>);
	}

	// Handle the Node
	else if (isJsDocProtectedTag(node, options.typescript)) {
		return cloneJsDocProtectedTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocProtectedTag>);
	}

	// Handle the Node
	else if (isJsDocPublicTag(node, options.typescript)) {
		return cloneJsDocPublicTag(node, (options as unknown) as CloneNodeVisitorOptions<TS.JSDocPublicTag>);
	}

	// Handle the Node
	else if (options.typescript.isToken(node)) {
		return cloneToken(node, (options as unknown) as CloneNodeVisitorOptions<TS.Token<TS.SyntaxKind>>);
	}

	throw new TypeError(`Could not handle Node of kind: '${TS.SyntaxKind[node.kind]}'`);
}
