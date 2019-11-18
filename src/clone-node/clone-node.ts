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

export function cloneNode<T extends TS.Node>(node: T, options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions): T;
export function cloneNode<T extends TS.NodeFlags>(node: T, options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions): T;
export function cloneNode<T extends TS.SyntaxKind>(node: T, options?: Partial<CloneNodeOptions> | CloneNodeInternalOptions): T;
export function cloneNode<T extends TS.Node>(node: undefined, options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions): undefined;
export function cloneNode<T extends TS.Node>(node: T | undefined, options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions): T | undefined;
export function cloneNode<T extends TS.Node>(
	node: TS.SyntaxKind | undefined,
	options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions
): TS.SyntaxKind | undefined;
export function cloneNode<T extends TS.Node>(
	node: TS.NodeFlags | undefined,
	options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions
): TS.NodeFlags | undefined;
export function cloneNode<T extends TS.Node>(
	node: TS.NodeFlags | T | undefined,
	options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions
): T | TS.NodeFlags | undefined;
export function cloneNode<T extends TS.Node>(
	node: TS.SyntaxKind | TS.NodeFlags | T | undefined,
	options?: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions
): TS.SyntaxKind | T | TS.NodeFlags | undefined;
export function cloneNode(
	node: TS.SyntaxKind | TS.NodeFlags | TS.Node | undefined,
	options: Partial<CloneNodeOptions> | CloneNodeInternalOptions = {}
): TS.SyntaxKind | TS.Node | TS.NodeFlags | undefined {
	if (node === undefined) return undefined;
	if (typeof node === "number") return node;
	const internalOptions = toInternalOptions(options);

	// Handle the Node
	if (internalOptions.typescript.isSourceFile(node)) {
		return cloneSourceFile(node, internalOptions as CloneNodeInternalOptions<TS.SourceFile>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isIdentifier(node)) {
		return cloneIdentifier(node, internalOptions as CloneNodeInternalOptions<TS.Identifier>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeAliasDeclaration(node)) {
		return cloneTypeAliasDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.TypeAliasDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeParameterDeclaration(node)) {
		return cloneTypeParameterDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.TypeParameterDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isDecorator(node)) {
		return cloneDecorator(node, internalOptions as CloneNodeInternalOptions<TS.Decorator>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isQualifiedName(node)) {
		return cloneQualifiedName(node, internalOptions as CloneNodeInternalOptions<TS.QualifiedName>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isComputedPropertyName(node)) {
		return cloneComputedPropertyName(node, internalOptions as CloneNodeInternalOptions<TS.ComputedPropertyName>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isCallSignatureDeclaration(node)) {
		return cloneCallSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.CallSignatureDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isConstructSignatureDeclaration(node)) {
		return cloneConstructSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ConstructSignatureDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isVariableDeclaration(node)) {
		return cloneVariableDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.VariableDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isVariableDeclarationList(node)) {
		return cloneVariableDeclarationList(node, internalOptions as CloneNodeInternalOptions<TS.VariableDeclarationList>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isVariableStatement(node)) {
		return cloneVariableStatement(node, internalOptions as CloneNodeInternalOptions<TS.VariableStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isParameter(node)) {
		return cloneParameterDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ParameterDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isBindingElement(node)) {
		return cloneBindingElement(node, internalOptions as CloneNodeInternalOptions<TS.BindingElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPropertySignature(node)) {
		return clonePropertySignature(node, internalOptions as CloneNodeInternalOptions<TS.PropertySignature>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPropertyDeclaration(node)) {
		return clonePropertyDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.PropertyDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPropertyAssignment(node)) {
		return clonePropertyAssignment(node, internalOptions as CloneNodeInternalOptions<TS.PropertyAssignment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isShorthandPropertyAssignment(node)) {
		return cloneShorthandPropertyAssignment(node, internalOptions as CloneNodeInternalOptions<TS.ShorthandPropertyAssignment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isSpreadAssignment(node)) {
		return cloneSpreadAssignment(node, internalOptions as CloneNodeInternalOptions<TS.SpreadAssignment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isObjectBindingPattern(node)) {
		return cloneObjectBindingPattern(node, internalOptions as CloneNodeInternalOptions<TS.ObjectBindingPattern>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isArrayBindingPattern(node)) {
		return cloneArrayBindingPattern(node, internalOptions as CloneNodeInternalOptions<TS.ArrayBindingPattern>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isFunctionDeclaration(node)) {
		return cloneFunctionDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.FunctionDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isMethodSignature(node)) {
		return cloneMethodSignature(node, internalOptions as CloneNodeInternalOptions<TS.MethodSignature>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isMethodDeclaration(node)) {
		return cloneMethodDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.MethodDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isConstructorDeclaration(node)) {
		return cloneConstructorDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ConstructorDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isSemicolonClassElement(node)) {
		return cloneSemicolonClassElement(node, internalOptions as CloneNodeInternalOptions<TS.SemicolonClassElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isGetAccessorDeclaration(node)) {
		return cloneGetAccessorDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.GetAccessorDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isSetAccessorDeclaration(node)) {
		return cloneSetAccessorDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.SetAccessorDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isIndexSignatureDeclaration(node)) {
		return cloneIndexSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.IndexSignatureDeclaration>);
	}

	// Handle the Node
	else if (isKeywordTypeNode(node, internalOptions.typescript)) {
		return cloneKeywordTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.KeywordTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isImportTypeNode(node)) {
		return cloneImportTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ImportTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isThisTypeNode(node)) {
		return cloneThisTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ThisTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isFunctionTypeNode(node)) {
		return cloneFunctionTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.FunctionTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isConstructorTypeNode(node)) {
		return cloneConstructorTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ConstructorTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeReferenceNode(node)) {
		return cloneTypeReferenceNode(node, internalOptions as CloneNodeInternalOptions<TS.TypeReferenceNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypePredicateNode(node)) {
		return cloneTypePredicateNode(node, internalOptions as CloneNodeInternalOptions<TS.TypePredicateNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeQueryNode(node)) {
		return cloneTypeQueryNode(node, internalOptions as CloneNodeInternalOptions<TS.TypeQueryNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeLiteralNode(node)) {
		return cloneTypeLiteralNode(node, internalOptions as CloneNodeInternalOptions<TS.TypeLiteralNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isArrayTypeNode(node)) {
		return cloneArrayTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ArrayTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTupleTypeNode(node)) {
		return cloneTupleTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.TupleTypeNode>);
	}

	// Handle the Node
	else if (isOptionalTypeNode(node, internalOptions.typescript)) {
		return cloneOptionalTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.OptionalTypeNode>);
	}

	// Handle the Node
	else if (isRestTypeNode(node, internalOptions.typescript)) {
		return cloneRestTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.RestTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isUnionTypeNode(node)) {
		return cloneUnionTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.UnionTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isIntersectionTypeNode(node)) {
		return cloneIntersectionTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.IntersectionTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isConditionalTypeNode(node)) {
		return cloneConditionalTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ConditionalTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isInferTypeNode(node)) {
		return cloneInferTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.InferTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isLiteralTypeNode(node)) {
		return cloneLiteralTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.LiteralTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isStringLiteral(node)) {
		return cloneStringLiteral(node, internalOptions as CloneNodeInternalOptions<TS.StringLiteral>);
	}

	// Handle the Node
	else if (isBooleanLiteral(node, internalOptions.typescript)) {
		return cloneBooleanLiteral(node, internalOptions as CloneNodeInternalOptions<TS.BooleanLiteral>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isRegularExpressionLiteral(node)) {
		return cloneRegularExpressionLiteral(node, internalOptions as CloneNodeInternalOptions<TS.RegularExpressionLiteral>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNoSubstitutionTemplateLiteral(node)) {
		return cloneNoSubstitutionTemplateLiteral(node, internalOptions as CloneNodeInternalOptions<TS.NoSubstitutionTemplateLiteral>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNumericLiteral(node)) {
		return cloneNumericLiteral(node, internalOptions as CloneNodeInternalOptions<TS.NumericLiteral>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isBigIntLiteral(node)) {
		return cloneBigIntLiteral(node, internalOptions as CloneNodeInternalOptions<TS.BigIntLiteral>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isArrayLiteralExpression(node)) {
		return cloneArrayLiteralExpression(node, internalOptions as CloneNodeInternalOptions<TS.ArrayLiteralExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isObjectLiteralExpression(node)) {
		return cloneObjectLiteralExpression(node, internalOptions as CloneNodeInternalOptions<TS.ObjectLiteralExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPrefixUnaryExpression(node)) {
		return clonePrefixUnaryExpression(node, internalOptions as CloneNodeInternalOptions<TS.PrefixUnaryExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isBlock(node)) {
		return cloneBlock(node, internalOptions as CloneNodeInternalOptions<TS.Block>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isThrowStatement(node)) {
		return cloneThrowStatement(node, internalOptions as CloneNodeInternalOptions<TS.ThrowStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isReturnStatement(node)) {
		return cloneReturnStatement(node, internalOptions as CloneNodeInternalOptions<TS.ReturnStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNewExpression(node)) {
		return cloneNewExpression(node, internalOptions as CloneNodeInternalOptions<TS.NewExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isCallExpression(node)) {
		return cloneCallExpression(node, internalOptions as CloneNodeInternalOptions<TS.CallExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExpressionStatement(node)) {
		return cloneExpressionStatement(node, internalOptions as CloneNodeInternalOptions<TS.ExpressionStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExpressionWithTypeArguments(node)) {
		return cloneExpressionWithTypeArguments(node, internalOptions as CloneNodeInternalOptions<TS.ExpressionWithTypeArguments>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPropertyAccessExpression(node)) {
		return clonePropertyAccessExpression(node, internalOptions as CloneNodeInternalOptions<TS.PropertyAccessExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isElementAccessExpression(node)) {
		return cloneElementAccessExpression(node, internalOptions as CloneNodeInternalOptions<TS.ElementAccessExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTemplateExpression(node)) {
		return cloneTemplateExpression(node, internalOptions as CloneNodeInternalOptions<TS.TemplateExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTemplateSpan(node)) {
		return cloneTemplateSpan(node, internalOptions as CloneNodeInternalOptions<TS.TemplateSpan>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTemplateHead(node)) {
		return cloneTemplateHead(node, internalOptions as CloneNodeInternalOptions<TS.TemplateHead>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTemplateMiddle(node)) {
		return cloneTemplateMiddle(node, internalOptions as CloneNodeInternalOptions<TS.TemplateMiddle>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTemplateTail(node)) {
		return cloneTemplateTail(node, internalOptions as CloneNodeInternalOptions<TS.TemplateTail>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isConditionalExpression(node)) {
		return cloneConditionalExpression(node, internalOptions as CloneNodeInternalOptions<TS.ConditionalExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isBinaryExpression(node)) {
		return cloneBinaryExpression(node, internalOptions as CloneNodeInternalOptions<TS.BinaryExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isParenthesizedExpression(node)) {
		return cloneParenthesizedExpression(node, internalOptions as CloneNodeInternalOptions<TS.ParenthesizedExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isParenthesizedTypeNode(node)) {
		return cloneParenthesizedTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.ParenthesizedTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isArrowFunction(node)) {
		return cloneArrowFunction(node, internalOptions as CloneNodeInternalOptions<TS.ArrowFunction>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isClassDeclaration(node)) {
		return cloneClassDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ClassDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isClassExpression(node)) {
		return cloneClassExpression(node, internalOptions as CloneNodeInternalOptions<TS.ClassExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isEnumDeclaration(node)) {
		return cloneEnumDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.EnumDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isEnumMember(node)) {
		return cloneEnumMember(node, internalOptions as CloneNodeInternalOptions<TS.EnumMember>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isInterfaceDeclaration(node)) {
		return cloneInterfaceDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.InterfaceDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isHeritageClause(node)) {
		return cloneHeritageClause(node, internalOptions as CloneNodeInternalOptions<TS.HeritageClause>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isEmptyStatement(node)) {
		return cloneEmptyStatement(node, internalOptions as CloneNodeInternalOptions<TS.EmptyStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isAsExpression(node)) {
		return cloneAsExpression(node, internalOptions as CloneNodeInternalOptions<TS.AsExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeAssertion(node)) {
		return cloneTypeAssertion(node, internalOptions as CloneNodeInternalOptions<TS.TypeAssertion>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isAwaitExpression(node)) {
		return cloneAwaitExpression(node, internalOptions as CloneNodeInternalOptions<TS.AwaitExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isYieldExpression(node)) {
		return cloneYieldExpression(node, internalOptions as CloneNodeInternalOptions<TS.YieldExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isForOfStatement(node)) {
		return cloneForOfStatement(node, internalOptions as CloneNodeInternalOptions<TS.ForOfStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isForInStatement(node)) {
		return cloneForInStatement(node, internalOptions as CloneNodeInternalOptions<TS.ForInStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isForStatement(node)) {
		return cloneForStatement(node, internalOptions as CloneNodeInternalOptions<TS.ForStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isWhileStatement(node)) {
		return cloneWhileStatement(node, internalOptions as CloneNodeInternalOptions<TS.WhileStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isLabeledStatement(node)) {
		return cloneLabeledStatement(node, internalOptions as CloneNodeInternalOptions<TS.LabeledStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isBreakStatement(node)) {
		return cloneBreakStatement(node, internalOptions as CloneNodeInternalOptions<TS.BreakStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isContinueStatement(node)) {
		return cloneContinueStatement(node, internalOptions as CloneNodeInternalOptions<TS.ContinueStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isIfStatement(node)) {
		return cloneIfStatement(node, internalOptions as CloneNodeInternalOptions<TS.IfStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isDoStatement(node)) {
		return cloneDoStatement(node, internalOptions as CloneNodeInternalOptions<TS.DoStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNonNullExpression(node)) {
		return cloneNonNullExpression(node, internalOptions as CloneNodeInternalOptions<TS.NonNullExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeOperatorNode(node)) {
		return cloneTypeOperatorNode(node, internalOptions as CloneNodeInternalOptions<TS.TypeOperatorNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isIndexedAccessTypeNode(node)) {
		return cloneIndexedAccessTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.IndexedAccessTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isMappedTypeNode(node)) {
		return cloneMappedTypeNode(node, internalOptions as CloneNodeInternalOptions<TS.MappedTypeNode>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isOmittedExpression(node)) {
		return cloneOmittedExpression(node, internalOptions as CloneNodeInternalOptions<TS.OmittedExpression>);
	}

	// Handle the Node
	else if (isPartiallyEmittedExpression(node, internalOptions.typescript)) {
		return clonePartiallyEmittedExpression(node, internalOptions as CloneNodeInternalOptions<TS.PartiallyEmittedExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isPostfixUnaryExpression(node)) {
		return clonePostfixUnaryExpression(node, internalOptions as CloneNodeInternalOptions<TS.PostfixUnaryExpression>);
	}

	// Handle the Node
	else if (isNullLiteral(node, internalOptions.typescript)) {
		return cloneNullLiteral(node, internalOptions as CloneNodeInternalOptions<TS.NullLiteral>);
	}

	// Handle the Node
	else if (isThisExpression(node, internalOptions.typescript)) {
		return cloneThisExpression(node, internalOptions as CloneNodeInternalOptions<TS.ThisExpression>);
	}

	// Handle the Node
	else if (isSuperExpression(node, internalOptions.typescript)) {
		return cloneSuperExpression(node, internalOptions as CloneNodeInternalOptions<TS.SuperExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isDeleteExpression(node)) {
		return cloneDeleteExpression(node, internalOptions as CloneNodeInternalOptions<TS.DeleteExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTypeOfExpression(node)) {
		return cloneTypeOfExpression(node, internalOptions as CloneNodeInternalOptions<TS.TypeOfExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isVoidExpression(node)) {
		return cloneVoidExpression(node, internalOptions as CloneNodeInternalOptions<TS.VoidExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isFunctionExpression(node)) {
		return cloneFunctionExpression(node, internalOptions as CloneNodeInternalOptions<TS.FunctionExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isSpreadElement(node)) {
		return cloneSpreadElement(node, internalOptions as CloneNodeInternalOptions<TS.SpreadElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTaggedTemplateExpression(node)) {
		return cloneTaggedTemplateExpression(node, internalOptions as CloneNodeInternalOptions<TS.TaggedTemplateExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isMetaProperty(node)) {
		return cloneMetaProperty(node, internalOptions as CloneNodeInternalOptions<TS.MetaProperty>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxElement(node)) {
		return cloneJsxElement(node, internalOptions as CloneNodeInternalOptions<TS.JsxElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxAttributes(node)) {
		return cloneJsxAttributes(node, internalOptions as CloneNodeInternalOptions<TS.JsxAttributes>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxOpeningElement(node)) {
		return cloneJsxOpeningElement(node, internalOptions as CloneNodeInternalOptions<TS.JsxOpeningElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxSelfClosingElement(node)) {
		return cloneJsxSelfClosingElement(node, internalOptions as CloneNodeInternalOptions<TS.JsxSelfClosingElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxFragment(node)) {
		return cloneJsxFragment(node, internalOptions as CloneNodeInternalOptions<TS.JsxFragment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxOpeningFragment(node)) {
		return cloneJsxOpeningFragment(node, internalOptions as CloneNodeInternalOptions<TS.JsxOpeningFragment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxClosingFragment(node)) {
		return cloneJsxClosingFragment(node, internalOptions as CloneNodeInternalOptions<TS.JsxClosingFragment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxAttribute(node)) {
		return cloneJsxAttribute(node, internalOptions as CloneNodeInternalOptions<TS.JsxAttribute>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxSpreadAttribute(node)) {
		return cloneJsxSpreadAttribute(node, internalOptions as CloneNodeInternalOptions<TS.JsxSpreadAttribute>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxClosingElement(node)) {
		return cloneJsxClosingElement(node, internalOptions as CloneNodeInternalOptions<TS.JsxClosingElement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxExpression(node)) {
		return cloneJsxExpression(node, internalOptions as CloneNodeInternalOptions<TS.JsxExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isJsxText(node)) {
		return cloneJsxText(node, internalOptions as CloneNodeInternalOptions<TS.JsxText>);
	}

	// Handle the Node
	else if (isNotEmittedStatement(node, internalOptions.typescript)) {
		return cloneNotEmittedStatement(node, internalOptions as CloneNodeInternalOptions<TS.NotEmittedStatement>);
	}

	// Handle the Node
	else if (isCommaListExpression(node, internalOptions.typescript)) {
		return cloneCommaListExpression(node, internalOptions as CloneNodeInternalOptions<TS.CommaListExpression>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isDebuggerStatement(node)) {
		return cloneDebuggerStatement(node, internalOptions as CloneNodeInternalOptions<TS.DebuggerStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isWithStatement(node)) {
		return cloneWithStatement(node, internalOptions as CloneNodeInternalOptions<TS.WithStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isSwitchStatement(node)) {
		return cloneSwitchStatement(node, internalOptions as CloneNodeInternalOptions<TS.SwitchStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isCaseBlock(node)) {
		return cloneCaseBlock(node, internalOptions as CloneNodeInternalOptions<TS.CaseBlock>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isCaseClause(node)) {
		return cloneCaseClause(node, internalOptions as CloneNodeInternalOptions<TS.CaseClause>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isDefaultClause(node)) {
		return cloneDefaultClause(node, internalOptions as CloneNodeInternalOptions<TS.DefaultClause>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isTryStatement(node)) {
		return cloneTryStatement(node, internalOptions as CloneNodeInternalOptions<TS.TryStatement>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isCatchClause(node)) {
		return cloneCatchClause(node, internalOptions as CloneNodeInternalOptions<TS.CatchClause>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isModuleDeclaration(node)) {
		return cloneModuleDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ModuleDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isModuleBlock(node)) {
		return cloneModuleBlock(node, internalOptions as CloneNodeInternalOptions<TS.ModuleBlock>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isImportEqualsDeclaration(node)) {
		return cloneImportEqualsDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ImportEqualsDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExternalModuleReference(node)) {
		return cloneExternalModuleReference(node, internalOptions as CloneNodeInternalOptions<TS.ExternalModuleReference>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isImportDeclaration(node)) {
		return cloneImportDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ImportDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isImportClause(node)) {
		return cloneImportClause(node, internalOptions as CloneNodeInternalOptions<TS.ImportClause>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNamedImports(node)) {
		return cloneNamedImports(node, internalOptions as CloneNodeInternalOptions<TS.NamedImports>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNamespaceImport(node)) {
		return cloneNamespaceImport(node, internalOptions as CloneNodeInternalOptions<TS.NamespaceImport>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isImportSpecifier(node)) {
		return cloneImportSpecifier(node, internalOptions as CloneNodeInternalOptions<TS.ImportSpecifier>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNamespaceExportDeclaration(node)) {
		return cloneNamespaceExportDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.NamespaceExportDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExportDeclaration(node)) {
		return cloneExportDeclaration(node, internalOptions as CloneNodeInternalOptions<TS.ExportDeclaration>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isNamedExports(node)) {
		return cloneNamedExports(node, internalOptions as CloneNodeInternalOptions<TS.NamedExports>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExportSpecifier(node)) {
		return cloneExportSpecifier(node, internalOptions as CloneNodeInternalOptions<TS.ExportSpecifier>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isExportAssignment(node)) {
		return cloneExportAssignment(node, internalOptions as CloneNodeInternalOptions<TS.ExportAssignment>);
	}

	// Handle the Node
	else if (internalOptions.typescript.isToken(node)) {
		return cloneToken(node, internalOptions as CloneNodeInternalOptions<TS.Token<TS.SyntaxKind>>);
	}

	throw new TypeError(`Could not handle Node of kind: '${TS.SyntaxKind[node.kind]}'`);
}
