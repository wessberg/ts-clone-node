import {cloneIdentifier} from "./clone-identifier";
import {cloneTypeAliasDeclaration} from "./clone-type-alias-declaration";
import {CloneNodeInternalOptions, CloneNodeOptions} from "./clone-node-options";
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
import {preserveComments} from "./util/preserve-comments";
import {MetaNode} from "./type/meta-node";
import {isJsDocComment} from "./util/is-js-doc-comment";
import {cloneJsDoc} from "./clone-js-doc-comment";
import {isJsDocUnknownTag} from "./util/is-js-doc-unknown-tag";
import {setParents} from "./util/set-parents";
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
import {cloneJSDocAllType} from "./clone-js-doc-all-type";
import {isJsDocUnknownType} from "./util/is-js-doc-unknown-type";
import {cloneJSDocUnknownType} from "./clone-js-doc-unknown-type";
import {isJsDocNonNullableType} from "./util/is-js-doc-non-nullable-type";
import {cloneJSDocNonNullableType} from "./clone-js-doc-non-nullable-type";
import {isJsDocNullableType} from "./util/is-js-doc-nullable-type";
import {cloneJSDocNullableType} from "./clone-js-doc-nullable-type";
import {isJSDocOptionalType} from "./util/is-js-doc-optional-type";
import {cloneJSDocOptionalType} from "./clone-js-doc-optional-type";
import {isJSDocFunctionType} from "./util/is-js-doc-function-type";
import {cloneJSDocFunctionType} from "./clone-js-doc-function-type";
import {isJSDocVariadicType} from "./util/is-js-doc-variadic-type";
import {cloneJSDocVariadicType} from "./clone-js-doc-variadic-type";
import {isJSDocNamepathType} from "./util/is-js-doc-namepath-type";
import {cloneJSDocNamepathType} from "./clone-js-doc-namepath-type";
import {cloneJsDocUnknownTag} from "./clone-js-doc-unknown-tag";
import {isJSDocAugmentsTag} from "./util/is-js-doc-augments-tag";
import {cloneJSDocAugmentsTag} from "./clone-js-doc-augments-tag";
import {isJSDocAuthorTag} from "./util/is-js-doc-author-tag";
import {cloneJsDocAuthorTag} from "./clone-js-doc-author-tag";
import {isJSDocClassTag} from "./util/is-js-doc-class-tag";
import {cloneJsDocClassTag} from "./clone-js-doc-class-tag";
import {isJSDocThisTag} from "./util/is-js-doc-this-tag";
import {cloneJSDocThisTag} from "./clone-js-doc-this-tag";
import {isJSDocTemplateTag} from "./util/is-js-doc-template-tag";
import {cloneJSDocTemplateTag} from "./clone-js-doc-template-tag";
import {isJSDocTypedefTag} from "./util/is-js-doc-typedef-tag";
import {cloneJSDocTypedefTag} from "./clone-js-doc-typedef-tag";
import {isJSDocCallbackTag} from "./util/is-js-doc-callback-tag";
import {cloneJSDocCallbackTag} from "./clone-js-doc-callback-tag";
import {isJSDocSignature} from "./util/is-js-doc-signature";
import {cloneJSDocSignature} from "./clone-js-doc-signature";
import {isJsDocPropertyTag} from "./util/is-js-doc-property-tag";
import {cloneJSDocPropertyTag} from "./clone-js-doc-property-tag";
import {isJsDocTypeLiteral} from "./util/is-js-doc-type-literal";
import {cloneJSDocTypeLiteral} from "./clone-js-doc-type-literal";

