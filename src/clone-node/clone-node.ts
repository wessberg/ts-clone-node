import {
	ArrayBindingPattern, ArrayLiteralExpression, ArrayTypeNode, ArrowFunction, AsExpression, AwaitExpression, BigIntLiteral, BinaryExpression, BindingElement, Block, BooleanLiteral, BreakStatement, CallExpression, CallSignatureDeclaration, CaseBlock, CaseClause, CatchClause, ClassDeclaration, ClassExpression, CommaListExpression, ComputedPropertyName, ConditionalExpression, ConditionalTypeNode, ConstructorDeclaration, ConstructorTypeNode, ConstructSignatureDeclaration, ContinueStatement, DebuggerStatement, Decorator, DefaultClause, DeleteExpression, DoStatement, ElementAccessExpression, EmptyStatement, EnumDeclaration, EnumMember, ExportAssignment, ExportDeclaration, ExportSpecifier, ExpressionStatement, ExpressionWithTypeArguments, ExternalModuleReference, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, FunctionTypeNode, GetAccessorDeclaration, HeritageClause, Identifier, IfStatement, ImportClause, ImportDeclaration, ImportEqualsDeclaration, ImportSpecifier, ImportTypeNode, IndexedAccessTypeNode, IndexSignatureDeclaration, InferTypeNode, InterfaceDeclaration, IntersectionTypeNode, isArrayBindingPattern, isArrayLiteralExpression, isArrayTypeNode, isArrowFunction, isAsExpression, isAwaitExpression, isBigIntLiteral, isBinaryExpression, isBindingElement, isBlock, isBreakStatement, isCallExpression, isCallSignatureDeclaration, isCaseBlock, isCaseClause, isCatchClause, isClassDeclaration, isClassExpression, isComputedPropertyName, isConditionalExpression, isConditionalTypeNode, isConstructorDeclaration, isConstructorTypeNode, isConstructSignatureDeclaration, isContinueStatement, isDebuggerStatement, isDecorator, isDefaultClause, isDeleteExpression, isDoStatement, isElementAccessExpression, isEmptyStatement, isEnumDeclaration, isEnumMember, isExportAssignment, isExportDeclaration, isExportSpecifier, isExpressionStatement, isExpressionWithTypeArguments, isExternalModuleReference, isForInStatement, isForOfStatement, isForStatement, isFunctionDeclaration, isFunctionExpression, isFunctionTypeNode, isGetAccessorDeclaration, isHeritageClause, isIdentifier, isIfStatement, isImportClause, isImportDeclaration, isImportEqualsDeclaration, isImportSpecifier, isImportTypeNode, isIndexedAccessTypeNode, isIndexSignatureDeclaration, isInferTypeNode, isInterfaceDeclaration, isIntersectionTypeNode, isJsxAttribute, isJsxAttributes, isJsxClosingElement, isJsxClosingFragment, isJsxElement, isJsxExpression, isJsxFragment, isJsxOpeningElement, isJsxOpeningFragment, isJsxSelfClosingElement, isJsxSpreadAttribute, isJsxText, isLabeledStatement, isLiteralTypeNode, isMappedTypeNode, isMetaProperty, isMethodDeclaration, isMethodSignature, isModuleBlock, isModuleDeclaration, isNamedExports, isNamedImports, isNamespaceExportDeclaration, isNamespaceImport, isNewExpression, isNonNullExpression, isNoSubstitutionTemplateLiteral, isNumericLiteral, isObjectBindingPattern, isObjectLiteralExpression, isOmittedExpression, isParameter, isParenthesizedExpression, isParenthesizedTypeNode, isPostfixUnaryExpression, isPrefixUnaryExpression, isPropertyAccessExpression, isPropertyAssignment, isPropertyDeclaration, isPropertySignature, isQualifiedName, isRegularExpressionLiteral, isReturnStatement, isSemicolonClassElement, isSetAccessorDeclaration, isShorthandPropertyAssignment, isSourceFile, isSpreadAssignment, isSpreadElement, isStringLiteral, isSwitchStatement, isTaggedTemplateExpression, isTemplateExpression, isTemplateHead, isTemplateMiddle, isTemplateSpan, isTemplateTail, isThisTypeNode, isThrowStatement, isToken, isTryStatement, isTupleTypeNode, isTypeAliasDeclaration, isTypeAssertion, isTypeLiteralNode, isTypeOfExpression, isTypeOperatorNode, isTypeParameterDeclaration, isTypePredicateNode, isTypeQueryNode, isTypeReferenceNode, isUnionTypeNode, isVariableDeclaration, isVariableDeclarationList, isVariableStatement, isVoidExpression, isWhileStatement, isWithStatement, isYieldExpression, JsxAttribute, JsxAttributes, JsxClosingElement, JsxClosingFragment, JsxElement, JsxExpression, JsxFragment, JsxOpeningElement, JsxOpeningFragment, JsxSelfClosingElement, JsxSpreadAttribute, JsxText, KeywordTypeNode, LabeledStatement, LiteralTypeNode, MappedTypeNode, MetaProperty, MethodDeclaration, MethodSignature, ModuleBlock, ModuleDeclaration, NamedExports, NamedImports, NamespaceExportDeclaration, NamespaceImport, NewExpression, Node, NodeFlags, NonNullExpression, NoSubstitutionTemplateLiteral, NotEmittedStatement, NullLiteral, NumericLiteral, ObjectBindingPattern, ObjectLiteralExpression, OmittedExpression, OptionalTypeNode, ParameterDeclaration, ParenthesizedExpression, ParenthesizedTypeNode, PartiallyEmittedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, PropertyAssignment, PropertyDeclaration, PropertySignature, QualifiedName, RegularExpressionLiteral, RestTypeNode, ReturnStatement, SemicolonClassElement, SetAccessorDeclaration, ShorthandPropertyAssignment, SourceFile, SpreadAssignment, SpreadElement, StringLiteral, SuperExpression, SwitchStatement, SyntaxKind, TaggedTemplateExpression, TemplateExpression, TemplateHead, TemplateMiddle, TemplateSpan, TemplateTail, ThisExpression, ThisTypeNode, ThrowStatement, Token, TryStatement, TupleTypeNode, TypeAliasDeclaration, TypeAssertion, TypeLiteralNode, TypeOfExpression, TypeOperatorNode, TypeParameterDeclaration, TypePredicateNode, TypeQueryNode, TypeReferenceNode, UnionTypeNode, VariableDeclaration, VariableDeclarationList, VariableStatement, VoidExpression, WhileStatement, WithStatement, YieldExpression
} from "typescript";
import {cloneIdentifier} from "./clone-identifier";
import {cloneTypeAliasDeclaration} from "./clone-type-alias-declaration";
import {CloneNodeInternalOptions, CloneNodeOptions, toInternalOptions} from "./clone-node-options";
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

