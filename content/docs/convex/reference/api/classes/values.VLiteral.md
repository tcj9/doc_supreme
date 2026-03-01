# Class: VLiteral\<Type, IsOptional>

[values](/api/modules/values.md).VLiteral

The type of the `v.literal()` validator.

## Type parameters[​](#type-parameters "Direct link to Type parameters")

| Name         | Type                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| `Type`       | `Type`                                                                               |
| `IsOptional` | extends [`OptionalProperty`](/api/modules/values.md#optionalproperty) = `"required"` |

## Hierarchy[​](#hierarchy "Direct link to Hierarchy")

* `BaseValidator`<`Type`, `IsOptional`>

  ↳ **`VLiteral`**

## Constructors[​](#constructors "Direct link to Constructors")

### constructor[​](#constructor "Direct link to constructor")

• **new VLiteral**<`Type`, `IsOptional`>(`«destructured»`)

Usually you'd use `v.literal(value)` instead.

#### Type parameters[​](#type-parameters-1 "Direct link to Type parameters")

| Name         | Type                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| `Type`       | `Type`                                                                               |
| `IsOptional` | extends [`OptionalProperty`](/api/modules/values.md#optionalproperty) = `"required"` |

#### Parameters[​](#parameters "Direct link to Parameters")

| Name             | Type         |
| ---------------- | ------------ |
| `«destructured»` | `Object`     |
| › `isOptional`   | `IsOptional` |
| › `value`        | `Type`       |

#### Overrides[​](#overrides "Direct link to Overrides")

BaseValidator\&lt;Type, IsOptional\&gt;.constructor

#### Defined in[​](#defined-in "Direct link to Defined in")

[values/validators.ts:441](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L441)

## Properties[​](#properties "Direct link to Properties")

### type[​](#type "Direct link to type")

• `Readonly` **type**: `Type`

Only for TypeScript, the TS type of the JS values validated by this validator.

#### Inherited from[​](#inherited-from "Direct link to Inherited from")

BaseValidator.type

#### Defined in[​](#defined-in-1 "Direct link to Defined in")

[values/validators.ts:37](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L37)

***

### fieldPaths[​](#fieldpaths "Direct link to fieldPaths")

• `Readonly` **fieldPaths**: `never`

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

#### Inherited from[​](#inherited-from-1 "Direct link to Inherited from")

BaseValidator.fieldPaths

#### Defined in[​](#defined-in-2 "Direct link to Defined in")

[values/validators.ts:42](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L42)

***

### isOptional[​](#isoptional "Direct link to isOptional")

• `Readonly` **isOptional**: `IsOptional`

Whether this is an optional Object property value validator.

#### Inherited from[​](#inherited-from-2 "Direct link to Inherited from")

BaseValidator.isOptional

#### Defined in[​](#defined-in-3 "Direct link to Defined in")

[values/validators.ts:47](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L47)

***

### isConvexValidator[​](#isconvexvalidator "Direct link to isConvexValidator")

• `Readonly` **isConvexValidator**: `true`

Always `"true"`.

#### Inherited from[​](#inherited-from-3 "Direct link to Inherited from")

BaseValidator.isConvexValidator

#### Defined in[​](#defined-in-4 "Direct link to Defined in")

[values/validators.ts:52](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L52)

***

### value[​](#value "Direct link to value")

• `Readonly` **value**: `Type`

The value that the validated values must be equal to.

#### Defined in[​](#defined-in-5 "Direct link to Defined in")

[values/validators.ts:431](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L431)

***

### kind[​](#kind "Direct link to kind")

• `Readonly` **kind**: `"literal"`

The kind of validator, `"literal"`.

#### Defined in[​](#defined-in-6 "Direct link to Defined in")

[values/validators.ts:436](https://github.com/get-convex/convex-js/blob/main/src/values/validators.ts#L436)