function executeCloneNode(node: MetaNode, options: CloneNodeInternalOptions): MetaNode {
	// Handle the Node
	if (options.typescript.isSourceFile(node)) {
		return cloneSourceFile(node, options as CloneNodeInternalOptions<TS.SourceFile>);
	}

	// Handle the Node
	else if (options.typescript.isIdentifier(node)) {
		return cloneIdentifier(node, options as CloneNodeInternalOptions<TS.Identifier>);
	}

	// Handle the Node
	else if (options.typescript.isTypeAliasDeclaration(node)) {
		return cloneTypeAliasDeclaration(node, options as CloneNodeInternalOptions<TS.TypeAliasDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isTypeParameterDeclaration(node)) {
		return cloneTypeParameterDeclaration(node, options as CloneNodeInternalOptions<TS.TypeParameterDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isDecorator(node)) {
		return cloneDecorator(node, options as CloneNodeInternalOptions<TS.Decorator>);
	}

	// Handle the Node
	else if (options.typescript.isQualifiedName(node)) {
		return cloneQualifiedName(node, options as CloneNodeInternalOptions<TS.QualifiedName>);
	}

	// Handle the Node
	else if (options.typescript.isComputedPropertyName(node)) {
		return cloneComputedPropertyName(node, options as CloneNodeInternalOptions<TS.ComputedPropertyName>);
	}

	// Handle the Node
	else if (options.typescript.isCallSignatureDeclaration(node)) {
		return cloneCallSignatureDeclaration(node, options as CloneNodeInternalOptions<TS.CallSignatureDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isConstructSignatureDeclaration(node)) {
		return cloneConstructSignatureDeclaration(node, options as CloneNodeInternalOptions<TS.ConstructSignatureDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isVariableDeclaration(node)) {
		return cloneVariableDeclaration(node, options as CloneNodeInternalOptions<TS.VariableDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isVariableDeclarationList(node)) {
		return cloneVariableDeclarationList(node, options as CloneNodeInternalOptions<TS.VariableDeclarationList>);
	}

	// Handle the Node
	else if (options.typescript.isVariableStatement(node)) {
		return cloneVariableStatement(node, options as CloneNodeInternalOptions<TS.VariableStatement>);
	}

	// Handle the Node
	else if (options.typescript.isParameter(node)) {
		return cloneParameterDeclaration(node, options as CloneNodeInternalOptions<TS.ParameterDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isBindingElement(node)) {
		return cloneBindingElement(node, options as CloneNodeInternalOptions<TS.BindingElement>);
	}

	// Handle the Node
	else if (options.typescript.isPropertySignature(node)) {
		return clonePropertySignature(node, options as CloneNodeInternalOptions<TS.PropertySignature>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyDeclaration(node)) {
		return clonePropertyDeclaration(node, options as CloneNodeInternalOptions<TS.PropertyDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyAssignment(node)) {
		return clonePropertyAssignment(node, options as CloneNodeInternalOptions<TS.PropertyAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isShorthandPropertyAssignment(node)) {
		return cloneShorthandPropertyAssignment(node, options as CloneNodeInternalOptions<TS.ShorthandPropertyAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isSpreadAssignment(node)) {
		return cloneSpreadAssignment(node, options as CloneNodeInternalOptions<TS.SpreadAssignment>);
	}

	// Handle the Node
	else if (options.typescript.isObjectBindingPattern(node)) {
		return cloneObjectBindingPattern(node, options as CloneNodeInternalOptions<TS.ObjectBindingPattern>);
	}

	// Handle the Node
	else if (options.typescript.isArrayBindingPattern(node)) {
		return cloneArrayBindingPattern(node, options as CloneNodeInternalOptions<TS.ArrayBindingPattern>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionDeclaration(node)) {
		return cloneFunctionDeclaration(node, options as CloneNodeInternalOptions<TS.FunctionDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isMethodSignature(node)) {
		return cloneMethodSignature(node, options as CloneNodeInternalOptions<TS.MethodSignature>);
	}

	// Handle the Node
	else if (options.typescript.isMethodDeclaration(node)) {
		return cloneMethodDeclaration(node, options as CloneNodeInternalOptions<TS.MethodDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isConstructorDeclaration(node)) {
		return cloneConstructorDeclaration(node, options as CloneNodeInternalOptions<TS.ConstructorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isSemicolonClassElement(node)) {
		return cloneSemicolonClassElement(node, options as CloneNodeInternalOptions<TS.SemicolonClassElement>);
	}

	// Handle the Node
	else if (options.typescript.isGetAccessorDeclaration(node)) {
		return cloneGetAccessorDeclaration(node, options as CloneNodeInternalOptions<TS.GetAccessorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isSetAccessorDeclaration(node)) {
		return cloneSetAccessorDeclaration(node, options as CloneNodeInternalOptions<TS.SetAccessorDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isIndexSignatureDeclaration(node)) {
		return cloneIndexSignatureDeclaration(node, options as CloneNodeInternalOptions<TS.IndexSignatureDeclaration>);
	}

	// Handle the Node
	else if (isKeywordTypeNode(node, options.typescript)) {
		return cloneKeywordTypeNode(node, options as CloneNodeInternalOptions<TS.KeywordTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isImportTypeNode(node)) {
		return cloneImportTypeNode(node, options as CloneNodeInternalOptions<TS.ImportTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isThisTypeNode(node)) {
		return cloneThisTypeNode(node, options as CloneNodeInternalOptions<TS.ThisTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionTypeNode(node)) {
		return cloneFunctionTypeNode(node, options as CloneNodeInternalOptions<TS.FunctionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isConstructorTypeNode(node)) {
		return cloneConstructorTypeNode(node, options as CloneNodeInternalOptions<TS.ConstructorTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeReferenceNode(node)) {
		return cloneTypeReferenceNode(node, options as CloneNodeInternalOptions<TS.TypeReferenceNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypePredicateNode(node)) {
		return cloneTypePredicateNode(node, options as CloneNodeInternalOptions<TS.TypePredicateNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeQueryNode(node)) {
		return cloneTypeQueryNode(node, options as CloneNodeInternalOptions<TS.TypeQueryNode>);
	}

	// Handle the Node
	else if (options.typescript.isTypeLiteralNode(node)) {
		return cloneTypeLiteralNode(node, options as CloneNodeInternalOptions<TS.TypeLiteralNode>);
	}

	// Handle the Node
	else if (options.typescript.isArrayTypeNode(node)) {
		return cloneArrayTypeNode(node, options as CloneNodeInternalOptions<TS.ArrayTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isTupleTypeNode(node)) {
		return cloneTupleTypeNode(node, options as CloneNodeInternalOptions<TS.TupleTypeNode>);
	}

	// Handle the Node
	else if (isOptionalTypeNode(node, options.typescript)) {
		return cloneOptionalTypeNode(node, options as CloneNodeInternalOptions<TS.OptionalTypeNode>);
	}

	// Handle the Node
	else if (isRestTypeNode(node, options.typescript)) {
		return cloneRestTypeNode(node, options as CloneNodeInternalOptions<TS.RestTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isUnionTypeNode(node)) {
		return cloneUnionTypeNode(node, options as CloneNodeInternalOptions<TS.UnionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isIntersectionTypeNode(node)) {
		return cloneIntersectionTypeNode(node, options as CloneNodeInternalOptions<TS.IntersectionTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isConditionalTypeNode(node)) {
		return cloneConditionalTypeNode(node, options as CloneNodeInternalOptions<TS.ConditionalTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isInferTypeNode(node)) {
		return cloneInferTypeNode(node, options as CloneNodeInternalOptions<TS.InferTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isLiteralTypeNode(node)) {
		return cloneLiteralTypeNode(node, options as CloneNodeInternalOptions<TS.LiteralTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isStringLiteral(node)) {
		return cloneStringLiteral(node, options as CloneNodeInternalOptions<TS.StringLiteral>);
	}

	// Handle the Node
	else if (isBooleanLiteral(node, options.typescript)) {
		return cloneBooleanLiteral(node, options as CloneNodeInternalOptions<TS.BooleanLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isRegularExpressionLiteral(node)) {
		return cloneRegularExpressionLiteral(node, options as CloneNodeInternalOptions<TS.RegularExpressionLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isNoSubstitutionTemplateLiteral(node)) {
		return cloneNoSubstitutionTemplateLiteral(node, options as CloneNodeInternalOptions<TS.NoSubstitutionTemplateLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isNumericLiteral(node)) {
		return cloneNumericLiteral(node, options as CloneNodeInternalOptions<TS.NumericLiteral>);
	}

	// Handle the Node.
	// Note: isBigIntLiteral may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isBigIntLiteral?.(node)) {
		return cloneBigIntLiteral(node, options as CloneNodeInternalOptions<TS.BigIntLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isArrayLiteralExpression(node)) {
		return cloneArrayLiteralExpression(node, options as CloneNodeInternalOptions<TS.ArrayLiteralExpression>);
	}

	// Handle the Node
	else if (options.typescript.isObjectLiteralExpression(node)) {
		return cloneObjectLiteralExpression(node, options as CloneNodeInternalOptions<TS.ObjectLiteralExpression>);
	}

	// Handle the Node
	else if (options.typescript.isPrefixUnaryExpression(node)) {
		return clonePrefixUnaryExpression(node, options as CloneNodeInternalOptions<TS.PrefixUnaryExpression>);
	}

	// Handle the Node
	else if (options.typescript.isBlock(node)) {
		return cloneBlock(node, options as CloneNodeInternalOptions<TS.Block>);
	}

	// Handle the Node
	else if (options.typescript.isThrowStatement(node)) {
		return cloneThrowStatement(node, options as CloneNodeInternalOptions<TS.ThrowStatement>);
	}

	// Handle the Node
	else if (options.typescript.isReturnStatement(node)) {
		return cloneReturnStatement(node, options as CloneNodeInternalOptions<TS.ReturnStatement>);
	}

	// Handle the Node
	else if (options.typescript.isNewExpression(node)) {
		return cloneNewExpression(node, options as CloneNodeInternalOptions<TS.NewExpression>);
	}

	// Handle the Node
	else if (options.typescript.isCallExpression(node)) {
		return cloneCallExpression(node, options as CloneNodeInternalOptions<TS.CallExpression>);
	}

	// Handle the Node
	else if (options.typescript.isExpressionStatement(node)) {
		return cloneExpressionStatement(node, options as CloneNodeInternalOptions<TS.ExpressionStatement>);
	}

	// Handle the Node
	else if (options.typescript.isExpressionWithTypeArguments(node)) {
		return cloneExpressionWithTypeArguments(node, options as CloneNodeInternalOptions<TS.ExpressionWithTypeArguments>);
	}

	// Handle the Node
	else if (options.typescript.isPropertyAccessExpression(node)) {
		return clonePropertyAccessExpression(node, options as CloneNodeInternalOptions<TS.PropertyAccessExpression>);
	}

	// Handle the Node
	else if (options.typescript.isElementAccessExpression(node)) {
		return cloneElementAccessExpression(node, options as CloneNodeInternalOptions<TS.ElementAccessExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateExpression(node)) {
		return cloneTemplateExpression(node, options as CloneNodeInternalOptions<TS.TemplateExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateSpan(node)) {
		return cloneTemplateSpan(node, options as CloneNodeInternalOptions<TS.TemplateSpan>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateHead(node)) {
		return cloneTemplateHead(node, options as CloneNodeInternalOptions<TS.TemplateHead>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateMiddle(node)) {
		return cloneTemplateMiddle(node, options as CloneNodeInternalOptions<TS.TemplateMiddle>);
	}

	// Handle the Node
	else if (options.typescript.isTemplateTail(node)) {
		return cloneTemplateTail(node, options as CloneNodeInternalOptions<TS.TemplateTail>);
	}

	// Handle the Node
	else if (options.typescript.isConditionalExpression(node)) {
		return cloneConditionalExpression(node, options as CloneNodeInternalOptions<TS.ConditionalExpression>);
	}

	// Handle the Node
	else if (options.typescript.isBinaryExpression(node)) {
		return cloneBinaryExpression(node, options as CloneNodeInternalOptions<TS.BinaryExpression>);
	}

	// Handle the Node
	else if (options.typescript.isParenthesizedExpression(node)) {
		return cloneParenthesizedExpression(node, options as CloneNodeInternalOptions<TS.ParenthesizedExpression>);
	}

	// Handle the Node
	else if (options.typescript.isParenthesizedTypeNode(node)) {
		return cloneParenthesizedTypeNode(node, options as CloneNodeInternalOptions<TS.ParenthesizedTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isArrowFunction(node)) {
		return cloneArrowFunction(node, options as CloneNodeInternalOptions<TS.ArrowFunction>);
	}

	// Handle the Node
	else if (options.typescript.isClassDeclaration(node)) {
		return cloneClassDeclaration(node, options as CloneNodeInternalOptions<TS.ClassDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isClassExpression(node)) {
		return cloneClassExpression(node, options as CloneNodeInternalOptions<TS.ClassExpression>);
	}

	// Handle the Node
	else if (options.typescript.isEnumDeclaration(node)) {
		return cloneEnumDeclaration(node, options as CloneNodeInternalOptions<TS.EnumDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isEnumMember(node)) {
		return cloneEnumMember(node, options as CloneNodeInternalOptions<TS.EnumMember>);
	}

	// Handle the Node
	else if (options.typescript.isInterfaceDeclaration(node)) {
		return cloneInterfaceDeclaration(node, options as CloneNodeInternalOptions<TS.InterfaceDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isHeritageClause(node)) {
		return cloneHeritageClause(node, options as CloneNodeInternalOptions<TS.HeritageClause>);
	}

	// Handle the Node
	else if (options.typescript.isEmptyStatement(node)) {
		return cloneEmptyStatement(node, options as CloneNodeInternalOptions<TS.EmptyStatement>);
	}

	// Handle the Node
	else if (options.typescript.isAsExpression(node)) {
		return cloneAsExpression(node, options as CloneNodeInternalOptions<TS.AsExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeAssertion(node)) {
		return cloneTypeAssertion(node, options as CloneNodeInternalOptions<TS.TypeAssertion>);
	}

	// Handle the Node
	else if (options.typescript.isAwaitExpression(node)) {
		return cloneAwaitExpression(node, options as CloneNodeInternalOptions<TS.AwaitExpression>);
	}

	// Handle the Node
	else if (options.typescript.isYieldExpression(node)) {
		return cloneYieldExpression(node, options as CloneNodeInternalOptions<TS.YieldExpression>);
	}

	// Handle the Node
	else if (options.typescript.isForOfStatement(node)) {
		return cloneForOfStatement(node, options as CloneNodeInternalOptions<TS.ForOfStatement>);
	}

	// Handle the Node
	else if (options.typescript.isForInStatement(node)) {
		return cloneForInStatement(node, options as CloneNodeInternalOptions<TS.ForInStatement>);
	}

	// Handle the Node
	else if (options.typescript.isForStatement(node)) {
		return cloneForStatement(node, options as CloneNodeInternalOptions<TS.ForStatement>);
	}

	// Handle the Node
	else if (options.typescript.isWhileStatement(node)) {
		return cloneWhileStatement(node, options as CloneNodeInternalOptions<TS.WhileStatement>);
	}

	// Handle the Node
	else if (options.typescript.isLabeledStatement(node)) {
		return cloneLabeledStatement(node, options as CloneNodeInternalOptions<TS.LabeledStatement>);
	}

	// Handle the Node
	else if (options.typescript.isBreakStatement(node)) {
		return cloneBreakStatement(node, options as CloneNodeInternalOptions<TS.BreakStatement>);
	}

	// Handle the Node
	else if (options.typescript.isContinueStatement(node)) {
		return cloneContinueStatement(node, options as CloneNodeInternalOptions<TS.ContinueStatement>);
	}

	// Handle the Node
	else if (options.typescript.isIfStatement(node)) {
		return cloneIfStatement(node, options as CloneNodeInternalOptions<TS.IfStatement>);
	}

	// Handle the Node
	else if (options.typescript.isDoStatement(node)) {
		return cloneDoStatement(node, options as CloneNodeInternalOptions<TS.DoStatement>);
	}

	// Handle the Node
	else if (options.typescript.isNonNullExpression(node)) {
		return cloneNonNullExpression(node, options as CloneNodeInternalOptions<TS.NonNullExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeOperatorNode(node)) {
		return cloneTypeOperatorNode(node, options as CloneNodeInternalOptions<TS.TypeOperatorNode>);
	}

	// Handle the Node
	else if (options.typescript.isIndexedAccessTypeNode(node)) {
		return cloneIndexedAccessTypeNode(node, options as CloneNodeInternalOptions<TS.IndexedAccessTypeNode>);
	}

	// Handle the Node
	// Note: isMappedTypeNode may not be supported by the provided TypeScript version, so the invocation is optional.
	else if (options.typescript.isMappedTypeNode?.(node)) {
		return cloneMappedTypeNode(node, options as CloneNodeInternalOptions<TS.MappedTypeNode>);
	}

	// Handle the Node
	else if (options.typescript.isOmittedExpression(node)) {
		return cloneOmittedExpression(node, options as CloneNodeInternalOptions<TS.OmittedExpression>);
	}

	// Handle the Node
	else if (isPartiallyEmittedExpression(node, options.typescript)) {
		return clonePartiallyEmittedExpression(node, options as CloneNodeInternalOptions<TS.PartiallyEmittedExpression>);
	}

	// Handle the Node
	else if (options.typescript.isPostfixUnaryExpression(node)) {
		return clonePostfixUnaryExpression(node, options as CloneNodeInternalOptions<TS.PostfixUnaryExpression>);
	}

	// Handle the Node
	else if (isNullLiteral(node, options.typescript)) {
		return cloneNullLiteral(node, options as CloneNodeInternalOptions<TS.NullLiteral>);
	}

	// Handle the Node
	else if (isThisExpression(node, options.typescript)) {
		return cloneThisExpression(node, options as CloneNodeInternalOptions<TS.ThisExpression>);
	}

	// Handle the Node
	else if (isSuperExpression(node, options.typescript)) {
		return cloneSuperExpression(node, options as CloneNodeInternalOptions<TS.SuperExpression>);
	}

	// Handle the Node
	else if (options.typescript.isDeleteExpression(node)) {
		return cloneDeleteExpression(node, options as CloneNodeInternalOptions<TS.DeleteExpression>);
	}

	// Handle the Node
	else if (options.typescript.isTypeOfExpression(node)) {
		return cloneTypeOfExpression(node, options as CloneNodeInternalOptions<TS.TypeOfExpression>);
	}

	// Handle the Node
	else if (options.typescript.isVoidExpression(node)) {
		return cloneVoidExpression(node, options as CloneNodeInternalOptions<TS.VoidExpression>);
	}

	// Handle the Node
	else if (options.typescript.isFunctionExpression(node)) {
		return cloneFunctionExpression(node, options as CloneNodeInternalOptions<TS.FunctionExpression>);
	}

	// Handle the Node
	else if (options.typescript.isSpreadElement(node)) {
		return cloneSpreadElement(node, options as CloneNodeInternalOptions<TS.SpreadElement>);
	}

	// Handle the Node
	else if (options.typescript.isTaggedTemplateExpression(node)) {
		return cloneTaggedTemplateExpression(node, options as CloneNodeInternalOptions<TS.TaggedTemplateExpression>);
	}

	// Handle the Node
	else if (options.typescript.isMetaProperty(node)) {
		return cloneMetaProperty(node, options as CloneNodeInternalOptions<TS.MetaProperty>);
	}

	// Handle the Node
	else if (options.typescript.isJsxElement(node)) {
		return cloneJsxElement(node, options as CloneNodeInternalOptions<TS.JsxElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxAttributes(node)) {
		return cloneJsxAttributes(node, options as CloneNodeInternalOptions<TS.JsxAttributes>);
	}

	// Handle the Node
	else if (options.typescript.isJsxOpeningElement(node)) {
		return cloneJsxOpeningElement(node, options as CloneNodeInternalOptions<TS.JsxOpeningElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxSelfClosingElement(node)) {
		return cloneJsxSelfClosingElement(node, options as CloneNodeInternalOptions<TS.JsxSelfClosingElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxFragment(node)) {
		return cloneJsxFragment(node, options as CloneNodeInternalOptions<TS.JsxFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxOpeningFragment(node)) {
		return cloneJsxOpeningFragment(node, options as CloneNodeInternalOptions<TS.JsxOpeningFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxClosingFragment(node)) {
		return cloneJsxClosingFragment(node, options as CloneNodeInternalOptions<TS.JsxClosingFragment>);
	}

	// Handle the Node
	else if (options.typescript.isJsxAttribute(node)) {
		return cloneJsxAttribute(node, options as CloneNodeInternalOptions<TS.JsxAttribute>);
	}

	// Handle the Node
	else if (options.typescript.isJsxSpreadAttribute(node)) {
		return cloneJsxSpreadAttribute(node, options as CloneNodeInternalOptions<TS.JsxSpreadAttribute>);
	}

	// Handle the Node
	else if (options.typescript.isJsxClosingElement(node)) {
		return cloneJsxClosingElement(node, options as CloneNodeInternalOptions<TS.JsxClosingElement>);
	}

	// Handle the Node
	else if (options.typescript.isJsxExpression(node)) {
		return cloneJsxExpression(node, options as CloneNodeInternalOptions<TS.JsxExpression>);
	}

	// Handle the Node
	else if (options.typescript.isJsxText(node)) {
		return cloneJsxText(node, options as CloneNodeInternalOptions<TS.JsxText>);
	}

	// Handle the Node
	else if (isNotEmittedStatement(node, options.typescript)) {
		return cloneNotEmittedStatement(node, options as CloneNodeInternalOptions<TS.NotEmittedStatement>);
	}

	// Handle the Node
	else if (isCommaListExpression(node, options.typescript)) {
		return cloneCommaListExpression(node, options as CloneNodeInternalOptions<TS.CommaListExpression>);
	}

	// Handle the Node
	else if (options.typescript.isDebuggerStatement(node)) {
		return cloneDebuggerStatement(node, options as CloneNodeInternalOptions<TS.DebuggerStatement>);
	}

	// Handle the Node
	else if (options.typescript.isWithStatement(node)) {
		return cloneWithStatement(node, options as CloneNodeInternalOptions<TS.WithStatement>);
	}

	// Handle the Node
	else if (options.typescript.isSwitchStatement(node)) {
		return cloneSwitchStatement(node, options as CloneNodeInternalOptions<TS.SwitchStatement>);
	}

	// Handle the Node
	else if (options.typescript.isCaseBlock(node)) {
		return cloneCaseBlock(node, options as CloneNodeInternalOptions<TS.CaseBlock>);
	}

	// Handle the Node
	else if (options.typescript.isCaseClause(node)) {
		return cloneCaseClause(node, options as CloneNodeInternalOptions<TS.CaseClause>);
	}

	// Handle the Node
	else if (options.typescript.isDefaultClause(node)) {
		return cloneDefaultClause(node, options as CloneNodeInternalOptions<TS.DefaultClause>);
	}

	// Handle the Node
	else if (options.typescript.isTryStatement(node)) {
		return cloneTryStatement(node, options as CloneNodeInternalOptions<TS.TryStatement>);
	}

	// Handle the Node
	else if (options.typescript.isCatchClause(node)) {
		return cloneCatchClause(node, options as CloneNodeInternalOptions<TS.CatchClause>);
	}

	// Handle the Node
	else if (options.typescript.isModuleDeclaration(node)) {
		return cloneModuleDeclaration(node, options as CloneNodeInternalOptions<TS.ModuleDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isModuleBlock(node)) {
		return cloneModuleBlock(node, options as CloneNodeInternalOptions<TS.ModuleBlock>);
	}

	// Handle the Node
	else if (options.typescript.isImportEqualsDeclaration(node)) {
		return cloneImportEqualsDeclaration(node, options as CloneNodeInternalOptions<TS.ImportEqualsDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isExternalModuleReference(node)) {
		return cloneExternalModuleReference(node, options as CloneNodeInternalOptions<TS.ExternalModuleReference>);
	}

	// Handle the Node
	else if (options.typescript.isImportDeclaration(node)) {
		return cloneImportDeclaration(node, options as CloneNodeInternalOptions<TS.ImportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isImportClause(node)) {
		return cloneImportClause(node, options as CloneNodeInternalOptions<TS.ImportClause>);
	}

	// Handle the Node
	else if (options.typescript.isNamedImports(node)) {
		return cloneNamedImports(node, options as CloneNodeInternalOptions<TS.NamedImports>);
	}

	// Handle the Node
	else if (options.typescript.isNamespaceImport(node)) {
		return cloneNamespaceImport(node, options as CloneNodeInternalOptions<TS.NamespaceImport>);
	}

	// Handle the Node
	else if (options.typescript.isImportSpecifier(node)) {
		return cloneImportSpecifier(node, options as CloneNodeInternalOptions<TS.ImportSpecifier>);
	}

	// Handle the Node
	else if (options.typescript.isNamespaceExportDeclaration(node)) {
		return cloneNamespaceExportDeclaration(node, options as CloneNodeInternalOptions<TS.NamespaceExportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isExportDeclaration(node)) {
		return cloneExportDeclaration(node, options as CloneNodeInternalOptions<TS.ExportDeclaration>);
	}

	// Handle the Node
	else if (options.typescript.isNamedExports(node)) {
		return cloneNamedExports(node, options as CloneNodeInternalOptions<TS.NamedExports>);
	}

	// Handle the Node
	else if (options.typescript.isExportSpecifier(node)) {
		return cloneExportSpecifier(node, options as CloneNodeInternalOptions<TS.ExportSpecifier>);
	}

	// Handle the Node
	else if (options.typescript.isExportAssignment(node)) {
		return cloneExportAssignment(node, options as CloneNodeInternalOptions<TS.ExportAssignment>);
	}

	// Handle the Node
	else if (isJsDocComment(node, options.typescript)) {
		return cloneJsDoc(node, options as CloneNodeInternalOptions<TS.JSDoc>);
	}

	// Handle the Node
	else if (isJsDocParameterTag(node, options.typescript)) {
		return cloneJsDocParameterTag(node, options as CloneNodeInternalOptions<TS.JSDocParameterTag>);
	}

	// Handle the Node
	else if (isJsDocReturnTag(node, options.typescript)) {
		return cloneJsDocReturnTag(node, options as CloneNodeInternalOptions<TS.JSDocReturnTag>);
	}

	// Handle the Node
	else if (isJsDocTypeExpression(node, options.typescript)) {
		return cloneJsDocTypeExpression(node, options as CloneNodeInternalOptions<TS.JSDocTypeExpression>);
	}

	// Handle the Node
	else if (isJsDocEnumTag(node, options.typescript)) {
		return cloneJsDocEnumTag(node, options as CloneNodeInternalOptions<TS.JSDocEnumTag>);
	}

	// Handle the Node
	else if (isJsDocTypeTag(node, options.typescript)) {
		return cloneJsDocTypeTag(node, options as CloneNodeInternalOptions<TS.JSDocTypeTag>);
	}

	// Handle the Node
	else if (isJsDocAllType(node, options.typescript)) {
		return cloneJSDocAllType(node, options as CloneNodeInternalOptions<TS.JSDocAllType>);
	}

	// Handle the Node
	else if (isJsDocUnknownType(node, options.typescript)) {
		return cloneJSDocUnknownType(node, options as CloneNodeInternalOptions<TS.JSDocUnknownType>);
	}

	// Handle the Node
	else if (isJsDocNonNullableType(node, options.typescript)) {
		return cloneJSDocNonNullableType(node, options as CloneNodeInternalOptions<TS.JSDocNonNullableType>);
	}

	// Handle the Node
	else if (isJsDocNullableType(node, options.typescript)) {
		return cloneJSDocNullableType(node, options as CloneNodeInternalOptions<TS.JSDocNullableType>);
	}

	// Handle the Node
	else if (isJSDocOptionalType(node, options.typescript)) {
		return cloneJSDocOptionalType(node, options as CloneNodeInternalOptions<TS.JSDocOptionalType>);
	}

	// Handle the Node
	else if (isJSDocFunctionType(node, options.typescript)) {
		return cloneJSDocFunctionType(node, options as CloneNodeInternalOptions<TS.JSDocFunctionType>);
	}

	// Handle the Node
	else if (isJSDocVariadicType(node, options.typescript)) {
		return cloneJSDocVariadicType(node, options as CloneNodeInternalOptions<TS.JSDocVariadicType>);
	}

	// Handle the Node
	else if (isJSDocNamepathType(node, options.typescript)) {
		return cloneJSDocNamepathType(node, options as CloneNodeInternalOptions<TS.JSDocNamepathType>);
	}

	// Handle the Node
	else if (isJsDocUnknownTag(node, options.typescript)) {
		return cloneJsDocUnknownTag(node, options as CloneNodeInternalOptions<TS.JSDocUnknownTag>);
	}

	// Handle the Node
	else if (isJSDocAugmentsTag(node, options.typescript)) {
		return cloneJSDocAugmentsTag(node, options as CloneNodeInternalOptions<TS.JSDocAugmentsTag>);
	}

	// Handle the Node
	else if (isJSDocAuthorTag(node, options.typescript)) {
		return cloneJsDocAuthorTag(node, options as CloneNodeInternalOptions<TS.JSDocAuthorTag>);
	}

	// Handle the Node
	else if (isJSDocClassTag(node, options.typescript)) {
		return cloneJsDocClassTag(node, options as CloneNodeInternalOptions<TS.JSDocClassTag>);
	}

	// Handle the Node
	else if (isJSDocThisTag(node, options.typescript)) {
		return cloneJSDocThisTag(node, options as CloneNodeInternalOptions<TS.JSDocThisTag>);
	}

	// Handle the Node
	else if (isJSDocTemplateTag(node, options.typescript)) {
		return cloneJSDocTemplateTag(node, options as CloneNodeInternalOptions<TS.JSDocTemplateTag>);
	}

	// Handle the Node
	else if (isJSDocTypedefTag(node, options.typescript)) {
		return cloneJSDocTypedefTag(node, options as CloneNodeInternalOptions<TS.JSDocTypedefTag>);
	}

	// Handle the Node
	else if (isJSDocCallbackTag(node, options.typescript)) {
		return cloneJSDocCallbackTag(node, options as CloneNodeInternalOptions<TS.JSDocCallbackTag>);
	}

	// Handle the Node
	else if (isJSDocSignature(node, options.typescript)) {
		return cloneJSDocSignature(node, options as CloneNodeInternalOptions<TS.JSDocSignature>);
	}

	// Handle the Node
	else if (isJsDocPropertyTag(node, options.typescript)) {
		return cloneJSDocPropertyTag(node, options as CloneNodeInternalOptions<TS.JSDocPropertyTag>);
	}

	// Handle the Node
	else if (isJsDocTypeLiteral(node, options.typescript)) {
		return cloneJSDocTypeLiteral(node, options as CloneNodeInternalOptions<TS.JSDocTypeLiteral>);
	}

	// Handle the Node
	else if (options.typescript.isToken(node)) {
		return cloneToken(node, options as CloneNodeInternalOptions<TS.Token<TS.SyntaxKind>>);
	}

	throw new TypeError(`Could not handle Node of kind: '${TS.SyntaxKind[node.kind]}'`);
}

export function cloneNode<T extends MetaNode>(node: T, options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T>): T;
export function cloneNode<T extends MetaNode>(node: undefined, options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T>): undefined;
export function cloneNode<T extends MetaNode>(
	node: T | undefined,
	options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T>
): T | undefined;
export function cloneNode<T extends MetaNode>(
	node: T | undefined,
	options: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions<T> = {}
): T | undefined {
	if (node === undefined) return undefined;
	const internalOptions = toInternalOptions(node, options);

	const cloned = preserveComments(executeCloneNode(node, internalOptions), node, internalOptions) as T;

	return setParents(cloned, internalOptions);
}