export function cloneNode<T extends Node> (node: T, options?: Partial<CloneNodeOptions<T>>): T;
export function cloneNode<T extends NodeFlags> (node: T, options?: Partial<CloneNodeOptions<Node>>): T;
export function cloneNode<T extends SyntaxKind> (node: T, options?: Partial<CloneNodeOptions<Node>>): T;
export function cloneNode<T extends Node> (node: undefined, options?: Partial<CloneNodeOptions<T>>): undefined;
export function cloneNode<T extends Node> (node: T|undefined, options?: Partial<CloneNodeOptions<T>>): T|undefined;
export function cloneNode<T extends Node> (node: SyntaxKind|undefined, options?: Partial<CloneNodeOptions<T>>): SyntaxKind|undefined;
export function cloneNode<T extends Node> (node: NodeFlags|undefined, options?: Partial<CloneNodeOptions<T>>): NodeFlags|undefined;
export function cloneNode<T extends Node> (node: NodeFlags|T|undefined, options?: Partial<CloneNodeOptions<T>>): T|NodeFlags|undefined;
export function cloneNode<T extends Node> (node: SyntaxKind|NodeFlags|T|undefined, options?: Partial<CloneNodeOptions<T>>): SyntaxKind|T|NodeFlags|undefined;
export function cloneNode (node: SyntaxKind|NodeFlags|Node|undefined, options: Partial<CloneNodeOptions<Node>> = {}): SyntaxKind|Node|NodeFlags|undefined {
	if (node === undefined) return undefined;
	if (typeof node === "number") return node;
	const internalOptions = toInternalOptions(options);

	// Handle the Node
	if (isSourceFile(node)) {
		return cloneSourceFile(node, internalOptions as CloneNodeInternalOptions<SourceFile>);
	}

	// Handle the Node
	else if (isIdentifier(node)) {
		return cloneIdentifier(node, internalOptions as CloneNodeInternalOptions<Identifier>);
	}

	// Handle the Node
	else if (isTypeAliasDeclaration(node)) {
		return cloneTypeAliasDeclaration(node, internalOptions as CloneNodeInternalOptions<TypeAliasDeclaration>);
	}

	// Handle the Node
	else if (isTypeParameterDeclaration(node)) {
		return cloneTypeParameterDeclaration(node, internalOptions as CloneNodeInternalOptions<TypeParameterDeclaration>);
	}

	// Handle the Node
	else if (isDecorator(node)) {
		return cloneDecorator(node, internalOptions as CloneNodeInternalOptions<Decorator>);
	}

	// Handle the Node
	else if (isQualifiedName(node)) {
		return cloneQualifiedName(node, internalOptions as CloneNodeInternalOptions<QualifiedName>);
	}

	// Handle the Node
	else if (isComputedPropertyName(node)) {
		return cloneComputedPropertyName(node, internalOptions as CloneNodeInternalOptions<ComputedPropertyName>);
	}

	// Handle the Node
	else if (isCallSignatureDeclaration(node)) {
		return cloneCallSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<CallSignatureDeclaration>);
	}

	// Handle the Node
	else if (isConstructSignatureDeclaration(node)) {
		return cloneConstructSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<ConstructSignatureDeclaration>);
	}

	// Handle the Node
	else if (isVariableDeclaration(node)) {
		return cloneVariableDeclaration(node, internalOptions as CloneNodeInternalOptions<VariableDeclaration>);
	}

	// Handle the Node
	else if (isVariableDeclarationList(node)) {
		return cloneVariableDeclarationList(node, internalOptions as CloneNodeInternalOptions<VariableDeclarationList>);
	}

	// Handle the Node
	else if (isVariableStatement(node)) {
		return cloneVariableStatement(node, internalOptions as CloneNodeInternalOptions<VariableStatement>);
	}

	// Handle the Node
	else if (isParameter(node)) {
		return cloneParameterDeclaration(node, internalOptions as CloneNodeInternalOptions<ParameterDeclaration>);
	}

	// Handle the Node
	else if (isBindingElement(node)) {
		return cloneBindingElement(node, internalOptions as CloneNodeInternalOptions<BindingElement>);
	}

	// Handle the Node
	else if (isPropertySignature(node)) {
		return clonePropertySignature(node, internalOptions as CloneNodeInternalOptions<PropertySignature>);
	}

	// Handle the Node
	else if (isPropertyDeclaration(node)) {
		return clonePropertyDeclaration(node, internalOptions as CloneNodeInternalOptions<PropertyDeclaration>);
	}

	// Handle the Node
	else if (isPropertyAssignment(node)) {
		return clonePropertyAssignment(node, internalOptions as CloneNodeInternalOptions<PropertyAssignment>);
	}

	// Handle the Node
	else if (isShorthandPropertyAssignment(node)) {
		return cloneShorthandPropertyAssignment(node, internalOptions as CloneNodeInternalOptions<ShorthandPropertyAssignment>);
	}

	// Handle the Node
	else if (isSpreadAssignment(node)) {
		return cloneSpreadAssignment(node, internalOptions as CloneNodeInternalOptions<SpreadAssignment>);
	}

	// Handle the Node
	else if (isObjectBindingPattern(node)) {
		return cloneObjectBindingPattern(node, internalOptions as CloneNodeInternalOptions<ObjectBindingPattern>);
	}

	// Handle the Node
	else if (isArrayBindingPattern(node)) {
		return cloneArrayBindingPattern(node, internalOptions as CloneNodeInternalOptions<ArrayBindingPattern>);
	}

	// Handle the Node
	else if (isFunctionDeclaration(node)) {
		return cloneFunctionDeclaration(node, internalOptions as CloneNodeInternalOptions<FunctionDeclaration>);
	}

	// Handle the Node
	else if (isMethodSignature(node)) {
		return cloneMethodSignature(node, internalOptions as CloneNodeInternalOptions<MethodSignature>);
	}

	// Handle the Node
	else if (isMethodDeclaration(node)) {
		return cloneMethodDeclaration(node, internalOptions as CloneNodeInternalOptions<MethodDeclaration>);
	}

	// Handle the Node
	else if (isConstructorDeclaration(node)) {
		return cloneConstructorDeclaration(node, internalOptions as CloneNodeInternalOptions<ConstructorDeclaration>);
	}

	// Handle the Node
	else if (isSemicolonClassElement(node)) {
		return cloneSemicolonClassElement(node, internalOptions as CloneNodeInternalOptions<SemicolonClassElement>);
	}

	// Handle the Node
	else if (isGetAccessorDeclaration(node)) {
		return cloneGetAccessorDeclaration(node, internalOptions as CloneNodeInternalOptions<GetAccessorDeclaration>);
	}

	// Handle the Node
	else if (isSetAccessorDeclaration(node)) {
		return cloneSetAccessorDeclaration(node, internalOptions as CloneNodeInternalOptions<SetAccessorDeclaration>);
	}

	// Handle the Node
	else if (isIndexSignatureDeclaration(node)) {
		return cloneIndexSignatureDeclaration(node, internalOptions as CloneNodeInternalOptions<IndexSignatureDeclaration>);
	}

	// Handle the Node
	else if (isKeywordTypeNode(node)) {
		return cloneKeywordTypeNode(node, internalOptions as CloneNodeInternalOptions<KeywordTypeNode>);
	}

	// Handle the Node
	else if (isImportTypeNode(node)) {
		return cloneImportTypeNode(node, internalOptions as CloneNodeInternalOptions<ImportTypeNode>);
	}

	// Handle the Node
	else if (isThisTypeNode(node)) {
		return cloneThisTypeNode(node, internalOptions as CloneNodeInternalOptions<ThisTypeNode>);
	}

	// Handle the Node
	else if (isFunctionTypeNode(node)) {
		return cloneFunctionTypeNode(node, internalOptions as CloneNodeInternalOptions<FunctionTypeNode>);
	}

	// Handle the Node
	else if (isConstructorTypeNode(node)) {
		return cloneConstructorTypeNode(node, internalOptions as CloneNodeInternalOptions<ConstructorTypeNode>);
	}

	// Handle the Node
	else if (isTypeReferenceNode(node)) {
		return cloneTypeReferenceNode(node, internalOptions as CloneNodeInternalOptions<TypeReferenceNode>);
	}

	// Handle the Node
	else if (isTypePredicateNode(node)) {
		return cloneTypePredicateNode(node, internalOptions as CloneNodeInternalOptions<TypePredicateNode>);
	}

	// Handle the Node
	else if (isTypeQueryNode(node)) {
		return cloneTypeQueryNode(node, internalOptions as CloneNodeInternalOptions<TypeQueryNode>);
	}

	// Handle the Node
	else if (isTypeLiteralNode(node)) {
		return cloneTypeLiteralNode(node, internalOptions as CloneNodeInternalOptions<TypeLiteralNode>);
	}

	// Handle the Node
	else if (isArrayTypeNode(node)) {
		return cloneArrayTypeNode(node, internalOptions as CloneNodeInternalOptions<ArrayTypeNode>);
	}

	// Handle the Node
	else if (isTupleTypeNode(node)) {
		return cloneTupleTypeNode(node, internalOptions as CloneNodeInternalOptions<TupleTypeNode>);
	}

	// Handle the Node
	else if (isOptionalTypeNode(node)) {
		return cloneOptionalTypeNode(node, internalOptions as CloneNodeInternalOptions<OptionalTypeNode>);
	}

	// Handle the Node
	else if (isRestTypeNode(node)) {
		return cloneRestTypeNode(node, internalOptions as CloneNodeInternalOptions<RestTypeNode>);
	}

	// Handle the Node
	else if (isUnionTypeNode(node)) {
		return cloneUnionTypeNode(node, internalOptions as CloneNodeInternalOptions<UnionTypeNode>);
	}

	// Handle the Node
	else if (isIntersectionTypeNode(node)) {
		return cloneIntersectionTypeNode(node, internalOptions as CloneNodeInternalOptions<IntersectionTypeNode>);
	}

	// Handle the Node
	else if (isConditionalTypeNode(node)) {
		return cloneConditionalTypeNode(node, internalOptions as CloneNodeInternalOptions<ConditionalTypeNode>);
	}

	// Handle the Node
	else if (isInferTypeNode(node)) {
		return cloneInferTypeNode(node, internalOptions as CloneNodeInternalOptions<InferTypeNode>);
	}

	// Handle the Node
	else if (isLiteralTypeNode(node)) {
		return cloneLiteralTypeNode(node, internalOptions as CloneNodeInternalOptions<LiteralTypeNode>);
	}

	// Handle the Node
	else if (isStringLiteral(node)) {
		return cloneStringLiteral(node, internalOptions as CloneNodeInternalOptions<StringLiteral>);
	}

	// Handle the Node
	else if (isBooleanLiteral(node)) {
		return cloneBooleanLiteral(node, internalOptions as CloneNodeInternalOptions<BooleanLiteral>);
	}

	// Handle the Node
	else if (isRegularExpressionLiteral(node)) {
		return cloneRegularExpressionLiteral(node, internalOptions as CloneNodeInternalOptions<RegularExpressionLiteral>);
	}

	// Handle the Node
	else if (isNoSubstitutionTemplateLiteral(node)) {
		return cloneNoSubstitutionTemplateLiteral(node, internalOptions as CloneNodeInternalOptions<NoSubstitutionTemplateLiteral>);
	}

	// Handle the Node
	else if (isNumericLiteral(node)) {
		return cloneNumericLiteral(node, internalOptions as CloneNodeInternalOptions<NumericLiteral>);
	}

	// Handle the Node
	else if (isBigIntLiteral(node)) {
		return cloneBigIntLiteral(node, internalOptions as CloneNodeInternalOptions<BigIntLiteral>);
	}

	// Handle the Node
	else if (isArrayLiteralExpression(node)) {
		return cloneArrayLiteralExpression(node, internalOptions as CloneNodeInternalOptions<ArrayLiteralExpression>);
	}

	// Handle the Node
	else if (isObjectLiteralExpression(node)) {
		return cloneObjectLiteralExpression(node, internalOptions as CloneNodeInternalOptions<ObjectLiteralExpression>);
	}

	// Handle the Node
	else if (isPrefixUnaryExpression(node)) {
		return clonePrefixUnaryExpression(node, internalOptions as CloneNodeInternalOptions<PrefixUnaryExpression>);
	}

	// Handle the Node
	else if (isBlock(node)) {
		return cloneBlock(node, internalOptions as CloneNodeInternalOptions<Block>);
	}

	// Handle the Node
	else if (isThrowStatement(node)) {
		return cloneThrowStatement(node, internalOptions as CloneNodeInternalOptions<ThrowStatement>);
	}

	// Handle the Node
	else if (isReturnStatement(node)) {
		return cloneReturnStatement(node, internalOptions as CloneNodeInternalOptions<ReturnStatement>);
	}

	// Handle the Node
	else if (isNewExpression(node)) {
		return cloneNewExpression(node, internalOptions as CloneNodeInternalOptions<NewExpression>);
	}

	// Handle the Node
	else if (isCallExpression(node)) {
		return cloneCallExpression(node, internalOptions as CloneNodeInternalOptions<CallExpression>);
	}

	// Handle the Node
	else if (isExpressionStatement(node)) {
		return cloneExpressionStatement(node, internalOptions as CloneNodeInternalOptions<ExpressionStatement>);
	}

	// Handle the Node
	else if (isExpressionWithTypeArguments(node)) {
		return cloneExpressionWithTypeArguments(node, internalOptions as CloneNodeInternalOptions<ExpressionWithTypeArguments>);
	}

	// Handle the Node
	else if (isPropertyAccessExpression(node)) {
		return clonePropertyAccessExpression(node, internalOptions as CloneNodeInternalOptions<PropertyAccessExpression>);
	}

	// Handle the Node
	else if (isElementAccessExpression(node)) {
		return cloneElementAccessExpression(node, internalOptions as CloneNodeInternalOptions<ElementAccessExpression>);
	}

	// Handle the Node
	else if (isTemplateExpression(node)) {
		return cloneTemplateExpression(node, internalOptions as CloneNodeInternalOptions<TemplateExpression>);
	}

	// Handle the Node
	else if (isTemplateSpan(node)) {
		return cloneTemplateSpan(node, internalOptions as CloneNodeInternalOptions<TemplateSpan>);
	}

	// Handle the Node
	else if (isTemplateHead(node)) {
		return cloneTemplateHead(node, internalOptions as CloneNodeInternalOptions<TemplateHead>);
	}

	// Handle the Node
	else if (isTemplateMiddle(node)) {
		return cloneTemplateMiddle(node, internalOptions as CloneNodeInternalOptions<TemplateMiddle>);
	}

	// Handle the Node
	else if (isTemplateTail(node)) {
		return cloneTemplateTail(node, internalOptions as CloneNodeInternalOptions<TemplateTail>);
	}

	// Handle the Node
	else if (isConditionalExpression(node)) {
		return cloneConditionalExpression(node, internalOptions as CloneNodeInternalOptions<ConditionalExpression>);
	}

	// Handle the Node
	else if (isBinaryExpression(node)) {
		return cloneBinaryExpression(node, internalOptions as CloneNodeInternalOptions<BinaryExpression>);
	}

	// Handle the Node
	else if (isParenthesizedExpression(node)) {
		return cloneParenthesizedExpression(node, internalOptions as CloneNodeInternalOptions<ParenthesizedExpression>);
	}

	// Handle the Node
	else if (isParenthesizedTypeNode(node)) {
		return cloneParenthesizedTypeNode(node, internalOptions as CloneNodeInternalOptions<ParenthesizedTypeNode>);
	}

	// Handle the Node
	else if (isArrowFunction(node)) {
		return cloneArrowFunction(node, internalOptions as CloneNodeInternalOptions<ArrowFunction>);
	}

	// Handle the Node
	else if (isClassDeclaration(node)) {
		return cloneClassDeclaration(node, internalOptions as CloneNodeInternalOptions<ClassDeclaration>);
	}

	// Handle the Node
	else if (isClassExpression(node)) {
		return cloneClassExpression(node, internalOptions as CloneNodeInternalOptions<ClassExpression>);
	}

	// Handle the Node
	else if (isEnumDeclaration(node)) {
		return cloneEnumDeclaration(node, internalOptions as CloneNodeInternalOptions<EnumDeclaration>);
	}

	// Handle the Node
	else if (isEnumMember(node)) {
		return cloneEnumMember(node, internalOptions as CloneNodeInternalOptions<EnumMember>);
	}

	// Handle the Node
	else if (isInterfaceDeclaration(node)) {
		return cloneInterfaceDeclaration(node, internalOptions as CloneNodeInternalOptions<InterfaceDeclaration>);
	}

	// Handle the Node
	else if (isHeritageClause(node)) {
		return cloneHeritageClause(node, internalOptions as CloneNodeInternalOptions<HeritageClause>);
	}

	// Handle the Node
	else if (isEmptyStatement(node)) {
		return cloneEmptyStatement(node, internalOptions as CloneNodeInternalOptions<EmptyStatement>);
	}

	// Handle the Node
	else if (isAsExpression(node)) {
		return cloneAsExpression(node, internalOptions as CloneNodeInternalOptions<AsExpression>);
	}

	// Handle the Node
	else if (isTypeAssertion(node)) {
		return cloneTypeAssertion(node, internalOptions as CloneNodeInternalOptions<TypeAssertion>);
	}

	// Handle the Node
	else if (isAwaitExpression(node)) {
		return cloneAwaitExpression(node, internalOptions as CloneNodeInternalOptions<AwaitExpression>);
	}

	// Handle the Node
	else if (isYieldExpression(node)) {
		return cloneYieldExpression(node, internalOptions as CloneNodeInternalOptions<YieldExpression>);
	}

	// Handle the Node
	else if (isForOfStatement(node)) {
		return cloneForOfStatement(node, internalOptions as CloneNodeInternalOptions<ForOfStatement>);
	}

	// Handle the Node
	else if (isForInStatement(node)) {
		return cloneForInStatement(node, internalOptions as CloneNodeInternalOptions<ForInStatement>);
	}

	// Handle the Node
	else if (isForStatement(node)) {
		return cloneForStatement(node, internalOptions as CloneNodeInternalOptions<ForStatement>);
	}

	// Handle the Node
	else if (isWhileStatement(node)) {
		return cloneWhileStatement(node, internalOptions as CloneNodeInternalOptions<WhileStatement>);
	}

	// Handle the Node
	else if (isLabeledStatement(node)) {
		return cloneLabeledStatement(node, internalOptions as CloneNodeInternalOptions<LabeledStatement>);
	}

	// Handle the Node
	else if (isBreakStatement(node)) {
		return cloneBreakStatement(node, internalOptions as CloneNodeInternalOptions<BreakStatement>);
	}

	// Handle the Node
	else if (isContinueStatement(node)) {
		return cloneContinueStatement(node, internalOptions as CloneNodeInternalOptions<ContinueStatement>);
	}

	// Handle the Node
	else if (isIfStatement(node)) {
		return cloneIfStatement(node, internalOptions as CloneNodeInternalOptions<IfStatement>);
	}

	// Handle the Node
	else if (isDoStatement(node)) {
		return cloneDoStatement(node, internalOptions as CloneNodeInternalOptions<DoStatement>);
	}

	// Handle the Node
	else if (isNonNullExpression(node)) {
		return cloneNonNullExpression(node, internalOptions as CloneNodeInternalOptions<NonNullExpression>);
	}

	// Handle the Node
	else if (isTypeOperatorNode(node)) {
		return cloneTypeOperatorNode(node, internalOptions as CloneNodeInternalOptions<TypeOperatorNode>);
	}

	// Handle the Node
	else if (isIndexedAccessTypeNode(node)) {
		return cloneIndexedAccessTypeNode(node, internalOptions as CloneNodeInternalOptions<IndexedAccessTypeNode>);
	}

	// Handle the Node
	else if (isMappedTypeNode(node)) {
		return cloneMappedTypeNode(node, internalOptions as CloneNodeInternalOptions<MappedTypeNode>);
	}

	// Handle the Node
	else if (isOmittedExpression(node)) {
		return cloneOmittedExpression(node, internalOptions as CloneNodeInternalOptions<OmittedExpression>);
	}

	// Handle the Node
	else if (isPartiallyEmittedExpression(node)) {
		return clonePartiallyEmittedExpression(node, internalOptions as CloneNodeInternalOptions<PartiallyEmittedExpression>);
	}

	// Handle the Node
	else if (isPostfixUnaryExpression(node)) {
		return clonePostfixUnaryExpression(node, internalOptions as CloneNodeInternalOptions<PostfixUnaryExpression>);
	}

	// Handle the Node
	else if (isNullLiteral(node)) {
		return cloneNullLiteral(node, internalOptions as CloneNodeInternalOptions<NullLiteral>);
	}

	// Handle the Node
	else if (isThisExpression(node)) {
		return cloneThisExpression(node, internalOptions as CloneNodeInternalOptions<ThisExpression>);
	}

	// Handle the Node
	else if (isSuperExpression(node)) {
		return cloneSuperExpression(node, internalOptions as CloneNodeInternalOptions<SuperExpression>);
	}

	// Handle the Node
	else if (isDeleteExpression(node)) {
		return cloneDeleteExpression(node, internalOptions as CloneNodeInternalOptions<DeleteExpression>);
	}

	// Handle the Node
	else if (isTypeOfExpression(node)) {
		return cloneTypeOfExpression(node, internalOptions as CloneNodeInternalOptions<TypeOfExpression>);
	}

	// Handle the Node
	else if (isVoidExpression(node)) {
		return cloneVoidExpression(node, internalOptions as CloneNodeInternalOptions<VoidExpression>);
	}

	// Handle the Node
	else if (isFunctionExpression(node)) {
		return cloneFunctionExpression(node, internalOptions as CloneNodeInternalOptions<FunctionExpression>);
	}

	// Handle the Node
	else if (isSpreadElement(node)) {
		return cloneSpreadElement(node, internalOptions as CloneNodeInternalOptions<SpreadElement>);
	}

	// Handle the Node
	else if (isTaggedTemplateExpression(node)) {
		return cloneTaggedTemplateExpression(node, internalOptions as CloneNodeInternalOptions<TaggedTemplateExpression>);
	}

	// Handle the Node
	else if (isMetaProperty(node)) {
		return cloneMetaProperty(node, internalOptions as CloneNodeInternalOptions<MetaProperty>);
	}

	// Handle the Node
	else if (isJsxElement(node)) {
		return cloneJsxElement(node, internalOptions as CloneNodeInternalOptions<JsxElement>);
	}

	// Handle the Node
	else if (isJsxAttributes(node)) {
		return cloneJsxAttributes(node, internalOptions as CloneNodeInternalOptions<JsxAttributes>);
	}

	// Handle the Node
	else if (isJsxOpeningElement(node)) {
		return cloneJsxOpeningElement(node, internalOptions as CloneNodeInternalOptions<JsxOpeningElement>);
	}

	// Handle the Node
	else if (isJsxSelfClosingElement(node)) {
		return cloneJsxSelfClosingElement(node, internalOptions as CloneNodeInternalOptions<JsxSelfClosingElement>);
	}

	// Handle the Node
	else if (isJsxFragment(node)) {
		return cloneJsxFragment(node, internalOptions as CloneNodeInternalOptions<JsxFragment>);
	}

	// Handle the Node
	else if (isJsxOpeningFragment(node)) {
		return cloneJsxOpeningFragment(node, internalOptions as CloneNodeInternalOptions<JsxOpeningFragment>);
	}

	// Handle the Node
	else if (isJsxClosingFragment(node)) {
		return cloneJsxClosingFragment(node, internalOptions as CloneNodeInternalOptions<JsxClosingFragment>);
	}

	// Handle the Node
	else if (isJsxAttribute(node)) {
		return cloneJsxAttribute(node, internalOptions as CloneNodeInternalOptions<JsxAttribute>);
	}

	// Handle the Node
	else if (isJsxSpreadAttribute(node)) {
		return cloneJsxSpreadAttribute(node, internalOptions as CloneNodeInternalOptions<JsxSpreadAttribute>);
	}

	// Handle the Node
	else if (isJsxClosingElement(node)) {
		return cloneJsxClosingElement(node, internalOptions as CloneNodeInternalOptions<JsxClosingElement>);
	}

	// Handle the Node
	else if (isJsxExpression(node)) {
		return cloneJsxExpression(node, internalOptions as CloneNodeInternalOptions<JsxExpression>);
	}

	// Handle the Node
	else if (isJsxText(node)) {
		return cloneJsxText(node, internalOptions as CloneNodeInternalOptions<JsxText>);
	}

	// Handle the Node
	else if (isNotEmittedStatement(node)) {
		return cloneNotEmittedStatement(node, internalOptions as CloneNodeInternalOptions<NotEmittedStatement>);
	}

	// Handle the Node
	else if (isCommaListExpression(node)) {
		return cloneCommaListExpression(node, internalOptions as CloneNodeInternalOptions<CommaListExpression>);
	}

	// Handle the Node
	else if (isDebuggerStatement(node)) {
		return cloneDebuggerStatement(node, internalOptions as CloneNodeInternalOptions<DebuggerStatement>);
	}

	// Handle the Node
	else if (isWithStatement(node)) {
		return cloneWithStatement(node, internalOptions as CloneNodeInternalOptions<WithStatement>);
	}

	// Handle the Node
	else if (isSwitchStatement(node)) {
		return cloneSwitchStatement(node, internalOptions as CloneNodeInternalOptions<SwitchStatement>);
	}

	// Handle the Node
	else if (isCaseBlock(node)) {
		return cloneCaseBlock(node, internalOptions as CloneNodeInternalOptions<CaseBlock>);
	}

	// Handle the Node
	else if (isCaseClause(node)) {
		return cloneCaseClause(node, internalOptions as CloneNodeInternalOptions<CaseClause>);
	}

	// Handle the Node
	else if (isDefaultClause(node)) {
		return cloneDefaultClause(node, internalOptions as CloneNodeInternalOptions<DefaultClause>);
	}

	// Handle the Node
	else if (isTryStatement(node)) {
		return cloneTryStatement(node, internalOptions as CloneNodeInternalOptions<TryStatement>);
	}

	// Handle the Node
	else if (isCatchClause(node)) {
		return cloneCatchClause(node, internalOptions as CloneNodeInternalOptions<CatchClause>);
	}

	// Handle the Node
	else if (isModuleDeclaration(node)) {
		return cloneModuleDeclaration(node, internalOptions as CloneNodeInternalOptions<ModuleDeclaration>);
	}

	// Handle the Node
	else if (isModuleBlock(node)) {
		return cloneModuleBlock(node, internalOptions as CloneNodeInternalOptions<ModuleBlock>);
	}

	// Handle the Node
	else if (isImportEqualsDeclaration(node)) {
		return cloneImportEqualsDeclaration(node, internalOptions as CloneNodeInternalOptions<ImportEqualsDeclaration>);
	}

	// Handle the Node
	else if (isExternalModuleReference(node)) {
		return cloneExternalModuleReference(node, internalOptions as CloneNodeInternalOptions<ExternalModuleReference>);
	}

	// Handle the Node
	else if (isImportDeclaration(node)) {
		return cloneImportDeclaration(node, internalOptions as CloneNodeInternalOptions<ImportDeclaration>);
	}

	// Handle the Node
	else if (isImportClause(node)) {
		return cloneImportClause(node, internalOptions as CloneNodeInternalOptions<ImportClause>);
	}

	// Handle the Node
	else if (isNamedImports(node)) {
		return cloneNamedImports(node, internalOptions as CloneNodeInternalOptions<NamedImports>);
	}

	// Handle the Node
	else if (isNamespaceImport(node)) {
		return cloneNamespaceImport(node, internalOptions as CloneNodeInternalOptions<NamespaceImport>);
	}

	// Handle the Node
	else if (isImportSpecifier(node)) {
		return cloneImportSpecifier(node, internalOptions as CloneNodeInternalOptions<ImportSpecifier>);
	}

	// Handle the Node
	else if (isNamespaceExportDeclaration(node)) {
		return cloneNamespaceExportDeclaration(node, internalOptions as CloneNodeInternalOptions<NamespaceExportDeclaration>);
	}

	// Handle the Node
	else if (isExportDeclaration(node)) {
		return cloneExportDeclaration(node, internalOptions as CloneNodeInternalOptions<ExportDeclaration>);
	}

	// Handle the Node
	else if (isNamedExports(node)) {
		return cloneNamedExports(node, internalOptions as CloneNodeInternalOptions<NamedExports>);
	}

	// Handle the Node
	else if (isExportSpecifier(node)) {
		return cloneExportSpecifier(node, internalOptions as CloneNodeInternalOptions<ExportSpecifier>);
	}

	// Handle the Node
	else if (isExportAssignment(node)) {
		return cloneExportAssignment(node, internalOptions as CloneNodeInternalOptions<ExportAssignment>);
	}

	// Handle the Node
	else if (isToken(node)) {
			return cloneToken(node, internalOptions as CloneNodeInternalOptions<Token<SyntaxKind>>);
		}

	throw new TypeError(`Could not handle Node of kind: '${SyntaxKind[node.kind]}'`);
}

