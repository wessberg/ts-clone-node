import {cloneIdentifier} from "./clone-identifier.js";
import {cloneTypeAliasDeclaration} from "./clone-type-alias-declaration.js";
import {CloneNodeHook, CloneNodeInternalOptions, CloneNodeOptions, CloneNodeVisitorOptions, NodeHookValue} from "./clone-node-options.js";
import {cloneToken} from "./clone-token.js";
import {cloneDecorator} from "./clone-decorator.js";
import {cloneTypeParameterDeclaration} from "./clone-type-parameter-declaration.js";
import {cloneQualifiedName} from "./clone-qualified-name.js";
import {cloneComputedPropertyName} from "./clone-computed-property-name.js";
import {cloneCallSignatureDeclaration} from "./clone-call-signature-declaration.js";
import {cloneConstructSignatureDeclaration} from "./clone-construct-signature-declaration.js";
import {cloneVariableDeclaration} from "./clone-variable-declaration.js";
import {cloneVariableDeclarationList} from "./clone-variable-declaration-list.js";
import {cloneVariableStatement} from "./clone-variable-statement.js";
import {cloneParameterDeclaration} from "./clone-parameter-declaration.js";
import {cloneBindingElement} from "./clone-binding-element.js";
import {clonePropertySignature} from "./clone-property-signature.js";
import {clonePropertyDeclaration} from "./clone-property-declaration.js";
import {clonePropertyAssignment} from "./clone-property-assignment.js";
import {cloneShorthandPropertyAssignment} from "./clone-shorthand-property-assignment.js";
import {cloneSpreadAssignment} from "./clone-spread-assignment.js";
import {cloneObjectBindingPattern} from "./clone-object-binding-pattern.js";
import {cloneArrayBindingPattern} from "./clone-array-binding-pattern.js";
import {cloneFunctionDeclaration} from "./clone-function-declaration.js";
import {cloneMethodSignature} from "./clone-method-signature.js";
import {cloneMethodDeclaration} from "./clone-method-declaration.js";
import {cloneConstructorDeclaration} from "./clone-constructor-declaration.js";
import {cloneSemicolonClassElement} from "./clone-semicolon-class-element.js";
import {cloneGetAccessorDeclaration} from "./clone-get-accessor-declaration.js";
import {cloneSetAccessorDeclaration} from "./clone-set-accessor-declaration.js";
import {cloneIndexSignatureDeclaration} from "./clone-index-signature-declaration.js";
import {isKeywordTypeNode} from "./util/is-keyword-type-node.js";
import {cloneKeywordTypeNode} from "./clone-keyword-type-node.js";
import {cloneImportTypeNode} from "./clone-import-type-node.js";
import {cloneThisTypeNode} from "./clone-this-type-node.js";
import {cloneFunctionTypeNode} from "./clone-function-type-node.js";
import {cloneConstructorTypeNode} from "./clone-constructor-type-node.js";
import {cloneTypeReferenceNode} from "./clone-type-reference-node.js";
import {cloneTypePredicateNode} from "./clone-type-predicate-node.js";
import {cloneSourceFile} from "./clone-source-file.js";
import {cloneTypeQueryNode} from "./clone-type-query-node.js";
import {cloneTypeLiteralNode} from "./clone-type-literal-node.js";
import {cloneArrayTypeNode} from "./clone-array-type-node.js";
import {cloneTupleTypeNode} from "./clone-tuple-type-node.js";
import {cloneOptionalTypeNode} from "./clone-optional-type-node.js";
import {isOptionalTypeNode} from "./util/is-optional-type-node.js";
import {cloneRestTypeNode} from "./clone-rest-type-node.js";
import {isRestTypeNode} from "./util/is-rest-type-node.js";
import {cloneUnionTypeNode} from "./clone-union-type-node.js";
import {cloneIntersectionTypeNode} from "./clone-intersection-type-node.js";
import {cloneLiteralTypeNode} from "./clone-literal-type-node.js";
import {cloneStringLiteral} from "./clone-string-literal.js";
import {isBooleanLiteral} from "./util/is-boolean-literal.js";
import {cloneBooleanLiteral} from "./clone-boolean-literal.js";
import {clonePrefixUnaryExpression} from "./clone-prefix-unary-expression.js";
import {cloneRegularExpressionLiteral} from "./clone-regular-expression-literal.js";
import {cloneNoSubstitutionTemplateLiteral} from "./clone-no-substitution-template-literal.js";
import {cloneNumericLiteral} from "./clone-numeric-literal.js";
import {cloneBigIntLiteral} from "./clone-big-int-literal.js";
import {cloneConditionalTypeNode} from "./clone-conditional-type-node.js";
import {cloneInferTypeNode} from "./clone-infer-type-node.js";
import {cloneBlock} from "./clone-block.js";
import {cloneThrowStatement} from "./clone-throw-statement.js";
import {cloneNewExpression} from "./clone-new-expression.js";
import {cloneCallExpression} from "./clone-call-expression.js";
import {cloneExpressionStatement} from "./clone-expression-statement.js";
import {cloneExpressionWithTypeArguments} from "./clone-expression-with-type-arguments.js";
import {clonePropertyAccessExpression} from "./clone-property-access-expression.js";
import {cloneElementAccessExpression} from "./clone-element-access-expression.js";
import {cloneArrayLiteralExpression} from "./clone-array-literal-expression.js";
import {cloneObjectLiteralExpression} from "./clone-object-literal-expression.js";
import {cloneTemplateExpression} from "./clone-template-expression.js";
import {cloneTemplateSpan} from "./clone-template-span.js";
import {cloneTemplateHead} from "./clone-template-head.js";
import {cloneTemplateMiddle} from "./clone-template-middle.js";
import {cloneTemplateTail} from "./clone-template-tail.js";
import {cloneConditionalExpression} from "./clone-conditional-expression.js";
import {cloneBinaryExpression} from "./clone-binary-expression.js";
import {cloneParenthesizedExpression} from "./clone-parenthesized-expression.js";
import {cloneParenthesizedTypeNode} from "./clone-parenthesized-type-node.js";
import {cloneArrowFunction} from "./clone-arrow-function.js";
import {cloneClassDeclaration} from "./clone-class-declaration.js";
import {cloneClassExpression} from "./clone-class-expression.js";
import {cloneEnumDeclaration} from "./clone-enum-declaration.js";
import {cloneInterfaceDeclaration} from "./clone-interface-declaration.js";
import {cloneEnumMember} from "./clone-enum-member.js";
import {cloneHeritageClause} from "./clone-heritage-clause.js";
import {cloneEmptyStatement} from "./clone-empty-statement.js";
import {cloneTypeOperatorNode} from "./clone-type-operator-node.js";
import {cloneIndexedAccessTypeNode} from "./clone-indexed-access-type-node.js";
import {cloneMappedTypeNode} from "./clone-mapped-type-node.js";
import {cloneOmittedExpression} from "./clone-omitted-expression.js";
import {clonePartiallyEmittedExpression} from "./clone-partially-omitted-expression.js";
import {isPartiallyEmittedExpression} from "./util/is-partially-emitted-expression.js";
import {clonePostfixUnaryExpression} from "./clone-postfix-unary-expression.js";
import {isNullLiteral} from "./util/is-null-literal.js";
import {cloneNullLiteral} from "./clone-null-literal.js";
import {isThisExpression} from "./util/is-this-expression.js";
import {cloneThisExpression} from "./clone-this-expression.js";
import {cloneReturnStatement} from "./clone-return-statement.js";
import {isSuperExpression} from "./util/is-super-expression.js";
import {cloneSuperExpression} from "./clone-super-expression.js";
import {cloneDeleteExpression} from "./clone-delete-expression.js";
import {cloneAsExpression} from "./clone-as-expression.js";
import {cloneTypeAssertion} from "./clone-type-assertion.js";
import {cloneAwaitExpression} from "./clone-await-expression.js";
import {cloneYieldExpression} from "./clone-yield-expression.js";
import {cloneForOfStatement} from "./clone-for-of-statement.js";
import {cloneForInStatement} from "./clone-for-in-statement.js";
import {cloneForStatement} from "./clone-for-statement.js";
import {cloneWhileStatement} from "./clone-while-statement.js";
import {cloneLabeledStatement} from "./clone-labeled-statement.js";
import {cloneBreakStatement} from "./clone-break-statement.js";
import {cloneContinueStatement} from "./clone-continue-statement.js";
import {cloneIfStatement} from "./clone-if-statement.js";
import {cloneDoStatement} from "./clone-do-statement.js";
import {cloneNonNullExpression} from "./clone-non-null-expression.js";
import {cloneTypeOfExpression} from "./clone-type-of-expression.js";
import {cloneVoidExpression} from "./clone-void-expression.js";
import {cloneFunctionExpression} from "./clone-function-expression.js";
import {cloneSpreadElement} from "./clone-spread-element.js";
import {cloneTaggedTemplateExpression} from "./clone-tagged-template-expression.js";
import {cloneMetaProperty} from "./clone-meta-property.js";
import {cloneJsxElement} from "./clone-jsx-element.js";
import {cloneJsxAttributes} from "./clone-jsx-attributes.js";
import {cloneJsxOpeningElement} from "./clone-jsx-opening-element.js";
import {cloneJsxSelfClosingElement} from "./clone-jsx-self-closing-element.js";
import {cloneJsxFragment} from "./clone-jsx-fragment.js";
import {cloneJsxOpeningFragment} from "./clone-jsx-opening-fragment.js";
import {cloneJsxClosingFragment} from "./clone-jsx-closing-fragment.js";
import {cloneJsxAttribute} from "./clone-jsx-attribute.js";
import {cloneJsxSpreadAttribute} from "./clone-jsx-spread-attribute.js";
import {cloneJsxClosingElement} from "./clone-jsx-closing-element.js";
import {cloneJsxExpression} from "./clone-jsx-expression.js";
import {cloneJsxText} from "./clone-jsx-text.js";
import {isNotEmittedStatement} from "./util/is-not-emitted-statement.js";
import {cloneNotEmittedStatement} from "./clone-not-emitted-statement.js";
import {isCommaListExpression} from "./util/is-comma-list-expression.js";
import {cloneCommaListExpression} from "./clone-comma-list-expression.js";
import {cloneDebuggerStatement} from "./clone-debugger-statement.js";
import {cloneWithStatement} from "./clone-with-statement.js";
import {cloneSwitchStatement} from "./clone-switch-statement.js";
import {cloneCaseBlock} from "./clone-case-block.js";
import {cloneCaseClause} from "./clone-case-clause.js";
import {cloneDefaultClause} from "./clone-default-clause.js";
import {cloneTryStatement} from "./clone-try-statement.js";
import {cloneCatchClause} from "./clone-catch-clause.js";
import {cloneModuleDeclaration} from "./clone-module-declaration.js";
import {cloneModuleBlock} from "./clone-module-block.js";
import {cloneImportDeclaration} from "./clone-import-declaration.js";
import {cloneImportEqualsDeclaration} from "./clone-import-equals-declaration.js";
import {cloneImportClause} from "./clone-import-clause.js";
import {cloneNamedImports} from "./clone-named-imports.js";
import {cloneNamespaceImport} from "./clone-namespace-import.js";
import {cloneImportSpecifier} from "./clone-import-specifier.js";
import {cloneExternalModuleReference} from "./clone-external-module-reference.js";
import {cloneNamespaceExportDeclaration} from "./clone-namespace-export-declaration.js";
import {cloneExportDeclaration} from "./clone-export-declaration.js";
import {cloneNamedExports} from "./clone-named-exports.js";
import {cloneExportSpecifier} from "./clone-export-specifier.js";
import {cloneExportAssignment} from "./clone-export-assignment.js";
import {TS} from "./type/ts.js";
import {toInternalOptions} from "./util/to-internal-options.js";
import {MetaNode} from "./type/meta-node.js";
import {isJsDocComment} from "./util/is-js-doc-comment.js";
import {cloneJsDoc} from "./clone-js-doc-comment.js";
import {isJsDocUnknownTag} from "./util/is-js-doc-unknown-tag.js";
import {isJsDocParameterTag} from "./util/is-js-doc-parameter-tag.js";
import {cloneJsDocParameterTag} from "./clone-js-doc-parameter-tag.js";
import {isJsDocReturnTag} from "./util/is-js-doc-return-tag.js";
import {cloneJsDocReturnTag} from "./clone-js-doc-return-tag.js";
import {isJsDocTypeExpression} from "./util/is-js-doc-type-expression.js";
import {cloneJsDocTypeExpression} from "./clone-js-doc-type-expression.js";
import {isJsDocEnumTag} from "./util/is-js-doc-enum-tag.js";
import {cloneJsDocEnumTag} from "./clone-js-doc-enum-tag.js";
import {isJsDocTypeTag} from "./util/is-js-doc-type-tag.js";
import {cloneJsDocTypeTag} from "./clone-js-doc-type-tag.js";
import {isJsDocAllType} from "./util/is-js-doc-all-type.js";
import {cloneJsDocAllType} from "./clone-js-doc-all-type.js";
import {isJsDocUnknownType} from "./util/is-js-doc-unknown-type.js";
import {cloneJsDocUnknownType} from "./clone-js-doc-unknown-type.js";
import {isJsDocNonNullableType} from "./util/is-js-doc-non-nullable-type.js";
import {cloneJsDocNonNullableType} from "./clone-js-doc-non-nullable-type.js";
import {isJsDocNullableType} from "./util/is-js-doc-nullable-type.js";
import {cloneJsDocNullableType} from "./clone-js-doc-nullable-type.js";
import {isJsDocOptionalType} from "./util/is-js-doc-optional-type.js";
import {cloneJsDocOptionalType} from "./clone-js-doc-optional-type.js";
import {isJsDocFunctionType} from "./util/is-js-doc-function-type.js";
import {cloneJsDocFunctionType} from "./clone-js-doc-function-type.js";
import {isJsDocVariadicType} from "./util/is-js-doc-variadic-type.js";
import {cloneJsDocVariadicType} from "./clone-js-doc-variadic-type.js";
import {isJsDocNamepathType} from "./util/is-js-doc-namepath-type.js";
import {cloneJsDocNamepathType} from "./clone-js-doc-namepath-type.js";
import {cloneJsDocUnknownTag} from "./clone-js-doc-unknown-tag.js";
import {isJsDocAugmentsTag} from "./util/is-js-doc-augments-tag.js";
import {cloneJsDocAugmentsTag} from "./clone-js-doc-augments-tag.js";
import {isJsDocAuthorTag} from "./util/is-js-doc-author-tag.js";
import {cloneJsDocAuthorTag} from "./clone-js-doc-author-tag.js";
import {isJsDocClassTag} from "./util/is-js-doc-class-tag.js";
import {cloneJsDocClassTag} from "./clone-js-doc-class-tag.js";
import {isJsDocThisTag} from "./util/is-js-doc-this-tag.js";
import {cloneJsDocThisTag} from "./clone-js-doc-this-tag.js";
import {isJsDocTemplateTag} from "./util/is-js-doc-template-tag.js";
import {cloneJsDocTemplateTag} from "./clone-js-doc-template-tag.js";
import {isJsDocTypedefTag} from "./util/is-js-doc-typedef-tag.js";
import {cloneJsDocTypedefTag} from "./clone-js-doc-typedef-tag.js";
import {isJsDocCallbackTag} from "./util/is-js-doc-callback-tag.js";
import {cloneJsDocCallbackTag} from "./clone-js-doc-callback-tag.js";
import {isJsDocSignature} from "./util/is-js-doc-signature.js";
import {cloneJsDocSignature} from "./clone-js-doc-signature.js";
import {isJsDocPropertyTag} from "./util/is-js-doc-property-tag.js";
import {cloneJsDocPropertyTag} from "./clone-js-doc-property-tag.js";
import {isJsDocTypeLiteral} from "./util/is-js-doc-type-literal.js";
import {cloneJsDocTypeLiteral} from "./clone-js-doc-type-literal.js";
import {setParents} from "./util/set-parents.js";
import {preserveAllComments, preserveComments} from "./util/preserve-comments.js";
import {nextOptions} from "./util/next-options.js";
import {payload} from "./util/payload.js";
import {cloneNamespaceExport} from "./clone-namespace-export.js";
import {isJsDocReadonlyTag} from "./util/is-js-doc-readonly-tag.js";
import {cloneJsDocReadonlyTag} from "./clone-js-doc-readonly-tag.js";
import {isJsDocSeeTag} from "./util/is-js-doc-see-tag.js";
import {cloneJsDocSeeTag} from "./clone-js-doc-see-tag.js";
import {isJsDocPrivateTag} from "./util/is-js-doc-private-tag.js";
import {cloneJsDocPrivateTag} from "./clone-js-doc-private-tag.js";
import {isJsDocProtectedTag} from "./util/is-js-doc-protected-tag.js";
import {cloneJsDocProtectedTag} from "./clone-js-doc-protected-tag.js";
import {isJsDocPublicTag} from "./util/is-js-doc-public-tag.js";
import {cloneJsDocPublicTag} from "./clone-js-doc-public-tag.js";
import {clonePrivateIdentifier} from "./clone-private-identifier.js";
import {SetParentNodesOptions} from "./type/set-parent-nodes-options.js";
import {toSetParentNodesOptions} from "./util/to-set-parent-nodes-options.js";
import {Mutable} from "helpertypes";
import {isNamedTupleMember} from "./util/is-named-tuple-member.js";
import {cloneNamedTupleMember} from "./clone-named-tuple-member.js";
import {isJsDocDeprecatedTag} from "./util/is-js-doc-deprecated-tag.js";
import {cloneJsDocDeprecatedTag} from "./clone-js-doc-deprecated-tag.js";
import {isTemplateLiteralTypeNode} from "./util/is-template-literal-type-node.js";
import {cloneTemplateLiteralTypeNode} from "./clone-template-literal-type-node.js";
import {isTemplateLiteralTypeSpan} from "./util/is-template-literal-type-span.js";
import {cloneTemplateLiteralTypeSpan} from "./clone-template-literal-type-span.js";
import {isJsDocLink} from "./util/is-js-doc-link.js";
import {cloneJsDocLink} from "./clone-js-doc-link.js";
import {clonePropertyAccessChain} from "./clone-property-access-chain.js";
import {cloneClassStaticBlockDeclaration} from "./clone-class-static-block-declaration.js";
import {isJsDocLinkCode} from "./util/is-js-doc-link-code.js";
import {cloneJsDocLinkCode} from "./clone-js-doc-link-code.js";
import {isJsDocLinkPlain} from "./util/is-js-doc-link-plain.js";
import {cloneJsDocLinkPlain} from "./clone-js-doc-link-plain.js";
import {isJsDocMemberName} from "./util/is-js-doc-member-name.js";
import {cloneJsDocMemberName} from "./clone-js-doc-member-name.js";
import {cloneAssertClause} from "./clone-assert-clause.js";
import {cloneAssertEntry} from "./clone-assert-entry.js";
import {isImportTypeAssertionContainer} from "./util/is-import-type-assertion-container.js";
import {cloneImportTypeAssertionContainer} from "./clone-import-type-assertion-container.js";

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

	if (options.typescript.isSourceFile(node)) {
		return cloneSourceFile(node, options as unknown as CloneNodeVisitorOptions<TS.SourceFile>);
	} else if (options.typescript.isIdentifier(node)) {
		return cloneIdentifier(node, options as unknown as CloneNodeVisitorOptions<TS.Identifier>);
	}

	// Note: isPrivateIdentifier may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isPrivateIdentifier?.(node)) {
		return clonePrivateIdentifier(node, options as unknown as CloneNodeVisitorOptions<TS.PrivateIdentifier>);
	} else if (options.typescript.isTypeAliasDeclaration(node)) {
		return cloneTypeAliasDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.TypeAliasDeclaration>);
	} else if (options.typescript.isTypeParameterDeclaration(node)) {
		return cloneTypeParameterDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.TypeParameterDeclaration>);
	} else if (options.typescript.isDecorator(node)) {
		return cloneDecorator(node, options as unknown as CloneNodeVisitorOptions<TS.Decorator>);
	} else if (options.typescript.isQualifiedName(node)) {
		return cloneQualifiedName(node, options as unknown as CloneNodeVisitorOptions<TS.QualifiedName>);
	} else if (options.typescript.isComputedPropertyName(node)) {
		return cloneComputedPropertyName(node, options as unknown as CloneNodeVisitorOptions<TS.ComputedPropertyName>);
	} else if (options.typescript.isCallSignatureDeclaration(node)) {
		return cloneCallSignatureDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.CallSignatureDeclaration>);
	} else if (options.typescript.isConstructSignatureDeclaration(node)) {
		return cloneConstructSignatureDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ConstructSignatureDeclaration>);
	} else if (options.typescript.isVariableDeclaration(node)) {
		return cloneVariableDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.VariableDeclaration>);
	} else if (options.typescript.isVariableDeclarationList(node)) {
		return cloneVariableDeclarationList(node, options as unknown as CloneNodeVisitorOptions<TS.VariableDeclarationList>);
	} else if (options.typescript.isVariableStatement(node)) {
		return cloneVariableStatement(node, options as unknown as CloneNodeVisitorOptions<TS.VariableStatement>);
	} else if (options.typescript.isParameter(node)) {
		return cloneParameterDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ParameterDeclaration>);
	} else if (options.typescript.isBindingElement(node)) {
		return cloneBindingElement(node, options as unknown as CloneNodeVisitorOptions<TS.BindingElement>);
	} else if (options.typescript.isPropertySignature(node)) {
		return clonePropertySignature(node, options as unknown as CloneNodeVisitorOptions<TS.PropertySignature>);
	} else if (options.typescript.isPropertyDeclaration(node)) {
		return clonePropertyDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.PropertyDeclaration>);
	} else if (options.typescript.isPropertyAssignment(node)) {
		return clonePropertyAssignment(node, options as unknown as CloneNodeVisitorOptions<TS.PropertyAssignment>);
	} else if (options.typescript.isShorthandPropertyAssignment(node)) {
		return cloneShorthandPropertyAssignment(node, options as unknown as CloneNodeVisitorOptions<TS.ShorthandPropertyAssignment>);
	} else if (options.typescript.isSpreadAssignment(node)) {
		return cloneSpreadAssignment(node, options as unknown as CloneNodeVisitorOptions<TS.SpreadAssignment>);
	} else if (options.typescript.isObjectBindingPattern(node)) {
		return cloneObjectBindingPattern(node, options as unknown as CloneNodeVisitorOptions<TS.ObjectBindingPattern>);
	} else if (options.typescript.isArrayBindingPattern(node)) {
		return cloneArrayBindingPattern(node, options as unknown as CloneNodeVisitorOptions<TS.ArrayBindingPattern>);
	} else if (options.typescript.isFunctionDeclaration(node)) {
		return cloneFunctionDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.FunctionDeclaration>);
	} else if (options.typescript.isMethodSignature(node)) {
		return cloneMethodSignature(node, options as unknown as CloneNodeVisitorOptions<TS.MethodSignature>);
	} else if (options.typescript.isMethodDeclaration(node)) {
		return cloneMethodDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.MethodDeclaration>);
	} else if (options.typescript.isConstructorDeclaration(node)) {
		return cloneConstructorDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ConstructorDeclaration>);
	} else if (options.typescript.isSemicolonClassElement(node)) {
		return cloneSemicolonClassElement(node, options as unknown as CloneNodeVisitorOptions<TS.SemicolonClassElement>);
	} else if (options.typescript.isGetAccessorDeclaration(node)) {
		return cloneGetAccessorDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.GetAccessorDeclaration>);
	} else if (options.typescript.isSetAccessorDeclaration(node)) {
		return cloneSetAccessorDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.SetAccessorDeclaration>);
	} else if (options.typescript.isIndexSignatureDeclaration(node)) {
		return cloneIndexSignatureDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>);
	} else if (isKeywordTypeNode(node, options.typescript)) {
		return cloneKeywordTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.KeywordTypeNode>);
	} else if (options.typescript.isImportTypeNode(node)) {
		return cloneImportTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ImportTypeNode>);
	} else if (options.typescript.isThisTypeNode(node)) {
		return cloneThisTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ThisTypeNode>);
	} else if (options.typescript.isFunctionTypeNode(node)) {
		return cloneFunctionTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.FunctionTypeNode>);
	} else if (options.typescript.isConstructorTypeNode(node)) {
		return cloneConstructorTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ConstructorTypeNode>);
	} else if (options.typescript.isTypeReferenceNode(node)) {
		return cloneTypeReferenceNode(node, options as unknown as CloneNodeVisitorOptions<TS.TypeReferenceNode>);
	} else if (options.typescript.isTypePredicateNode(node)) {
		return cloneTypePredicateNode(node, options as unknown as CloneNodeVisitorOptions<TS.TypePredicateNode>);
	} else if (options.typescript.isTypeQueryNode(node)) {
		return cloneTypeQueryNode(node, options as unknown as CloneNodeVisitorOptions<TS.TypeQueryNode>);
	} else if (options.typescript.isTypeLiteralNode(node)) {
		return cloneTypeLiteralNode(node, options as unknown as CloneNodeVisitorOptions<TS.TypeLiteralNode>);
	} else if (options.typescript.isArrayTypeNode(node)) {
		return cloneArrayTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ArrayTypeNode>);
	} else if (options.typescript.isTupleTypeNode(node)) {
		return cloneTupleTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.TupleTypeNode>);
	} else if (isOptionalTypeNode(node, options.typescript)) {
		return cloneOptionalTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.OptionalTypeNode>);
	} else if (isRestTypeNode(node, options.typescript)) {
		return cloneRestTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.RestTypeNode>);
	} else if (options.typescript.isUnionTypeNode(node)) {
		return cloneUnionTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.UnionTypeNode>);
	} else if (options.typescript.isIntersectionTypeNode(node)) {
		return cloneIntersectionTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.IntersectionTypeNode>);
	} else if (options.typescript.isConditionalTypeNode(node)) {
		return cloneConditionalTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ConditionalTypeNode>);
	} else if (options.typescript.isInferTypeNode(node)) {
		return cloneInferTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.InferTypeNode>);
	} else if (options.typescript.isLiteralTypeNode(node)) {
		return cloneLiteralTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.LiteralTypeNode>);
	} else if (options.typescript.isStringLiteral(node)) {
		return cloneStringLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.StringLiteral>);
	} else if (isBooleanLiteral(node, options.typescript)) {
		return cloneBooleanLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.BooleanLiteral>);
	} else if (options.typescript.isRegularExpressionLiteral(node)) {
		return cloneRegularExpressionLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.RegularExpressionLiteral>);
	} else if (options.typescript.isNoSubstitutionTemplateLiteral(node)) {
		return cloneNoSubstitutionTemplateLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.NoSubstitutionTemplateLiteral>);
	} else if (options.typescript.isNumericLiteral(node)) {
		return cloneNumericLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.NumericLiteral>);
	}

	// Note: isBigIntLiteral may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isBigIntLiteral?.(node)) {
		return cloneBigIntLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.BigIntLiteral>);
	} else if (options.typescript.isArrayLiteralExpression(node)) {
		return cloneArrayLiteralExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ArrayLiteralExpression>);
	} else if (options.typescript.isObjectLiteralExpression(node)) {
		return cloneObjectLiteralExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ObjectLiteralExpression>);
	} else if (options.typescript.isPrefixUnaryExpression(node)) {
		return clonePrefixUnaryExpression(node, options as unknown as CloneNodeVisitorOptions<TS.PrefixUnaryExpression>);
	} else if (options.typescript.isBlock(node)) {
		return cloneBlock(node, options as unknown as CloneNodeVisitorOptions<TS.Block>);
	} else if (options.typescript.isThrowStatement(node)) {
		return cloneThrowStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ThrowStatement>);
	} else if (options.typescript.isReturnStatement(node)) {
		return cloneReturnStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ReturnStatement>);
	} else if (options.typescript.isNewExpression(node)) {
		return cloneNewExpression(node, options as unknown as CloneNodeVisitorOptions<TS.NewExpression>);
	} else if (options.typescript.isCallExpression(node)) {
		return cloneCallExpression(node, options as unknown as CloneNodeVisitorOptions<TS.CallExpression>);
	} else if (options.typescript.isExpressionStatement(node)) {
		return cloneExpressionStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ExpressionStatement>);
	} else if (options.typescript.isExpressionWithTypeArguments(node)) {
		return cloneExpressionWithTypeArguments(node, options as unknown as CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>);
	} else if (options.typescript.isPropertyAccessChain?.(node)) {
		return clonePropertyAccessChain(node, options as unknown as CloneNodeVisitorOptions<TS.PropertyAccessChain>);
	} else if (options.typescript.isPropertyAccessExpression(node)) {
		return clonePropertyAccessExpression(node, options as unknown as CloneNodeVisitorOptions<TS.PropertyAccessExpression>);
	} else if (options.typescript.isElementAccessExpression(node)) {
		return cloneElementAccessExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ElementAccessExpression>);
	} else if (options.typescript.isTemplateExpression(node)) {
		return cloneTemplateExpression(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateExpression>);
	} else if (options.typescript.isTemplateSpan(node)) {
		return cloneTemplateSpan(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateSpan>);
	} else if (options.typescript.isTemplateHead(node)) {
		return cloneTemplateHead(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateHead>);
	} else if (options.typescript.isTemplateMiddle(node)) {
		return cloneTemplateMiddle(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateMiddle>);
	} else if (options.typescript.isTemplateTail(node)) {
		return cloneTemplateTail(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateTail>);
	} else if (options.typescript.isConditionalExpression(node)) {
		return cloneConditionalExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ConditionalExpression>);
	} else if (options.typescript.isBinaryExpression(node)) {
		return cloneBinaryExpression(node, options as unknown as CloneNodeVisitorOptions<TS.BinaryExpression>);
	} else if (options.typescript.isParenthesizedExpression(node)) {
		return cloneParenthesizedExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ParenthesizedExpression>);
	} else if (options.typescript.isParenthesizedTypeNode(node)) {
		return cloneParenthesizedTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.ParenthesizedTypeNode>);
	} else if (options.typescript.isArrowFunction(node)) {
		return cloneArrowFunction(node, options as unknown as CloneNodeVisitorOptions<TS.ArrowFunction>);
	} else if (options.typescript.isClassDeclaration(node)) {
		return cloneClassDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ClassDeclaration>);
	} else if (options.typescript.isClassExpression(node)) {
		return cloneClassExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ClassExpression>);
	} else if (options.typescript.isEnumDeclaration(node)) {
		return cloneEnumDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.EnumDeclaration>);
	} else if (options.typescript.isEnumMember(node)) {
		return cloneEnumMember(node, options as unknown as CloneNodeVisitorOptions<TS.EnumMember>);
	} else if (options.typescript.isInterfaceDeclaration(node)) {
		return cloneInterfaceDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.InterfaceDeclaration>);
	} else if (options.typescript.isHeritageClause(node)) {
		return cloneHeritageClause(node, options as unknown as CloneNodeVisitorOptions<TS.HeritageClause>);
	} else if (options.typescript.isEmptyStatement(node)) {
		return cloneEmptyStatement(node, options as unknown as CloneNodeVisitorOptions<TS.EmptyStatement>);
	} else if (options.typescript.isAsExpression(node)) {
		return cloneAsExpression(node, options as unknown as CloneNodeVisitorOptions<TS.AsExpression>);
	} else if (
		("isTypeAssertionExpression" in options.typescript && options.typescript.isTypeAssertionExpression(node)) ||
		("isTypeAssertion" in options.typescript && options.typescript.isTypeAssertion(node))
	) {
		return cloneTypeAssertion(node, options as unknown as CloneNodeVisitorOptions<TS.TypeAssertion>);
	} else if (options.typescript.isAwaitExpression(node)) {
		return cloneAwaitExpression(node, options as unknown as CloneNodeVisitorOptions<TS.AwaitExpression>);
	} else if (options.typescript.isYieldExpression(node)) {
		return cloneYieldExpression(node, options as unknown as CloneNodeVisitorOptions<TS.YieldExpression>);
	} else if (options.typescript.isForOfStatement(node)) {
		return cloneForOfStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ForOfStatement>);
	} else if (options.typescript.isForInStatement(node)) {
		return cloneForInStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ForInStatement>);
	} else if (options.typescript.isForStatement(node)) {
		return cloneForStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ForStatement>);
	} else if (options.typescript.isWhileStatement(node)) {
		return cloneWhileStatement(node, options as unknown as CloneNodeVisitorOptions<TS.WhileStatement>);
	} else if (options.typescript.isLabeledStatement(node)) {
		return cloneLabeledStatement(node, options as unknown as CloneNodeVisitorOptions<TS.LabeledStatement>);
	} else if (options.typescript.isBreakStatement(node)) {
		return cloneBreakStatement(node, options as unknown as CloneNodeVisitorOptions<TS.BreakStatement>);
	} else if (options.typescript.isContinueStatement(node)) {
		return cloneContinueStatement(node, options as unknown as CloneNodeVisitorOptions<TS.ContinueStatement>);
	} else if (options.typescript.isIfStatement(node)) {
		return cloneIfStatement(node, options as unknown as CloneNodeVisitorOptions<TS.IfStatement>);
	} else if (options.typescript.isDoStatement(node)) {
		return cloneDoStatement(node, options as unknown as CloneNodeVisitorOptions<TS.DoStatement>);
	} else if (options.typescript.isNonNullExpression(node)) {
		return cloneNonNullExpression(node, options as unknown as CloneNodeVisitorOptions<TS.NonNullExpression>);
	} else if (options.typescript.isTypeOperatorNode(node)) {
		return cloneTypeOperatorNode(node, options as unknown as CloneNodeVisitorOptions<TS.TypeOperatorNode>);
	} else if (options.typescript.isIndexedAccessTypeNode(node)) {
		return cloneIndexedAccessTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>);
	}

	// Note: isMappedTypeNode may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isMappedTypeNode?.(node)) {
		return cloneMappedTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.MappedTypeNode>);
	} else if (options.typescript.isOmittedExpression(node)) {
		return cloneOmittedExpression(node, options as unknown as CloneNodeVisitorOptions<TS.OmittedExpression>);
	} else if (isPartiallyEmittedExpression(node, options.typescript)) {
		return clonePartiallyEmittedExpression(node, options as unknown as CloneNodeVisitorOptions<TS.PartiallyEmittedExpression>);
	} else if (options.typescript.isPostfixUnaryExpression(node)) {
		return clonePostfixUnaryExpression(node, options as unknown as CloneNodeVisitorOptions<TS.PostfixUnaryExpression>);
	} else if (isNullLiteral(node, options.typescript)) {
		return cloneNullLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.NullLiteral>);
	} else if (isThisExpression(node, options.typescript)) {
		return cloneThisExpression(node, options as unknown as CloneNodeVisitorOptions<TS.ThisExpression>);
	} else if (isSuperExpression(node, options.typescript)) {
		return cloneSuperExpression(node, options as unknown as CloneNodeVisitorOptions<TS.SuperExpression>);
	} else if (options.typescript.isDeleteExpression(node)) {
		return cloneDeleteExpression(node, options as unknown as CloneNodeVisitorOptions<TS.DeleteExpression>);
	} else if (options.typescript.isTypeOfExpression(node)) {
		return cloneTypeOfExpression(node, options as unknown as CloneNodeVisitorOptions<TS.TypeOfExpression>);
	} else if (options.typescript.isVoidExpression(node)) {
		return cloneVoidExpression(node, options as unknown as CloneNodeVisitorOptions<TS.VoidExpression>);
	} else if (options.typescript.isFunctionExpression(node)) {
		return cloneFunctionExpression(node, options as unknown as CloneNodeVisitorOptions<TS.FunctionExpression>);
	} else if (options.typescript.isSpreadElement(node)) {
		return cloneSpreadElement(node, options as unknown as CloneNodeVisitorOptions<TS.SpreadElement>);
	} else if (options.typescript.isTaggedTemplateExpression(node)) {
		return cloneTaggedTemplateExpression(node, options as unknown as CloneNodeVisitorOptions<TS.TaggedTemplateExpression>);
	} else if (options.typescript.isMetaProperty(node)) {
		return cloneMetaProperty(node, options as unknown as CloneNodeVisitorOptions<TS.MetaProperty>);
	} else if (options.typescript.isJsxElement(node)) {
		return cloneJsxElement(node, options as unknown as CloneNodeVisitorOptions<TS.JsxElement>);
	} else if (options.typescript.isJsxAttributes(node)) {
		return cloneJsxAttributes(node, options as unknown as CloneNodeVisitorOptions<TS.JsxAttributes>);
	} else if (options.typescript.isJsxOpeningElement(node)) {
		return cloneJsxOpeningElement(node, options as unknown as CloneNodeVisitorOptions<TS.JsxOpeningElement>);
	} else if (options.typescript.isJsxSelfClosingElement(node)) {
		return cloneJsxSelfClosingElement(node, options as unknown as CloneNodeVisitorOptions<TS.JsxSelfClosingElement>);
	} else if (options.typescript.isJsxFragment(node)) {
		return cloneJsxFragment(node, options as unknown as CloneNodeVisitorOptions<TS.JsxFragment>);
	} else if (options.typescript.isJsxOpeningFragment(node)) {
		return cloneJsxOpeningFragment(node, options as unknown as CloneNodeVisitorOptions<TS.JsxOpeningFragment>);
	} else if (options.typescript.isJsxClosingFragment(node)) {
		return cloneJsxClosingFragment(node, options as unknown as CloneNodeVisitorOptions<TS.JsxClosingFragment>);
	} else if (options.typescript.isJsxAttribute(node)) {
		return cloneJsxAttribute(node, options as unknown as CloneNodeVisitorOptions<TS.JsxAttribute>);
	} else if (options.typescript.isJsxSpreadAttribute(node)) {
		return cloneJsxSpreadAttribute(node, options as unknown as CloneNodeVisitorOptions<TS.JsxSpreadAttribute>);
	} else if (options.typescript.isJsxClosingElement(node)) {
		return cloneJsxClosingElement(node, options as unknown as CloneNodeVisitorOptions<TS.JsxClosingElement>);
	} else if (options.typescript.isJsxExpression(node)) {
		return cloneJsxExpression(node, options as unknown as CloneNodeVisitorOptions<TS.JsxExpression>);
	} else if (options.typescript.isJsxText(node)) {
		return cloneJsxText(node, options as unknown as CloneNodeVisitorOptions<TS.JsxText>);
	} else if (isNotEmittedStatement(node, options.typescript)) {
		return cloneNotEmittedStatement(node, options as unknown as CloneNodeVisitorOptions<TS.NotEmittedStatement>);
	} else if (isCommaListExpression(node, options.typescript)) {
		return cloneCommaListExpression(node, options as unknown as CloneNodeVisitorOptions<TS.CommaListExpression>);
	} else if (options.typescript.isDebuggerStatement(node)) {
		return cloneDebuggerStatement(node, options as unknown as CloneNodeVisitorOptions<TS.DebuggerStatement>);
	} else if (options.typescript.isWithStatement(node)) {
		return cloneWithStatement(node, options as unknown as CloneNodeVisitorOptions<TS.WithStatement>);
	} else if (options.typescript.isSwitchStatement(node)) {
		return cloneSwitchStatement(node, options as unknown as CloneNodeVisitorOptions<TS.SwitchStatement>);
	} else if (options.typescript.isCaseBlock(node)) {
		return cloneCaseBlock(node, options as unknown as CloneNodeVisitorOptions<TS.CaseBlock>);
	} else if (options.typescript.isCaseClause(node)) {
		return cloneCaseClause(node, options as unknown as CloneNodeVisitorOptions<TS.CaseClause>);
	} else if (options.typescript.isDefaultClause(node)) {
		return cloneDefaultClause(node, options as unknown as CloneNodeVisitorOptions<TS.DefaultClause>);
	} else if (options.typescript.isTryStatement(node)) {
		return cloneTryStatement(node, options as unknown as CloneNodeVisitorOptions<TS.TryStatement>);
	} else if (options.typescript.isCatchClause(node)) {
		return cloneCatchClause(node, options as unknown as CloneNodeVisitorOptions<TS.CatchClause>);
	} else if (options.typescript.isModuleDeclaration(node)) {
		return cloneModuleDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ModuleDeclaration>);
	} else if (options.typescript.isModuleBlock(node)) {
		return cloneModuleBlock(node, options as unknown as CloneNodeVisitorOptions<TS.ModuleBlock>);
	} else if (options.typescript.isImportEqualsDeclaration(node)) {
		return cloneImportEqualsDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ImportEqualsDeclaration>);
	} else if (options.typescript.isExternalModuleReference(node)) {
		return cloneExternalModuleReference(node, options as unknown as CloneNodeVisitorOptions<TS.ExternalModuleReference>);
	} else if (options.typescript.isImportDeclaration(node)) {
		return cloneImportDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ImportDeclaration>);
	} else if (options.typescript.isImportClause(node)) {
		return cloneImportClause(node, options as unknown as CloneNodeVisitorOptions<TS.ImportClause>);
	} else if (options.typescript.isNamedImports(node)) {
		return cloneNamedImports(node, options as unknown as CloneNodeVisitorOptions<TS.NamedImports>);
	} else if (options.typescript.isNamespaceImport(node)) {
		return cloneNamespaceImport(node, options as unknown as CloneNodeVisitorOptions<TS.NamespaceImport>);
	} else if (options.typescript.isImportSpecifier(node)) {
		return cloneImportSpecifier(node, options as unknown as CloneNodeVisitorOptions<TS.ImportSpecifier>);
	} else if (options.typescript.isNamespaceExportDeclaration(node)) {
		return cloneNamespaceExportDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.NamespaceExportDeclaration>);
	} else if (options.typescript.isExportDeclaration(node)) {
		return cloneExportDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ExportDeclaration>);
	} else if (options.typescript.isNamedExports(node)) {
		return cloneNamedExports(node, options as unknown as CloneNodeVisitorOptions<TS.NamedExports>);
	}

	// Note: isNamespaceExport may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isNamespaceExport?.(node)) {
		return cloneNamespaceExport(node, options as unknown as CloneNodeVisitorOptions<TS.NamespaceExport>);
	}

	// Note: isNamedTupleMember may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (isNamedTupleMember?.(node, options.typescript)) {
		return cloneNamedTupleMember(node, options as unknown as CloneNodeVisitorOptions<TS.NamedTupleMember>);
	}

	// Note: isClassStaticBlockDeclaration may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isClassStaticBlockDeclaration?.(node)) {
		return cloneClassStaticBlockDeclaration(node, options as unknown as CloneNodeVisitorOptions<TS.ClassStaticBlockDeclaration>);
	}

	// Note: isAssertClause may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isAssertClause?.(node)) {
		return cloneAssertClause(node, options as unknown as CloneNodeVisitorOptions<TS.AssertClause>);
	}

	// Note: isAssertEntry may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isAssertEntry?.(node)) {
		return cloneAssertEntry(node, options as unknown as CloneNodeVisitorOptions<TS.AssertEntry>);
	} // Note: isAssertEntry may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (isImportTypeAssertionContainer(node, options.typescript)) {
		return cloneImportTypeAssertionContainer(node, options as unknown as CloneNodeVisitorOptions<TS.ImportTypeAssertionContainer>);
	} else if (options.typescript.isExportSpecifier(node)) {
		return cloneExportSpecifier(node, options as unknown as CloneNodeVisitorOptions<TS.ExportSpecifier>);
	} else if (options.typescript.isExportAssignment(node)) {
		return cloneExportAssignment(node, options as unknown as CloneNodeVisitorOptions<TS.ExportAssignment>);
	} else if (isJsDocComment(node, options.typescript)) {
		return cloneJsDoc(node, options as unknown as CloneNodeVisitorOptions<TS.JSDoc>);
	} else if (isJsDocParameterTag(node, options.typescript)) {
		return cloneJsDocParameterTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocParameterTag>);
	} else if (isJsDocReturnTag(node, options.typescript)) {
		return cloneJsDocReturnTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocReturnTag>);
	} else if (isJsDocTypeExpression(node, options.typescript)) {
		return cloneJsDocTypeExpression(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocTypeExpression>);
	} else if (isJsDocEnumTag(node, options.typescript)) {
		return cloneJsDocEnumTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocEnumTag>);
	} else if (isJsDocTypeTag(node, options.typescript)) {
		return cloneJsDocTypeTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocTypeTag>);
	} else if (isJsDocAllType(node, options.typescript)) {
		return cloneJsDocAllType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocAllType>);
	} else if (isJsDocUnknownType(node, options.typescript)) {
		return cloneJsDocUnknownType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocUnknownType>);
	} else if (isJsDocNonNullableType(node, options.typescript)) {
		return cloneJsDocNonNullableType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocNonNullableType>);
	} else if (isJsDocNullableType(node, options.typescript)) {
		return cloneJsDocNullableType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocNullableType>);
	} else if (isJsDocOptionalType(node, options.typescript)) {
		return cloneJsDocOptionalType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocOptionalType>);
	} else if (isJsDocFunctionType(node, options.typescript)) {
		return cloneJsDocFunctionType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocFunctionType>);
	} else if (isJsDocVariadicType(node, options.typescript)) {
		return cloneJsDocVariadicType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocVariadicType>);
	} else if (isJsDocNamepathType(node, options.typescript)) {
		return cloneJsDocNamepathType(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocNamepathType>);
	} else if (isJsDocUnknownTag(node, options.typescript)) {
		return cloneJsDocUnknownTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocUnknownTag>);
	} else if (isJsDocAugmentsTag(node, options.typescript)) {
		return cloneJsDocAugmentsTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocAugmentsTag>);
	} else if (isJsDocAuthorTag(node, options.typescript)) {
		return cloneJsDocAuthorTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocAuthorTag>);
	} else if (isJsDocClassTag(node, options.typescript)) {
		return cloneJsDocClassTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocClassTag>);
	} else if (isJsDocThisTag(node, options.typescript)) {
		return cloneJsDocThisTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocThisTag>);
	} else if (isJsDocTemplateTag(node, options.typescript)) {
		return cloneJsDocTemplateTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocTemplateTag>);
	} else if (isJsDocTypedefTag(node, options.typescript)) {
		return cloneJsDocTypedefTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocTypedefTag>);
	} else if (isJsDocDeprecatedTag(node, options.typescript)) {
		return cloneJsDocDeprecatedTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocDeprecatedTag>);
	} else if (isJsDocCallbackTag(node, options.typescript)) {
		return cloneJsDocCallbackTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocCallbackTag>);
	} else if (isJsDocSignature(node, options.typescript)) {
		return cloneJsDocSignature(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocSignature>);
	} else if (isJsDocPropertyTag(node, options.typescript)) {
		return cloneJsDocPropertyTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocPropertyTag>);
	} else if (isJsDocTypeLiteral(node, options.typescript)) {
		return cloneJsDocTypeLiteral(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocTypeLiteral>);
	} else if (isJsDocReadonlyTag(node, options.typescript)) {
		return cloneJsDocReadonlyTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocReadonlyTag>);
	} else if (isJsDocSeeTag(node, options.typescript)) {
		return cloneJsDocSeeTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocSeeTag>);
	} else if (isJsDocLink(node, options.typescript)) {
		return cloneJsDocLink(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocLink>);
	} else if (isJsDocPrivateTag(node, options.typescript)) {
		return cloneJsDocPrivateTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocPrivateTag>);
	} else if (isJsDocProtectedTag(node, options.typescript)) {
		return cloneJsDocProtectedTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocProtectedTag>);
	} else if (isJsDocPublicTag(node, options.typescript)) {
		return cloneJsDocPublicTag(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocPublicTag>);
	} else if (isJsDocLinkCode(node, options.typescript)) {
		return cloneJsDocLinkCode(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocLinkCode>);
	} else if (isJsDocLinkPlain(node, options.typescript)) {
		return cloneJsDocLinkPlain(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocLinkPlain>);
	} else if (isJsDocMemberName(node, options.typescript)) {
		return cloneJsDocMemberName(node, options as unknown as CloneNodeVisitorOptions<TS.JSDocMemberName>);
	} else if (options.typescript.isToken(node)) {
		return cloneToken(node, options as unknown as CloneNodeVisitorOptions<TS.Token<TS.SyntaxKind>>);
	} else if (isTemplateLiteralTypeNode(node, options.typescript)) {
		return cloneTemplateLiteralTypeNode(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateLiteralTypeNode>);
	} else if (isTemplateLiteralTypeSpan(node, options.typescript)) {
		return cloneTemplateLiteralTypeSpan(node, options as unknown as CloneNodeVisitorOptions<TS.TemplateLiteralTypeSpan>);
	}

	throw new TypeError(`Could not handle Node of kind: '${options.typescript.SyntaxKind[node.kind]}'`);
}
