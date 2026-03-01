# Module: server

Utilities for implementing server-side Convex query and mutation functions.

## Usage[​](#usage "Direct link to Usage")

### Code Generation[​](#code-generation "Direct link to Code Generation")

This module is typically used alongside generated server code.

To generate the server code, run `npx convex dev` in your Convex project. This will create a `convex/_generated/server.js` file with the following functions, typed for your schema:

* [query](https://docs.convex.dev/generated-api/server#query)
* [mutation](https://docs.convex.dev/generated-api/server#mutation)

If you aren't using TypeScript and code generation, you can use these untyped functions instead:

* [queryGeneric](/api/modules/server.md#querygeneric)
* [mutationGeneric](/api/modules/server.md#mutationgeneric)

### Example[​](#example "Direct link to Example")

Convex functions are defined by using either the `query` or `mutation` wrappers.

Queries receive a `db` that implements the [GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md) interface.

```
import { query } from "./_generated/server";

export default query({
  handler: async ({ db }, { arg1, arg2 }) => {
    // Your (read-only) code here!
  },
});
```

If your function needs to write to the database, such as inserting, updating, or deleting documents, use `mutation` instead which provides a `db` that implements the [GenericDatabaseWriter](/api/interfaces/server.GenericDatabaseWriter.md) interface.

```
import { mutation } from "./_generated/server";

export default mutation({
  handler: async ({ db }, { arg1, arg2 }) => {
    // Your mutation code here!
  },
});
```

## Classes[​](#classes "Direct link to Classes")

* [Crons](/api/classes/server.Crons.md)
* [Expression](/api/classes/server.Expression.md)
* [IndexRange](/api/classes/server.IndexRange.md)
* [HttpRouter](/api/classes/server.HttpRouter.md)
* [TableDefinition](/api/classes/server.TableDefinition.md)
* [SchemaDefinition](/api/classes/server.SchemaDefinition.md)
* [SearchFilter](/api/classes/server.SearchFilter.md)
* [FilterExpression](/api/classes/server.FilterExpression.md)

## Interfaces[​](#interfaces "Direct link to Interfaces")

* [UserIdentity](/api/interfaces/server.UserIdentity.md)
* [Auth](/api/interfaces/server.Auth.md)
* [CronJob](/api/interfaces/server.CronJob.md)
* [BaseTableReader](/api/interfaces/server.BaseTableReader.md)
* [GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md)
* [GenericDatabaseReaderWithTable](/api/interfaces/server.GenericDatabaseReaderWithTable.md)
* [GenericDatabaseWriter](/api/interfaces/server.GenericDatabaseWriter.md)
* [GenericDatabaseWriterWithTable](/api/interfaces/server.GenericDatabaseWriterWithTable.md)
* [BaseTableWriter](/api/interfaces/server.BaseTableWriter.md)
* [FilterBuilder](/api/interfaces/server.FilterBuilder.md)
* [IndexRangeBuilder](/api/interfaces/server.IndexRangeBuilder.md)
* [PaginationResult](/api/interfaces/server.PaginationResult.md)
* [PaginationOptions](/api/interfaces/server.PaginationOptions.md)
* [QueryInitializer](/api/interfaces/server.QueryInitializer.md)
* [Query](/api/interfaces/server.Query.md)
* [OrderedQuery](/api/interfaces/server.OrderedQuery.md)
* [GenericMutationCtx](/api/interfaces/server.GenericMutationCtx.md)
* [GenericQueryCtx](/api/interfaces/server.GenericQueryCtx.md)
* [GenericActionCtx](/api/interfaces/server.GenericActionCtx.md)
* [ValidatedFunction](/api/interfaces/server.ValidatedFunction.md)
* [Scheduler](/api/interfaces/server.Scheduler.md)
* [SearchIndexConfig](/api/interfaces/server.SearchIndexConfig.md)
* [VectorIndexConfig](/api/interfaces/server.VectorIndexConfig.md)
* [DefineSchemaOptions](/api/interfaces/server.DefineSchemaOptions.md)
* [SystemDataModel](/api/interfaces/server.SystemDataModel.md)
* [SearchFilterBuilder](/api/interfaces/server.SearchFilterBuilder.md)
* [SearchFilterFinalizer](/api/interfaces/server.SearchFilterFinalizer.md)
* [StorageReader](/api/interfaces/server.StorageReader.md)
* [StorageWriter](/api/interfaces/server.StorageWriter.md)
* [StorageActionWriter](/api/interfaces/server.StorageActionWriter.md)
* [VectorSearchQuery](/api/interfaces/server.VectorSearchQuery.md)
* [VectorFilterBuilder](/api/interfaces/server.VectorFilterBuilder.md)

## References[​](#references "Direct link to References")

### UserIdentityAttributes[​](#useridentityattributes "Direct link to UserIdentityAttributes")

Re-exports [UserIdentityAttributes](/api/modules/browser.md#useridentityattributes)

## Type Aliases[​](#type-aliases "Direct link to Type Aliases")

### FunctionType[​](#functiontype "Direct link to FunctionType")

Ƭ **FunctionType**: `"query"` | `"mutation"` | `"action"`

The type of a Convex function.

#### Defined in[​](#defined-in "Direct link to Defined in")

[server/api.ts:19](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L19)

***

### FunctionReference[​](#functionreference "Direct link to FunctionReference")

Ƭ **FunctionReference**<`Type`, `Visibility`, `Args`, `ReturnType`, `ComponentPath`>: `Object`

A reference to a registered Convex function.

You can create a [FunctionReference](/api/modules/server.md#functionreference) using the generated `api` utility:

```
import { api } from "../convex/_generated/api";

const reference = api.myModule.myFunction;
```

If you aren't using code generation, you can create references using [anyApi](/api/modules/server.md#anyapi-1):

```
import { anyApi } from "convex/server";

const reference = anyApi.myModule.myFunction;
```

Function references can be used to invoke functions from the client. For example, in React you can pass references to the [useQuery](/api/modules/react.md#usequery) hook:

```
const result = useQuery(api.myModule.myFunction);
```

#### Type parameters[​](#type-parameters "Direct link to Type parameters")

| Name            | Type                                                                                   | Description                                                                              |
| --------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `Type`          | extends [`FunctionType`](/api/modules/server.md#functiontype)                          | The type of the function ("query", "mutation", or "action").                             |
| `Visibility`    | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) = `"public"` | The visibility of the function ("public" or "internal").                                 |
| `Args`          | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) = `any`    | The arguments to this function. This is an object mapping argument names to their types. |
| `ReturnType`    | `any`                                                                                  | The return type of this function.                                                        |
| `ComponentPath` | `string` \| `undefined`                                                                | -                                                                                        |

#### Type declaration[​](#type-declaration "Direct link to Type declaration")

| Name             | Type            |
| ---------------- | --------------- |
| `_type`          | `Type`          |
| `_visibility`    | `Visibility`    |
| `_args`          | `Args`          |
| `_returnType`    | `ReturnType`    |
| `_componentPath` | `ComponentPath` |

#### Defined in[​](#defined-in-1 "Direct link to Defined in")

[server/api.ts:52](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L52)

***

### ApiFromModules[​](#apifrommodules "Direct link to ApiFromModules")

Ƭ **ApiFromModules**<`AllModules`>: [`FilterApi`](/api/modules/server.md#filterapi)<`ApiFromModulesAllowEmptyNodes`<`AllModules`>, [`FunctionReference`](/api/modules/server.md#functionreference)<`any`, `any`, `any`, `any`>>

Given the types of all modules in the `convex/` directory, construct the type of `api`.

`api` is a utility for constructing [FunctionReference](/api/modules/server.md#functionreference)s.

#### Type parameters[​](#type-parameters-1 "Direct link to Type parameters")

| Name         | Type                                 | Description                                                                      |
| ------------ | ------------------------------------ | -------------------------------------------------------------------------------- |
| `AllModules` | extends `Record`<`string`, `object`> | A type mapping module paths (like `"dir/myModule"`) to the types of the modules. |

#### Defined in[​](#defined-in-2 "Direct link to Defined in")

[server/api.ts:255](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L255)

***

### FilterApi[​](#filterapi "Direct link to FilterApi")

Ƭ **FilterApi**<`API`, `Predicate`>: [`Expand`](/api/modules/server.md#expand)<{ \[mod in keyof API as FilterKeysInApi\<mod, API\[mod], Predicate>]: API\[mod] extends Predicate ? API\[mod] : FilterApi\<API\[mod], Predicate> }>

Filter a Convex deployment api object for functions which meet criteria, for example all public queries.

#### Type parameters[​](#type-parameters-2 "Direct link to Type parameters")

| Name        |
| ----------- |
| `API`       |
| `Predicate` |

#### Defined in[​](#defined-in-3 "Direct link to Defined in")

[server/api.ts:287](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L287)

***

### AnyApi[​](#anyapi "Direct link to AnyApi")

Ƭ **AnyApi**: `Record`<`string`, `Record`<`string`, `AnyModuleDirOrFunc`>>

The type that Convex api objects extend. If you were writing an api from scratch it should extend this type.

#### Defined in[​](#defined-in-4 "Direct link to Defined in")

[server/api.ts:397](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L397)

***

### PartialApi[​](#partialapi "Direct link to PartialApi")

Ƭ **PartialApi**<`API`>: { \[mod in keyof API]?: API\[mod] extends FunctionReference\<any, any, any, any> ? API\[mod] : PartialApi\<API\[mod]> }

Recursive partial API, useful for defining a subset of an API when mocking or building custom api objects.

#### Type parameters[​](#type-parameters-3 "Direct link to Type parameters")

| Name  |
| ----- |
| `API` |

#### Defined in[​](#defined-in-5 "Direct link to Defined in")

[server/api.ts:405](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L405)

***

### FunctionArgs[​](#functionargs "Direct link to FunctionArgs")

Ƭ **FunctionArgs**<`FuncRef`>: `FuncRef`\[`"_args"`]

Given a [FunctionReference](/api/modules/server.md#functionreference), get the return type of the function.

This is represented as an object mapping argument names to values.

#### Type parameters[​](#type-parameters-4 "Direct link to Type parameters")

| Name      | Type                           |
| --------- | ------------------------------ |
| `FuncRef` | extends `AnyFunctionReference` |

#### Defined in[​](#defined-in-6 "Direct link to Defined in")

[server/api.ts:439](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L439)

***

### OptionalRestArgs[​](#optionalrestargs "Direct link to OptionalRestArgs")

Ƭ **OptionalRestArgs**<`FuncRef`>: `FuncRef`\[`"_args"`] extends `EmptyObject` ? \[args?: EmptyObject] : \[args: FuncRef\["\_args"]]

A tuple type of the (maybe optional) arguments to `FuncRef`.

This type is used to make methods involving arguments type safe while allowing skipping the arguments for functions that don't require arguments.

#### Type parameters[​](#type-parameters-5 "Direct link to Type parameters")

| Name      | Type                           |
| --------- | ------------------------------ |
| `FuncRef` | extends `AnyFunctionReference` |

#### Defined in[​](#defined-in-7 "Direct link to Defined in")

[server/api.ts:450](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L450)

***

### ArgsAndOptions[​](#argsandoptions "Direct link to ArgsAndOptions")

Ƭ **ArgsAndOptions**<`FuncRef`, `Options`>: `FuncRef`\[`"_args"`] extends `EmptyObject` ? \[args?: EmptyObject, options?: Options] : \[args: FuncRef\["\_args"], options?: Options]

A tuple type of the (maybe optional) arguments to `FuncRef`, followed by an options object of type `Options`.

This type is used to make methods like `useQuery` type-safe while allowing

1. Skipping arguments for functions that don't require arguments.
2. Skipping the options object.

#### Type parameters[​](#type-parameters-6 "Direct link to Type parameters")

| Name      | Type                           |
| --------- | ------------------------------ |
| `FuncRef` | extends `AnyFunctionReference` |
| `Options` | `Options`                      |

#### Defined in[​](#defined-in-8 "Direct link to Defined in")

[server/api.ts:464](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L464)

***

### FunctionReturnType[​](#functionreturntype "Direct link to FunctionReturnType")

Ƭ **FunctionReturnType**<`FuncRef`>: `FuncRef`\[`"_returnType"`]

Given a [FunctionReference](/api/modules/server.md#functionreference), get the return type of the function.

#### Type parameters[​](#type-parameters-7 "Direct link to Type parameters")

| Name      | Type                           |
| --------- | ------------------------------ |
| `FuncRef` | extends `AnyFunctionReference` |

#### Defined in[​](#defined-in-9 "Direct link to Defined in")

[server/api.ts:476](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L476)

***

### AuthConfig[​](#authconfig "Direct link to AuthConfig")

Ƭ **AuthConfig**: `Object`

The value exported by your Convex project in `auth.config.ts`.

```
import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://your.issuer.url.com",
      applicationID: "your-application-id",
    },
  ],
} satisfies AuthConfig;
```

#### Type declaration[​](#type-declaration-1 "Direct link to Type declaration")

| Name        | Type                                                     |
| ----------- | -------------------------------------------------------- |
| `providers` | [`AuthProvider`](/api/modules/server.md#authprovider)\[] |

#### Defined in[​](#defined-in-10 "Direct link to Defined in")

[server/authentication.ts:19](https://github.com/get-convex/convex-js/blob/main/src/server/authentication.ts#L19)

***

### AuthProvider[​](#authprovider "Direct link to AuthProvider")

Ƭ **AuthProvider**: { `applicationID`: `string` ; `domain`: `string` } | { `type`: `"customJwt"` ; `applicationID?`: `string` ; `issuer`: `string` ; `jwks`: `string` ; `algorithm`: `"RS256"` | `"ES256"` }

An authentication provider allowed to issue JWTs for your app.

See: <https://docs.convex.dev/auth/advanced/custom-auth> and <https://docs.convex.dev/auth/advanced/custom-jwt>

#### Defined in[​](#defined-in-11 "Direct link to Defined in")

[server/authentication.ts:28](https://github.com/get-convex/convex-js/blob/main/src/server/authentication.ts#L28)

***

### FunctionHandle[​](#functionhandle "Direct link to FunctionHandle")

Ƭ **FunctionHandle**<`Type`, `Args`, `ReturnType`>: `string` & [`FunctionReference`](/api/modules/server.md#functionreference)<`Type`, `"internal"`, `Args`, `ReturnType`>

A serializable reference to a Convex function. Passing a this reference to another component allows that component to call this function during the current function execution or at any later time. Function handles are used like `api.folder.function` FunctionReferences, e.g. `ctx.scheduler.runAfter(0, functionReference, args)`.

A function reference is stable across code pushes but it's possible the Convex function it refers to might no longer exist.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

#### Type parameters[​](#type-parameters-8 "Direct link to Type parameters")

| Name         | Type                                                                                |
| ------------ | ----------------------------------------------------------------------------------- |
| `Type`       | extends [`FunctionType`](/api/modules/server.md#functiontype)                       |
| `Args`       | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) = `any` |
| `ReturnType` | `any`                                                                               |

#### Defined in[​](#defined-in-12 "Direct link to Defined in")

[server/components/index.ts:35](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L35)

***

### ComponentDefinition[​](#componentdefinition "Direct link to ComponentDefinition")

Ƭ **ComponentDefinition**<`Exports`>: `Object`

An object of this type should be the default export of a convex.config.ts file in a component definition directory.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

#### Type parameters[​](#type-parameters-9 "Direct link to Type parameters")

| Name      | Type                               |
| --------- | ---------------------------------- |
| `Exports` | extends `ComponentExports` = `any` |

#### Type declaration[​](#type-declaration-2 "Direct link to Type declaration")

| Name        | Type                                                                                                               | Description                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `use`       | \<Definition>(`definition`: `Definition`, `options?`: { `name?`: `string` }) => `InstalledComponent`<`Definition`> | Install a component with the given definition in this component definition. Takes a component definition and an optional name. For editor tooling this method expects a [ComponentDefinition](/api/modules/server.md#componentdefinition) but at runtime the object that is imported will be a ImportedComponentDefinition |
| `__exports` | `Exports`                                                                                                          | Internal type-only property tracking exports provided. **`Deprecated`** This is a type-only property, don't use it.                                                                                                                                                                                                        |

#### Defined in[​](#defined-in-13 "Direct link to Defined in")

[server/components/index.ts:84](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L84)

***

### AnyChildComponents[​](#anychildcomponents "Direct link to AnyChildComponents")

Ƭ **AnyChildComponents**: `Record`<`string`, `AnyComponentReference`>

#### Defined in[​](#defined-in-14 "Direct link to Defined in")

[server/components/index.ts:414](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L414)

***

### AnyComponents[​](#anycomponents "Direct link to AnyComponents")

Ƭ **AnyComponents**: [`AnyChildComponents`](/api/modules/server.md#anychildcomponents)

#### Defined in[​](#defined-in-15 "Direct link to Defined in")

[server/components/index.ts:454](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L454)

***

### GenericDocument[​](#genericdocument "Direct link to GenericDocument")

Ƭ **GenericDocument**: `Record`<`string`, [`Value`](/api/modules/values.md#value)>

A document stored in Convex.

#### Defined in[​](#defined-in-16 "Direct link to Defined in")

[server/data\_model.ts:9](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L9)

***

### GenericFieldPaths[​](#genericfieldpaths "Direct link to GenericFieldPaths")

Ƭ **GenericFieldPaths**: `string`

A type describing all of the document fields in a table.

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

#### Defined in[​](#defined-in-17 "Direct link to Defined in")

[server/data\_model.ts:18](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L18)

***

### GenericIndexFields[​](#genericindexfields "Direct link to GenericIndexFields")

Ƭ **GenericIndexFields**: `string`\[]

A type describing the ordered fields in an index.

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

#### Defined in[​](#defined-in-18 "Direct link to Defined in")

[server/data\_model.ts:29](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L29)

***

### GenericTableIndexes[​](#generictableindexes "Direct link to GenericTableIndexes")

Ƭ **GenericTableIndexes**: `Record`<`string`, [`GenericIndexFields`](/api/modules/server.md#genericindexfields)>

A type describing the indexes in a table.

It's an object mapping each index name to the fields in the index.

#### Defined in[​](#defined-in-19 "Direct link to Defined in")

[server/data\_model.ts:37](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L37)

***

### GenericSearchIndexConfig[​](#genericsearchindexconfig "Direct link to GenericSearchIndexConfig")

Ƭ **GenericSearchIndexConfig**: `Object`

A type describing the configuration of a search index.

#### Type declaration[​](#type-declaration-3 "Direct link to Type declaration")

| Name           | Type     |
| -------------- | -------- |
| `searchField`  | `string` |
| `filterFields` | `string` |

#### Defined in[​](#defined-in-20 "Direct link to Defined in")

[server/data\_model.ts:43](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L43)

***

### GenericTableSearchIndexes[​](#generictablesearchindexes "Direct link to GenericTableSearchIndexes")

Ƭ **GenericTableSearchIndexes**: `Record`<`string`, [`GenericSearchIndexConfig`](/api/modules/server.md#genericsearchindexconfig)>

A type describing all of the search indexes in a table.

This is an object mapping each index name to the config for the index.

#### Defined in[​](#defined-in-21 "Direct link to Defined in")

[server/data\_model.ts:54](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L54)

***

### GenericVectorIndexConfig[​](#genericvectorindexconfig "Direct link to GenericVectorIndexConfig")

Ƭ **GenericVectorIndexConfig**: `Object`

A type describing the configuration of a vector index.

#### Type declaration[​](#type-declaration-4 "Direct link to Type declaration")

| Name           | Type     |
| -------------- | -------- |
| `vectorField`  | `string` |
| `dimensions`   | `number` |
| `filterFields` | `string` |

#### Defined in[​](#defined-in-22 "Direct link to Defined in")

[server/data\_model.ts:63](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L63)

***

### GenericTableVectorIndexes[​](#generictablevectorindexes "Direct link to GenericTableVectorIndexes")

Ƭ **GenericTableVectorIndexes**: `Record`<`string`, [`GenericVectorIndexConfig`](/api/modules/server.md#genericvectorindexconfig)>

A type describing all of the vector indexes in a table.

This is an object mapping each index name to the config for the index.

#### Defined in[​](#defined-in-23 "Direct link to Defined in")

[server/data\_model.ts:75](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L75)

***

### FieldTypeFromFieldPath[​](#fieldtypefromfieldpath "Direct link to FieldTypeFromFieldPath")

Ƭ **FieldTypeFromFieldPath**<`Document`, `FieldPath`>: [`FieldTypeFromFieldPathInner`](/api/modules/server.md#fieldtypefromfieldpathinner)<`Document`, `FieldPath`> extends [`Value`](/api/modules/values.md#value) | `undefined` ? [`FieldTypeFromFieldPathInner`](/api/modules/server.md#fieldtypefromfieldpathinner)<`Document`, `FieldPath`> : [`Value`](/api/modules/values.md#value) | `undefined`

The type of a field in a document.

Note that this supports both simple fields like "name" and nested fields like "properties.name".

If the field is not present in the document it is considered to be `undefined`.

#### Type parameters[​](#type-parameters-10 "Direct link to Type parameters")

| Name        | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| `Document`  | extends [`GenericDocument`](/api/modules/server.md#genericdocument) |
| `FieldPath` | extends `string`                                                    |

#### Defined in[​](#defined-in-24 "Direct link to Defined in")

[server/data\_model.ts:104](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L104)

***

### FieldTypeFromFieldPathInner[​](#fieldtypefromfieldpathinner "Direct link to FieldTypeFromFieldPathInner")

Ƭ **FieldTypeFromFieldPathInner**<`Document`, `FieldPath`>: `FieldPath` extends \`${infer First}.${infer Second}\` ? `ValueFromUnion`<`Document`, `First`, `Record`<`never`, `never`>> extends infer FieldValue ? `FieldValue` extends [`GenericDocument`](/api/modules/server.md#genericdocument) ? [`FieldTypeFromFieldPath`](/api/modules/server.md#fieldtypefromfieldpath)<`FieldValue`, `Second`> : `undefined` : `undefined` : `ValueFromUnion`<`Document`, `FieldPath`, `undefined`>

The inner type of [FieldTypeFromFieldPath](/api/modules/server.md#fieldtypefromfieldpath).

It's wrapped in a helper to coerce the type to `Value | undefined` since some versions of TypeScript fail to infer this type correctly.

#### Type parameters[​](#type-parameters-11 "Direct link to Type parameters")

| Name        | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| `Document`  | extends [`GenericDocument`](/api/modules/server.md#genericdocument) |
| `FieldPath` | extends `string`                                                    |

#### Defined in[​](#defined-in-25 "Direct link to Defined in")

[server/data\_model.ts:120](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L120)

***

### GenericTableInfo[​](#generictableinfo "Direct link to GenericTableInfo")

Ƭ **GenericTableInfo**: `Object`

A type describing the document type and indexes in a table.

#### Type declaration[​](#type-declaration-5 "Direct link to Type declaration")

| Name            | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `document`      | [`GenericDocument`](/api/modules/server.md#genericdocument)                     |
| `fieldPaths`    | [`GenericFieldPaths`](/api/modules/server.md#genericfieldpaths)                 |
| `indexes`       | [`GenericTableIndexes`](/api/modules/server.md#generictableindexes)             |
| `searchIndexes` | [`GenericTableSearchIndexes`](/api/modules/server.md#generictablesearchindexes) |
| `vectorIndexes` | [`GenericTableVectorIndexes`](/api/modules/server.md#generictablevectorindexes) |

#### Defined in[​](#defined-in-26 "Direct link to Defined in")

[server/data\_model.ts:145](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L145)

***

### DocumentByInfo[​](#documentbyinfo "Direct link to DocumentByInfo")

Ƭ **DocumentByInfo**<`TableInfo`>: `TableInfo`\[`"document"`]

The type of a document in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

#### Type parameters[​](#type-parameters-12 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-27 "Direct link to Defined in")

[server/data\_model.ts:157](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L157)

***

### FieldPaths[​](#fieldpaths "Direct link to FieldPaths")

Ƭ **FieldPaths**<`TableInfo`>: `TableInfo`\[`"fieldPaths"`]

The field paths in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

#### Type parameters[​](#type-parameters-13 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-28 "Direct link to Defined in")

[server/data\_model.ts:167](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L167)

***

### Indexes[​](#indexes "Direct link to Indexes")

Ƭ **Indexes**<`TableInfo`>: `TableInfo`\[`"indexes"`]

The database indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

This will be an object mapping index names to the fields in the index.

#### Type parameters[​](#type-parameters-14 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-29 "Direct link to Defined in")

[server/data\_model.ts:176](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L176)

***

### IndexNames[​](#indexnames "Direct link to IndexNames")

Ƭ **IndexNames**<`TableInfo`>: keyof [`Indexes`](/api/modules/server.md#indexes)<`TableInfo`>

The names of indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

#### Type parameters[​](#type-parameters-15 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-30 "Direct link to Defined in")

[server/data\_model.ts:182](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L182)

***

### NamedIndex[​](#namedindex "Direct link to NamedIndex")

Ƭ **NamedIndex**<`TableInfo`, `IndexName`>: [`Indexes`](/api/modules/server.md#indexes)<`TableInfo`>\[`IndexName`]

Extract the fields of an index from a [GenericTableInfo](/api/modules/server.md#generictableinfo) by name.

#### Type parameters[​](#type-parameters-16 "Direct link to Type parameters")

| Name        | Type                                                                   |
| ----------- | ---------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo)  |
| `IndexName` | extends [`IndexNames`](/api/modules/server.md#indexnames)<`TableInfo`> |

#### Defined in[​](#defined-in-31 "Direct link to Defined in")

[server/data\_model.ts:189](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L189)

***

### SearchIndexes[​](#searchindexes "Direct link to SearchIndexes")

Ƭ **SearchIndexes**<`TableInfo`>: `TableInfo`\[`"searchIndexes"`]

The search indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

This will be an object mapping index names to the search index config.

#### Type parameters[​](#type-parameters-17 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-32 "Direct link to Defined in")

[server/data\_model.ts:200](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L200)

***

### SearchIndexNames[​](#searchindexnames "Direct link to SearchIndexNames")

Ƭ **SearchIndexNames**<`TableInfo`>: keyof [`SearchIndexes`](/api/modules/server.md#searchindexes)<`TableInfo`>

The names of search indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

#### Type parameters[​](#type-parameters-18 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-33 "Direct link to Defined in")

[server/data\_model.ts:207](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L207)

***

### NamedSearchIndex[​](#namedsearchindex "Direct link to NamedSearchIndex")

Ƭ **NamedSearchIndex**<`TableInfo`, `IndexName`>: [`SearchIndexes`](/api/modules/server.md#searchindexes)<`TableInfo`>\[`IndexName`]

Extract the config of a search index from a [GenericTableInfo](/api/modules/server.md#generictableinfo) by name.

#### Type parameters[​](#type-parameters-19 "Direct link to Type parameters")

| Name        | Type                                                                               |
| ----------- | ---------------------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo)              |
| `IndexName` | extends [`SearchIndexNames`](/api/modules/server.md#searchindexnames)<`TableInfo`> |

#### Defined in[​](#defined-in-34 "Direct link to Defined in")

[server/data\_model.ts:214](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L214)

***

### VectorIndexes[​](#vectorindexes "Direct link to VectorIndexes")

Ƭ **VectorIndexes**<`TableInfo`>: `TableInfo`\[`"vectorIndexes"`]

The vector indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

This will be an object mapping index names to the vector index config.

#### Type parameters[​](#type-parameters-20 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-35 "Direct link to Defined in")

[server/data\_model.ts:225](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L225)

***

### VectorIndexNames[​](#vectorindexnames "Direct link to VectorIndexNames")

Ƭ **VectorIndexNames**<`TableInfo`>: keyof [`VectorIndexes`](/api/modules/server.md#vectorindexes)<`TableInfo`>

The names of vector indexes in a table for a given [GenericTableInfo](/api/modules/server.md#generictableinfo).

#### Type parameters[​](#type-parameters-21 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo) |

#### Defined in[​](#defined-in-36 "Direct link to Defined in")

[server/data\_model.ts:232](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L232)

***

### NamedVectorIndex[​](#namedvectorindex "Direct link to NamedVectorIndex")

Ƭ **NamedVectorIndex**<`TableInfo`, `IndexName`>: [`VectorIndexes`](/api/modules/server.md#vectorindexes)<`TableInfo`>\[`IndexName`]

Extract the config of a vector index from a [GenericTableInfo](/api/modules/server.md#generictableinfo) by name.

#### Type parameters[​](#type-parameters-22 "Direct link to Type parameters")

| Name        | Type                                                                               |
| ----------- | ---------------------------------------------------------------------------------- |
| `TableInfo` | extends [`GenericTableInfo`](/api/modules/server.md#generictableinfo)              |
| `IndexName` | extends [`VectorIndexNames`](/api/modules/server.md#vectorindexnames)<`TableInfo`> |

#### Defined in[​](#defined-in-37 "Direct link to Defined in")

[server/data\_model.ts:239](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L239)

***

### GenericDataModel[​](#genericdatamodel "Direct link to GenericDataModel")

Ƭ **GenericDataModel**: `Record`<`string`, [`GenericTableInfo`](/api/modules/server.md#generictableinfo)>

A type describing the tables in a Convex project.

This is designed to be code generated with `npx convex dev`.

#### Defined in[​](#defined-in-38 "Direct link to Defined in")

[server/data\_model.ts:252](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L252)

***

### AnyDataModel[​](#anydatamodel "Direct link to AnyDataModel")

Ƭ **AnyDataModel**: `Object`

A [GenericDataModel](/api/modules/server.md#genericdatamodel) that considers documents to be `any` and does not support indexes.

This is the default before a schema is defined.

#### Index signature[​](#index-signature "Direct link to Index signature")

▪ \[tableName: `string`]: { `document`: `any` ; `fieldPaths`: [`GenericFieldPaths`](/api/modules/server.md#genericfieldpaths) ; `indexes`: <!-- -->; `searchIndexes`: <!-- -->; `vectorIndexes`: <!-- -->}

#### Defined in[​](#defined-in-39 "Direct link to Defined in")

[server/data\_model.ts:261](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L261)

***

### TableNamesInDataModel[​](#tablenamesindatamodel "Direct link to TableNamesInDataModel")

Ƭ **TableNamesInDataModel**<`DataModel`>: keyof `DataModel` & `string`

A type of all of the table names defined in a [GenericDataModel](/api/modules/server.md#genericdatamodel).

#### Type parameters[​](#type-parameters-23 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel) |

#### Defined in[​](#defined-in-40 "Direct link to Defined in")

[server/data\_model.ts:275](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L275)

***

### NamedTableInfo[​](#namedtableinfo "Direct link to NamedTableInfo")

Ƭ **NamedTableInfo**<`DataModel`, `TableName`>: `DataModel`\[`TableName`]

Extract the `TableInfo` for a table in a [GenericDataModel](/api/modules/server.md#genericdatamodel) by table name.

#### Type parameters[​](#type-parameters-24 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel) |
| `TableName` | extends keyof `DataModel`                                             |

#### Defined in[​](#defined-in-41 "Direct link to Defined in")

[server/data\_model.ts:284](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L284)

***

### DocumentByName[​](#documentbyname "Direct link to DocumentByName")

Ƭ **DocumentByName**<`DataModel`, `TableName`>: `DataModel`\[`TableName`]\[`"document"`]

The type of a document in a [GenericDataModel](/api/modules/server.md#genericdatamodel) by table name.

#### Type parameters[​](#type-parameters-25 "Direct link to Type parameters")

| Name        | Type                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)                        |
| `TableName` | extends [`TableNamesInDataModel`](/api/modules/server.md#tablenamesindatamodel)<`DataModel`> |

#### Defined in[​](#defined-in-42 "Direct link to Defined in")

[server/data\_model.ts:293](https://github.com/get-convex/convex-js/blob/main/src/server/data_model.ts#L293)

***

### ExpressionOrValue[​](#expressionorvalue "Direct link to ExpressionOrValue")

Ƭ **ExpressionOrValue**<`T`>: [`Expression`](/api/classes/server.Expression.md)<`T`> | `T`

An [Expression](/api/classes/server.Expression.md) or a constant [Value](/api/modules/values.md#value)

#### Type parameters[​](#type-parameters-26 "Direct link to Type parameters")

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| `T`  | extends [`Value`](/api/modules/values.md#value) \| `undefined` |

#### Defined in[​](#defined-in-43 "Direct link to Defined in")

[server/filter\_builder.ts:38](https://github.com/get-convex/convex-js/blob/main/src/server/filter_builder.ts#L38)

***

### Cursor[​](#cursor "Direct link to Cursor")

Ƭ **Cursor**: `string`

An opaque identifier used for paginating a database query.

Cursors are returned from [paginate](/api/interfaces/server.OrderedQuery.md#paginate) and represent the point of the query where the page of results ended.

To continue paginating, pass the cursor back into [paginate](/api/interfaces/server.OrderedQuery.md#paginate) in the [PaginationOptions](/api/interfaces/server.PaginationOptions.md) object to fetch another page of results.

Note: Cursors can only be passed to *exactly* the same database query that they were generated from. You may not reuse a cursor between different database queries.

#### Defined in[​](#defined-in-44 "Direct link to Defined in")

[server/pagination.ts:21](https://github.com/get-convex/convex-js/blob/main/src/server/pagination.ts#L21)

***

### GenericMutationCtxWithTable[​](#genericmutationctxwithtable "Direct link to GenericMutationCtxWithTable")

Ƭ **GenericMutationCtxWithTable**<`DataModel`>: `Omit`<[`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`DataModel`>, `"db"`> & { `db`: [`GenericDatabaseWriterWithTable`](/api/interfaces/server.GenericDatabaseWriterWithTable.md)<`DataModel`> }

A set of services for use within Convex mutation functions.

The mutation context is passed as the first argument to any Convex mutation function run on the server.

You should generally use the `MutationCtx` type from `"./_generated/server"`.

#### Type parameters[​](#type-parameters-27 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel) |

#### Defined in[​](#defined-in-45 "Direct link to Defined in")

[server/registration.ts:163](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L163)

***

### GenericQueryCtxWithTable[​](#genericqueryctxwithtable "Direct link to GenericQueryCtxWithTable")

Ƭ **GenericQueryCtxWithTable**<`DataModel`>: `Omit`<[`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`DataModel`>, `"db"`> & { `db`: [`GenericDatabaseReaderWithTable`](/api/interfaces/server.GenericDatabaseReaderWithTable.md)<`DataModel`> }

A set of services for use within Convex query functions.

The query context is passed as the first argument to any Convex query function run on the server.

This differs from the MutationCtx because all of the services are read-only.

#### Type parameters[​](#type-parameters-28 "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel) |

#### Defined in[​](#defined-in-46 "Direct link to Defined in")

[server/registration.ts:255](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L255)

***

### DefaultFunctionArgs[​](#defaultfunctionargs "Direct link to DefaultFunctionArgs")

Ƭ **DefaultFunctionArgs**: `Record`<`string`, `unknown`>

The default arguments type for a Convex query, mutation, or action function.

Convex functions always take an arguments object that maps the argument names to their values.

#### Defined in[​](#defined-in-47 "Direct link to Defined in")

[server/registration.ts:411](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L411)

***

### ArgsArray[​](#argsarray "Direct link to ArgsArray")

Ƭ **ArgsArray**: `OneArgArray` | `NoArgsArray`

An array of arguments to a Convex function.

Convex functions can take either a single [DefaultFunctionArgs](/api/modules/server.md#defaultfunctionargs) object or no args at all.

#### Defined in[​](#defined-in-48 "Direct link to Defined in")

[server/registration.ts:434](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L434)

***

### ArgsArrayToObject[​](#argsarraytoobject "Direct link to ArgsArrayToObject")

Ƭ **ArgsArrayToObject**<`Args`>: `Args` extends `OneArgArray`\<infer ArgsObject> ? `ArgsObject` : `EmptyObject`

Convert an [ArgsArray](/api/modules/server.md#argsarray) into a single object type.

Empty arguments arrays are converted to EmptyObject.

#### Type parameters[​](#type-parameters-29 "Direct link to Type parameters")

| Name   | Type                                                    |
| ------ | ------------------------------------------------------- |
| `Args` | extends [`ArgsArray`](/api/modules/server.md#argsarray) |

#### Defined in[​](#defined-in-49 "Direct link to Defined in")

[server/registration.ts:449](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L449)

***

### FunctionVisibility[​](#functionvisibility "Direct link to FunctionVisibility")

Ƭ **FunctionVisibility**: `"public"` | `"internal"`

A type representing the visibility of a Convex function.

#### Defined in[​](#defined-in-50 "Direct link to Defined in")

[server/registration.ts:457](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L457)

***

### RegisteredMutation[​](#registeredmutation "Direct link to RegisteredMutation")

Ƭ **RegisteredMutation**<`Visibility`, `Args`, `Returns`>: { `isConvexFunction`: `true` ; `isMutation`: `true` } & `VisibilityProperties`<`Visibility`>

A mutation function that is part of this app.

You can create a mutation by wrapping your function in [mutationGeneric](/api/modules/server.md#mutationgeneric) or [internalMutationGeneric](/api/modules/server.md#internalmutationgeneric) and exporting it.

#### Type parameters[​](#type-parameters-30 "Direct link to Type parameters")

| Name         | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility)   |
| `Args`       | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) |
| `Returns`    | `Returns`                                                                   |

#### Defined in[​](#defined-in-51 "Direct link to Defined in")

[server/registration.ts:480](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L480)

***

### RegisteredQuery[​](#registeredquery "Direct link to RegisteredQuery")

Ƭ **RegisteredQuery**<`Visibility`, `Args`, `Returns`>: { `isConvexFunction`: `true` ; `isQuery`: `true` } & `VisibilityProperties`<`Visibility`>

A query function that is part of this app.

You can create a query by wrapping your function in [queryGeneric](/api/modules/server.md#querygeneric) or [internalQueryGeneric](/api/modules/server.md#internalquerygeneric) and exporting it.

#### Type parameters[​](#type-parameters-31 "Direct link to Type parameters")

| Name         | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility)   |
| `Args`       | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) |
| `Returns`    | `Returns`                                                                   |

#### Defined in[​](#defined-in-52 "Direct link to Defined in")

[server/registration.ts:509](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L509)

***

### RegisteredAction[​](#registeredaction "Direct link to RegisteredAction")

Ƭ **RegisteredAction**<`Visibility`, `Args`, `Returns`>: { `isConvexFunction`: `true` ; `isAction`: `true` } & `VisibilityProperties`<`Visibility`>

An action that is part of this app.

You can create an action by wrapping your function in [actionGeneric](/api/modules/server.md#actiongeneric) or [internalActionGeneric](/api/modules/server.md#internalactiongeneric) and exporting it.

#### Type parameters[​](#type-parameters-32 "Direct link to Type parameters")

| Name         | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility)   |
| `Args`       | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) |
| `Returns`    | `Returns`                                                                   |

#### Defined in[​](#defined-in-53 "Direct link to Defined in")

[server/registration.ts:538](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L538)

***

### PublicHttpAction[​](#publichttpaction "Direct link to PublicHttpAction")

Ƭ **PublicHttpAction**: `Object`

An HTTP action that is part of this app's public API.

You can create public HTTP actions by wrapping your function in [httpActionGeneric](/api/modules/server.md#httpactiongeneric) and exporting it.

#### Type declaration[​](#type-declaration-6 "Direct link to Type declaration")

| Name     | Type   |
| -------- | ------ |
| `isHttp` | `true` |

#### Defined in[​](#defined-in-54 "Direct link to Defined in")

[server/registration.ts:567](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L567)

***

### UnvalidatedFunction[​](#unvalidatedfunction "Direct link to UnvalidatedFunction")

Ƭ **UnvalidatedFunction**<`Ctx`, `Args`, `Returns`>: (`ctx`: `Ctx`, ...`args`: `Args`) => `Returns` | { `handler`: (`ctx`: `Ctx`, ...`args`: `Args`) => `Returns` }

**`Deprecated`**

\-- See the type definition for `MutationBuilder` or similar for the types used for defining Convex functions.

The definition of a Convex query, mutation, or action function without argument validation.

Convex functions always take a context object as their first argument and an (optional) args object as their second argument.

This can be written as a function like:

```
import { query } from "./_generated/server";

export const func = query(({ db }, { arg }) => {...});
```

or as an object like:

```
import { query } from "./_generated/server";

export const func = query({
  handler: ({ db }, { arg }) => {...},
});
```

See [ValidatedFunction](/api/interfaces/server.ValidatedFunction.md) to add argument validation.

#### Type parameters[​](#type-parameters-33 "Direct link to Type parameters")

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `Ctx`     | `Ctx`                                                   |
| `Args`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) |
| `Returns` | `Returns`                                               |

#### Defined in[​](#defined-in-55 "Direct link to Defined in")

[server/registration.ts:605](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L605)

***

### ReturnValueForOptionalValidator[​](#returnvalueforoptionalvalidator "Direct link to ReturnValueForOptionalValidator")

Ƭ **ReturnValueForOptionalValidator**<`ReturnsValidator`>: \[`ReturnsValidator`] extends \[[`Validator`](/api/modules/values.md#validator)<`any`, `any`, `any`>] ? `ValidatorTypeToReturnType`<[`Infer`](/api/modules/values.md#infer)<`ReturnsValidator`>> : \[`ReturnsValidator`] extends \[[`PropertyValidators`](/api/modules/values.md#propertyvalidators)] ? `ValidatorTypeToReturnType`<[`ObjectType`](/api/modules/values.md#objecttype)<`ReturnsValidator`>> : `any`

There are multiple syntaxes for defining a Convex function:

```
 - query(async (ctx, args) => {...})
 - query({ handler: async (ctx, args) => {...} })
 - query({ args: { a: v.string }, handler: async (ctx, args) => {...} } })
 - query({ args: { a: v.string }, returns: v.string(), handler: async (ctx, args) => {...} } })
```

In each of these, we want to correctly infer the type for the arguments and return value, preferring the type derived from a validator if it's provided.

To avoid having a separate overload for each, which would show up in error messages, we use the type params -- ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs.

The type for ReturnValue and OneOrZeroArgs are constrained by the type or ArgsValidator and ReturnsValidator if they're present, and inferred from any explicit type annotations to the arguments or return value of the function.

Below are a few utility types to get the appropriate type constraints based on an optional validator.

Additional tricks:

* We use Validator | void instead of Validator | undefined because the latter does not work with `strictNullChecks` since it's equivalent to just `Validator`.
* We use a tuple type of length 1 to avoid distribution over the union <https://github.com/microsoft/TypeScript/issues/29368#issuecomment-453529532>

#### Type parameters[​](#type-parameters-34 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReturnsValidator` | extends [`Validator`](/api/modules/values.md#validator)<`any`, `any`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators) \| `void` |

#### Defined in[​](#defined-in-56 "Direct link to Defined in")

[server/registration.ts:707](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L707)

***

### ArgsArrayForOptionalValidator[​](#argsarrayforoptionalvalidator "Direct link to ArgsArrayForOptionalValidator")

Ƭ **ArgsArrayForOptionalValidator**<`ArgsValidator`>: \[`ArgsValidator`] extends \[[`Validator`](/api/modules/values.md#validator)<`any`, `any`, `any`>] ? `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> : \[`ArgsValidator`] extends \[[`PropertyValidators`](/api/modules/values.md#propertyvalidators)] ? `OneArgArray`<[`ObjectType`](/api/modules/values.md#objecttype)<`ArgsValidator`>> : [`ArgsArray`](/api/modules/server.md#argsarray)

#### Type parameters[​](#type-parameters-35 "Direct link to Type parameters")

| Name            | Type                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ArgsValidator` | extends [`GenericValidator`](/api/modules/values.md#genericvalidator) \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators) \| `void` |

#### Defined in[​](#defined-in-57 "Direct link to Defined in")

[server/registration.ts:715](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L715)

***

### DefaultArgsForOptionalValidator[​](#defaultargsforoptionalvalidator "Direct link to DefaultArgsForOptionalValidator")

Ƭ **DefaultArgsForOptionalValidator**<`ArgsValidator`>: \[`ArgsValidator`] extends \[[`Validator`](/api/modules/values.md#validator)<`any`, `any`, `any`>] ? \[[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>] : \[`ArgsValidator`] extends \[[`PropertyValidators`](/api/modules/values.md#propertyvalidators)] ? \[[`ObjectType`](/api/modules/values.md#objecttype)<`ArgsValidator`>] : `OneArgArray`

#### Type parameters[​](#type-parameters-36 "Direct link to Type parameters")

| Name            | Type                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ArgsValidator` | extends [`GenericValidator`](/api/modules/values.md#genericvalidator) \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators) \| `void` |

#### Defined in[​](#defined-in-58 "Direct link to Defined in")

[server/registration.ts:723](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L723)

***

### MutationBuilder[​](#mutationbuilder "Direct link to MutationBuilder")

Ƭ **MutationBuilder**<`DataModel`, `Visibility`>: \<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(`mutation`: { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } | (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue`) => [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Type parameters[​](#type-parameters-37 "Direct link to Type parameters")

| Name         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `DataModel`  | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)     |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) |

#### Type declaration[​](#type-declaration-7 "Direct link to Type declaration")

▸ <`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`mutation`): [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Internal type helper used by Convex code generation.

Used to give [mutationGeneric](/api/modules/server.md#mutationgeneric) a type specific to your data model.

##### Type parameters[​](#type-parameters-38 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

##### Parameters[​](#parameters "Direct link to Parameters")

| Name       | Type                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutation` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

##### Returns[​](#returns "Direct link to Returns")

[`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Defined in[​](#defined-in-59 "Direct link to Defined in")

[server/registration.ts:737](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L737)

***

### MutationBuilderWithTable[​](#mutationbuilderwithtable "Direct link to MutationBuilderWithTable")

Ƭ **MutationBuilderWithTable**<`DataModel`, `Visibility`>: \<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(`mutation`: { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtxWithTable`](/api/modules/server.md#genericmutationctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } | (`ctx`: [`GenericMutationCtxWithTable`](/api/modules/server.md#genericmutationctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue`) => [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Type parameters[​](#type-parameters-39 "Direct link to Type parameters")

| Name         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `DataModel`  | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)     |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) |

#### Type declaration[​](#type-declaration-8 "Direct link to Type declaration")

▸ <`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`mutation`): [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Internal type helper used by Convex code generation.

Used to give [mutationGeneric](/api/modules/server.md#mutationgeneric) a type specific to your data model.

##### Type parameters[​](#type-parameters-40 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

##### Parameters[​](#parameters-1 "Direct link to Parameters")

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutation` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtxWithTable`](/api/modules/server.md#genericmutationctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericMutationCtxWithTable`](/api/modules/server.md#genericmutationctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

##### Returns[​](#returns-1 "Direct link to Returns")

[`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Defined in[​](#defined-in-60 "Direct link to Defined in")

[server/registration.ts:830](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L830)

***

### QueryBuilder[​](#querybuilder "Direct link to QueryBuilder")

Ƭ **QueryBuilder**<`DataModel`, `Visibility`>: \<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(`query`: { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } | (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue`) => [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Type parameters[​](#type-parameters-41 "Direct link to Type parameters")

| Name         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `DataModel`  | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)     |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) |

#### Type declaration[​](#type-declaration-9 "Direct link to Type declaration")

▸ <`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`query`): [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Internal type helper used by Convex code generation.

Used to give [queryGeneric](/api/modules/server.md#querygeneric) a type specific to your data model.

##### Type parameters[​](#type-parameters-42 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

##### Parameters[​](#parameters-2 "Direct link to Parameters")

| Name    | Type                                                                                                                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

##### Returns[​](#returns-2 "Direct link to Returns")

[`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Defined in[​](#defined-in-61 "Direct link to Defined in")

[server/registration.ts:923](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L923)

***

### QueryBuilderWithTable[​](#querybuilderwithtable "Direct link to QueryBuilderWithTable")

Ƭ **QueryBuilderWithTable**<`DataModel`, `Visibility`>: \<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(`query`: { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtxWithTable`](/api/modules/server.md#genericqueryctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } | (`ctx`: [`GenericQueryCtxWithTable`](/api/modules/server.md#genericqueryctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue`) => [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Type parameters[​](#type-parameters-43 "Direct link to Type parameters")

| Name         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `DataModel`  | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)     |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) |

#### Type declaration[​](#type-declaration-10 "Direct link to Type declaration")

▸ <`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`query`): [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Internal type helper used by Convex code generation.

Used to give [queryGeneric](/api/modules/server.md#querygeneric) a type specific to your data model.

##### Type parameters[​](#type-parameters-44 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

##### Parameters[​](#parameters-3 "Direct link to Parameters")

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtxWithTable`](/api/modules/server.md#genericqueryctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericQueryCtxWithTable`](/api/modules/server.md#genericqueryctxwithtable)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

##### Returns[​](#returns-3 "Direct link to Returns")

[`RegisteredQuery`](/api/modules/server.md#registeredquery)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Defined in[​](#defined-in-62 "Direct link to Defined in")

[server/registration.ts:1012](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L1012)

***

### ActionBuilder[​](#actionbuilder "Direct link to ActionBuilder")

Ƭ **ActionBuilder**<`DataModel`, `Visibility`>: \<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(`func`: { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } | (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue`) => [`RegisteredAction`](/api/modules/server.md#registeredaction)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Type parameters[​](#type-parameters-45 "Direct link to Type parameters")

| Name         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `DataModel`  | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)     |
| `Visibility` | extends [`FunctionVisibility`](/api/modules/server.md#functionvisibility) |

#### Type declaration[​](#type-declaration-11 "Direct link to Type declaration")

▸ <`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`func`): [`RegisteredAction`](/api/modules/server.md#registeredaction)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Internal type helper used by Convex code generation.

Used to give [actionGeneric](/api/modules/server.md#actiongeneric) a type specific to your data model.

##### Type parameters[​](#type-parameters-46 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

##### Parameters[​](#parameters-4 "Direct link to Parameters")

| Name   | Type                                                                                                                                                                                                                                                                                                                                                  |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `func` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`DataModel`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

##### Returns[​](#returns-4 "Direct link to Returns")

[`RegisteredAction`](/api/modules/server.md#registeredaction)<`Visibility`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

#### Defined in[​](#defined-in-63 "Direct link to Defined in")

[server/registration.ts:1101](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L1101)

***

### HttpActionBuilder[​](#httpactionbuilder "Direct link to HttpActionBuilder")

Ƭ **HttpActionBuilder**: (`func`: (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, `request`: `Request`) => `Promise`<`Response`>) => [`PublicHttpAction`](/api/modules/server.md#publichttpaction)

#### Type declaration[​](#type-declaration-12 "Direct link to Type declaration")

▸ (`func`): [`PublicHttpAction`](/api/modules/server.md#publichttpaction)

Internal type helper used by Convex code generation.

Used to give [httpActionGeneric](/api/modules/server.md#httpactiongeneric) a type specific to your data model and functions.

##### Parameters[​](#parameters-5 "Direct link to Parameters")

| Name   | Type                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `func` | (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, `request`: `Request`) => `Promise`<`Response`> |

##### Returns[​](#returns-5 "Direct link to Returns")

[`PublicHttpAction`](/api/modules/server.md#publichttpaction)

#### Defined in[​](#defined-in-64 "Direct link to Defined in")

[server/registration.ts:1196](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L1196)

***

### RoutableMethod[​](#routablemethod "Direct link to RoutableMethod")

Ƭ **RoutableMethod**: typeof [`ROUTABLE_HTTP_METHODS`](/api/modules/server.md#routable_http_methods)\[`number`]

A type representing the methods supported by Convex HTTP actions.

HEAD is handled by Convex by running GET and stripping the body. CONNECT is not supported and will not be supported. TRACE is not supported and will not be supported.

#### Defined in[​](#defined-in-65 "Direct link to Defined in")

[server/router.ts:31](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L31)

***

### RouteSpecWithPath[​](#routespecwithpath "Direct link to RouteSpecWithPath")

Ƭ **RouteSpecWithPath**: `Object`

A type representing a route to an HTTP action using an exact request URL path match.

Used by [HttpRouter](/api/classes/server.HttpRouter.md) to route requests to HTTP actions.

#### Type declaration[​](#type-declaration-13 "Direct link to Type declaration")

| Name      | Type                                                          | Description                                |
| --------- | ------------------------------------------------------------- | ------------------------------------------ |
| `path`    | `string`                                                      | Exact HTTP request path to route.          |
| `method`  | [`RoutableMethod`](/api/modules/server.md#routablemethod)     | HTTP method ("GET", "POST", ...) to route. |
| `handler` | [`PublicHttpAction`](/api/modules/server.md#publichttpaction) | The HTTP action to execute.                |

#### Defined in[​](#defined-in-66 "Direct link to Defined in")

[server/router.ts:56](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L56)

***

### RouteSpecWithPathPrefix[​](#routespecwithpathprefix "Direct link to RouteSpecWithPathPrefix")

Ƭ **RouteSpecWithPathPrefix**: `Object`

A type representing a route to an HTTP action using a request URL path prefix match.

Used by [HttpRouter](/api/classes/server.HttpRouter.md) to route requests to HTTP actions.

#### Type declaration[​](#type-declaration-14 "Direct link to Type declaration")

| Name         | Type                                                          | Description                                                                                                            |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pathPrefix` | `string`                                                      | An HTTP request path prefix to route. Requests with a path starting with this value will be routed to the HTTP action. |
| `method`     | [`RoutableMethod`](/api/modules/server.md#routablemethod)     | HTTP method ("GET", "POST", ...) to route.                                                                             |
| `handler`    | [`PublicHttpAction`](/api/modules/server.md#publichttpaction) | The HTTP action to execute.                                                                                            |

#### Defined in[​](#defined-in-67 "Direct link to Defined in")

[server/router.ts:78](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L78)

***

### RouteSpec[​](#routespec "Direct link to RouteSpec")

Ƭ **RouteSpec**: [`RouteSpecWithPath`](/api/modules/server.md#routespecwithpath) | [`RouteSpecWithPathPrefix`](/api/modules/server.md#routespecwithpathprefix)

A type representing a route to an HTTP action.

Used by [HttpRouter](/api/classes/server.HttpRouter.md) to route requests to HTTP actions.

#### Defined in[​](#defined-in-68 "Direct link to Defined in")

[server/router.ts:101](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L101)

***

### SchedulableFunctionReference[​](#schedulablefunctionreference "Direct link to SchedulableFunctionReference")

Ƭ **SchedulableFunctionReference**: [`FunctionReference`](/api/modules/server.md#functionreference)<`"mutation"` | `"action"`, `"public"` | `"internal"`>

A [FunctionReference](/api/modules/server.md#functionreference) that can be scheduled to run in the future.

Schedulable functions are mutations and actions that are public or internal.

#### Defined in[​](#defined-in-69 "Direct link to Defined in")

[server/scheduler.ts:11](https://github.com/get-convex/convex-js/blob/main/src/server/scheduler.ts#L11)

***

### GenericSchema[​](#genericschema "Direct link to GenericSchema")

Ƭ **GenericSchema**: `Record`<`string`, [`TableDefinition`](/api/classes/server.TableDefinition.md)>

A type describing the schema of a Convex project.

This should be constructed using [defineSchema](/api/modules/server.md#defineschema), [defineTable](/api/modules/server.md#definetable), and [v](/api/modules/values.md#v).

#### Defined in[​](#defined-in-70 "Direct link to Defined in")

[server/schema.ts:667](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L667)

***

### DataModelFromSchemaDefinition[​](#datamodelfromschemadefinition "Direct link to DataModelFromSchemaDefinition")

Ƭ **DataModelFromSchemaDefinition**<`SchemaDef`>: `MaybeMakeLooseDataModel`<{ \[TableName in keyof SchemaDef\["tables"] & string]: SchemaDef\["tables"]\[TableName] extends TableDefinition\<infer DocumentType, infer Indexes, infer SearchIndexes, infer VectorIndexes> ? Object : never }, `SchemaDef`\[`"strictTableNameTypes"`]>

Internal type used in Convex code generation!

Convert a [SchemaDefinition](/api/classes/server.SchemaDefinition.md) into a [GenericDataModel](/api/modules/server.md#genericdatamodel).

#### Type parameters[​](#type-parameters-47 "Direct link to Type parameters")

| Name        | Type                                                                                    |
| ----------- | --------------------------------------------------------------------------------------- |
| `SchemaDef` | extends [`SchemaDefinition`](/api/classes/server.SchemaDefinition.md)<`any`, `boolean`> |

#### Defined in[​](#defined-in-71 "Direct link to Defined in")

[server/schema.ts:847](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L847)

***

### SystemTableNames[​](#systemtablenames "Direct link to SystemTableNames")

Ƭ **SystemTableNames**: [`TableNamesInDataModel`](/api/modules/server.md#tablenamesindatamodel)<[`SystemDataModel`](/api/interfaces/server.SystemDataModel.md)>

#### Defined in[​](#defined-in-72 "Direct link to Defined in")

[server/schema.ts:905](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L905)

***

### StorageId[​](#storageid "Direct link to StorageId")

Ƭ **StorageId**: `string`

A reference to a file in storage.

This is used in the [StorageReader](/api/interfaces/server.StorageReader.md) and [StorageWriter](/api/interfaces/server.StorageWriter.md) which are accessible in Convex queries and mutations via QueryCtx and MutationCtx respectively.

#### Defined in[​](#defined-in-73 "Direct link to Defined in")

[server/storage.ts:11](https://github.com/get-convex/convex-js/blob/main/src/server/storage.ts#L11)

***

### FileStorageId[​](#filestorageid "Direct link to FileStorageId")

Ƭ **FileStorageId**: [`GenericId`](/api/modules/values.md#genericid)<`"_storage"`> | [`StorageId`](/api/modules/server.md#storageid)

#### Defined in[​](#defined-in-74 "Direct link to Defined in")

[server/storage.ts:12](https://github.com/get-convex/convex-js/blob/main/src/server/storage.ts#L12)

***

### FileMetadata[​](#filemetadata "Direct link to FileMetadata")

Ƭ **FileMetadata**: `Object`

Metadata for a single file as returned by [storage.getMetadata](/api/interfaces/server.StorageReader.md#getmetadata).

#### Type declaration[​](#type-declaration-15 "Direct link to Type declaration")

| Name          | Type                                            | Description                                                                                            |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `storageId`   | [`StorageId`](/api/modules/server.md#storageid) | ID for referencing the file (eg. via [storage.getUrl](/api/interfaces/server.StorageReader.md#geturl)) |
| `sha256`      | `string`                                        | Hex encoded sha256 checksum of file contents                                                           |
| `size`        | `number`                                        | Size of the file in bytes                                                                              |
| `contentType` | `string` \| `null`                              | ContentType of the file if it was provided on upload                                                   |

#### Defined in[​](#defined-in-75 "Direct link to Defined in")

[server/storage.ts:18](https://github.com/get-convex/convex-js/blob/main/src/server/storage.ts#L18)

***

### SystemFields[​](#systemfields "Direct link to SystemFields")

Ƭ **SystemFields**: `Object`

The fields that Convex automatically adds to documents, not including `_id`.

This is an object type mapping field name to field type.

#### Type declaration[​](#type-declaration-16 "Direct link to Type declaration")

| Name            | Type     |
| --------------- | -------- |
| `_creationTime` | `number` |

#### Defined in[​](#defined-in-76 "Direct link to Defined in")

[server/system\_fields.ts:11](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L11)

***

### IdField[​](#idfield "Direct link to IdField")

Ƭ **IdField**<`TableName`>: `Object`

The `_id` field that Convex automatically adds to documents.

#### Type parameters[​](#type-parameters-48 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Type declaration[​](#type-declaration-17 "Direct link to Type declaration")

| Name  | Type                                                         |
| ----- | ------------------------------------------------------------ |
| `_id` | [`GenericId`](/api/modules/values.md#genericid)<`TableName`> |

#### Defined in[​](#defined-in-77 "Direct link to Defined in")

[server/system\_fields.ts:19](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L19)

***

### WithoutSystemFields[​](#withoutsystemfields "Direct link to WithoutSystemFields")

Ƭ **WithoutSystemFields**<`Document`>: [`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<`Document`, keyof [`SystemFields`](/api/modules/server.md#systemfields) | `"_id"`>>

A Convex document with the system fields like `_id` and `_creationTime` omitted.

#### Type parameters[​](#type-parameters-49 "Direct link to Type parameters")

| Name       | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| `Document` | extends [`GenericDocument`](/api/modules/server.md#genericdocument) |

#### Defined in[​](#defined-in-78 "Direct link to Defined in")

[server/system\_fields.ts:28](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L28)

***

### WithOptionalSystemFields[​](#withoptionalsystemfields "Direct link to WithOptionalSystemFields")

Ƭ **WithOptionalSystemFields**<`Document`>: [`Expand`](/api/modules/server.md#expand)<[`WithoutSystemFields`](/api/modules/server.md#withoutsystemfields)<`Document`> & `Partial`<`Pick`<`Document`, keyof [`SystemFields`](/api/modules/server.md#systemfields) | `"_id"`>>>

A Convex document with the system fields like `_id` and `_creationTime` optional.

#### Type parameters[​](#type-parameters-50 "Direct link to Type parameters")

| Name       | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| `Document` | extends [`GenericDocument`](/api/modules/server.md#genericdocument) |

#### Defined in[​](#defined-in-79 "Direct link to Defined in")

[server/system\_fields.ts:37](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L37)

***

### SystemIndexes[​](#systemindexes "Direct link to SystemIndexes")

Ƭ **SystemIndexes**: `Object`

The indexes that Convex automatically adds to every table.

This is an object mapping index names to index field paths.

#### Type declaration[​](#type-declaration-18 "Direct link to Type declaration")

| Name               | Type                 |
| ------------------ | -------------------- |
| `by_id`            | \[`"_id"`]           |
| `by_creation_time` | \[`"_creationTime"`] |

#### Defined in[​](#defined-in-80 "Direct link to Defined in")

[server/system\_fields.ts:48](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L48)

***

### IndexTiebreakerField[​](#indextiebreakerfield "Direct link to IndexTiebreakerField")

Ƭ **IndexTiebreakerField**: `"_creationTime"`

Convex automatically appends "\_creationTime" to the end of every index to break ties if all of the other fields are identical.

#### Defined in[​](#defined-in-81 "Direct link to Defined in")

[server/system\_fields.ts:61](https://github.com/get-convex/convex-js/blob/main/src/server/system_fields.ts#L61)

***

### VectorSearch[​](#vectorsearch "Direct link to VectorSearch")

Ƭ **VectorSearch**<`DataModel`, `TableName`, `IndexName`>: (`tableName`: `TableName`, `indexName`: `IndexName`, `query`: [`VectorSearchQuery`](/api/interfaces/server.VectorSearchQuery.md)<[`NamedTableInfo`](/api/modules/server.md#namedtableinfo)<`DataModel`, `TableName`>, `IndexName`>) => `Promise`<{ `_id`: [`GenericId`](/api/modules/values.md#genericid)<`TableName`> ; `_score`: `number` }\[]>

#### Type parameters[​](#type-parameters-51 "Direct link to Type parameters")

| Name        | Type                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel)                                                                                      |
| `TableName` | extends [`TableNamesInDataModel`](/api/modules/server.md#tablenamesindatamodel)<`DataModel`>                                                               |
| `IndexName` | extends [`VectorIndexNames`](/api/modules/server.md#vectorindexnames)<[`NamedTableInfo`](/api/modules/server.md#namedtableinfo)<`DataModel`, `TableName`>> |

#### Type declaration[​](#type-declaration-19 "Direct link to Type declaration")

▸ (`tableName`, `indexName`, `query`): `Promise`<{ `_id`: [`GenericId`](/api/modules/values.md#genericid)<`TableName`> ; `_score`: `number` }\[]>

##### Parameters[​](#parameters-6 "Direct link to Parameters")

| Name        | Type                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tableName` | `TableName`                                                                                                                                                          |
| `indexName` | `IndexName`                                                                                                                                                          |
| `query`     | [`VectorSearchQuery`](/api/interfaces/server.VectorSearchQuery.md)<[`NamedTableInfo`](/api/modules/server.md#namedtableinfo)<`DataModel`, `TableName`>, `IndexName`> |

##### Returns[​](#returns-6 "Direct link to Returns")

`Promise`<{ `_id`: [`GenericId`](/api/modules/values.md#genericid)<`TableName`> ; `_score`: `number` }\[]>

#### Defined in[​](#defined-in-82 "Direct link to Defined in")

[server/vector\_search.ts:55](https://github.com/get-convex/convex-js/blob/main/src/server/vector_search.ts#L55)

***

### Expand[​](#expand "Direct link to Expand")

Ƭ **Expand**<`ObjectType`>: `ObjectType` extends `Record`<`any`, `any`> ? { \[Key in keyof ObjectType]: ObjectType\[Key] } : `never`

Hack! This type causes TypeScript to simplify how it renders object types.

It is functionally the identity for object types, but in practice it can simplify expressions like `A & B`.

#### Type parameters[​](#type-parameters-52 "Direct link to Type parameters")

| Name         | Type                           |
| ------------ | ------------------------------ |
| `ObjectType` | extends `Record`<`any`, `any`> |

#### Defined in[​](#defined-in-83 "Direct link to Defined in")

[type\_utils.ts:12](https://github.com/get-convex/convex-js/blob/main/src/type_utils.ts#L12)

***

### BetterOmit[​](#betteromit "Direct link to BetterOmit")

Ƭ **BetterOmit**<`T`, `K`>: { \[Property in keyof T as Property extends K ? never : Property]: T\[Property] }

An `Omit<>` type that:

1. Applies to each element of a union.
2. Preserves the index signature of the underlying type.

#### Type parameters[​](#type-parameters-53 "Direct link to Type parameters")

| Name | Type              |
| ---- | ----------------- |
| `T`  | `T`               |
| `K`  | extends keyof `T` |

#### Defined in[​](#defined-in-84 "Direct link to Defined in")

[type\_utils.ts:24](https://github.com/get-convex/convex-js/blob/main/src/type_utils.ts#L24)

## Variables[​](#variables "Direct link to Variables")

### anyApi[​](#anyapi-1 "Direct link to anyApi")

• `Const` **anyApi**: [`AnyApi`](/api/modules/server.md#anyapi)

A utility for constructing [FunctionReference](/api/modules/server.md#functionreference)s in projects that are not using code generation.

You can create a reference to a function like:

```
const reference = anyApi.myModule.myFunction;
```

This supports accessing any path regardless of what directories and modules are in your project. All function references are typed as AnyFunctionReference.

If you're using code generation, use `api` from `convex/_generated/api` instead. It will be more type-safe and produce better auto-complete in your editor.

#### Defined in[​](#defined-in-85 "Direct link to Defined in")

[server/api.ts:431](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L431)

***

### paginationOptsValidator[​](#paginationoptsvalidator "Direct link to paginationOptsValidator")

• `Const` **paginationOptsValidator**: [`VObject`](/api/classes/values.VObject.md)<{ `id`: `undefined` | `number` ; `endCursor`: `undefined` | `null` | `string` ; `maximumRowsRead`: `undefined` | `number` ; `maximumBytesRead`: `undefined` | `number` ; `numItems`: `number` ; `cursor`: `null` | `string` }, { `numItems`: [`VFloat64`](/api/classes/values.VFloat64.md)<`number`, `"required"`> ; `cursor`: [`VUnion`](/api/classes/values.VUnion.md)<`null` | `string`, \[[`VString`](/api/classes/values.VString.md)<`string`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"required"`, `never`> ; `endCursor`: [`VUnion`](/api/classes/values.VUnion.md)<`undefined` | `null` | `string`, \[[`VString`](/api/classes/values.VString.md)<`string`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"optional"`, `never`> ; `id`: [`VFloat64`](/api/classes/values.VFloat64.md)<`undefined` | `number`, `"optional"`> ; `maximumRowsRead`: [`VFloat64`](/api/classes/values.VFloat64.md)<`undefined` | `number`, `"optional"`> ; `maximumBytesRead`: [`VFloat64`](/api/classes/values.VFloat64.md)<`undefined` | `number`, `"optional"`> }, `"required"`, `"id"` | `"numItems"` | `"cursor"` | `"endCursor"` | `"maximumRowsRead"` | `"maximumBytesRead"`>

A [Validator](/api/modules/values.md#validator) for [PaginationOptions](/api/interfaces/server.PaginationOptions.md).

Use this as the args validator in paginated query functions so that clients can pass pagination options.

**`Example`**

```
import { query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { v } from "convex/values";

export const listMessages = query({
  args: {
    channelId: v.id("channels"),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
      .order("desc")
      .paginate(args.paginationOpts);
  },
});
```

On the client, use `usePaginatedQuery` from `"convex/react"`:

```
const { results, status, loadMore } = usePaginatedQuery(
  api.messages.listMessages,
  { channelId },
  { initialNumItems: 25 },
);
```

**`See`**

<https://docs.convex.dev/database/pagination>

#### Defined in[​](#defined-in-86 "Direct link to Defined in")

[server/pagination.ts:163](https://github.com/get-convex/convex-js/blob/main/src/server/pagination.ts#L163)

***

### ROUTABLE\_HTTP\_METHODS[​](#routable_http_methods "Direct link to ROUTABLE_HTTP_METHODS")

• `Const` **ROUTABLE\_HTTP\_METHODS**: readonly \[`"GET"`, `"POST"`, `"PUT"`, `"DELETE"`, `"OPTIONS"`, `"PATCH"`]

A list of the methods supported by Convex HTTP actions.

HEAD is handled by Convex by running GET and stripping the body. CONNECT is not supported and will not be supported. TRACE is not supported and will not be supported.

#### Defined in[​](#defined-in-87 "Direct link to Defined in")

[server/router.ts:14](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L14)

## Functions[​](#functions "Direct link to Functions")

### getFunctionName[​](#getfunctionname "Direct link to getFunctionName")

▸ **getFunctionName**(`functionReference`): `string`

Get the name of a function from a [FunctionReference](/api/modules/server.md#functionreference).

The name is a string like "myDir/myModule<!-- -->:myFunction<!-- -->". If the exported name of the function is `"default"`, the function name is omitted (e.g. "myDir/myModule").

#### Parameters[​](#parameters-7 "Direct link to Parameters")

| Name                | Type                   | Description                                                                         |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| `functionReference` | `AnyFunctionReference` | A [FunctionReference](/api/modules/server.md#functionreference) to get the name of. |

#### Returns[​](#returns-7 "Direct link to Returns")

`string`

A string of the function's name.

#### Defined in[​](#defined-in-88 "Direct link to Defined in")

[server/api.ts:78](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L78)

***

### makeFunctionReference[​](#makefunctionreference "Direct link to makeFunctionReference")

▸ **makeFunctionReference**<`type`, `args`, `ret`>(`name`): [`FunctionReference`](/api/modules/server.md#functionreference)<`type`, `"public"`, `args`, `ret`>

FunctionReferences generally come from generated code, but in custom clients it may be useful to be able to build one manually.

Real function references are empty objects at runtime, but the same interface can be implemented with an object for tests and clients which don't use code generation.

#### Type parameters[​](#type-parameters-54 "Direct link to Type parameters")

| Name   | Type                                                                                |
| ------ | ----------------------------------------------------------------------------------- |
| `type` | extends [`FunctionType`](/api/modules/server.md#functiontype)                       |
| `args` | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) = `any` |
| `ret`  | `any`                                                                               |

#### Parameters[​](#parameters-8 "Direct link to Parameters")

| Name   | Type     | Description                                                      |
| ------ | -------- | ---------------------------------------------------------------- |
| `name` | `string` | The identifier of the function. E.g. `path/to/file:functionName` |

#### Returns[​](#returns-8 "Direct link to Returns")

[`FunctionReference`](/api/modules/server.md#functionreference)<`type`, `"public"`, `args`, `ret`>

#### Defined in[​](#defined-in-89 "Direct link to Defined in")

[server/api.ts:122](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L122)

***

### filterApi[​](#filterapi-1 "Direct link to filterApi")

▸ **filterApi**<`API`, `Predicate`>(`api`): [`FilterApi`](/api/modules/server.md#filterapi)<`API`, `Predicate`>

Given an api of type API and a FunctionReference subtype, return an api object containing only the function references that match.

```
const q = filterApi<typeof api, FunctionReference<"query">>(api)
```

#### Type parameters[​](#type-parameters-55 "Direct link to Type parameters")

| Name        |
| ----------- |
| `API`       |
| `Predicate` |

#### Parameters[​](#parameters-9 "Direct link to Parameters")

| Name  | Type  |
| ----- | ----- |
| `api` | `API` |

#### Returns[​](#returns-9 "Direct link to Returns")

[`FilterApi`](/api/modules/server.md#filterapi)<`API`, `Predicate`>

#### Defined in[​](#defined-in-90 "Direct link to Defined in")

[server/api.ts:305](https://github.com/get-convex/convex-js/blob/main/src/server/api.ts#L305)

***

### createFunctionHandle[​](#createfunctionhandle "Direct link to createFunctionHandle")

▸ **createFunctionHandle**<`Type`, `Args`, `ReturnType`>(`functionReference`): `Promise`<[`FunctionHandle`](/api/modules/server.md#functionhandle)<`Type`, `Args`, `ReturnType`>>

Create a serializable reference to a Convex function. Passing a this reference to another component allows that component to call this function during the current function execution or at any later time. Function handles are used like `api.folder.function` FunctionReferences, e.g. `ctx.scheduler.runAfter(0, functionReference, args)`.

A function reference is stable across code pushes but it's possible the Convex function it refers to might no longer exist.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

#### Type parameters[​](#type-parameters-56 "Direct link to Type parameters")

| Name         | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `Type`       | extends [`FunctionType`](/api/modules/server.md#functiontype)               |
| `Args`       | extends [`DefaultFunctionArgs`](/api/modules/server.md#defaultfunctionargs) |
| `ReturnType` | `ReturnType`                                                                |

#### Parameters[​](#parameters-10 "Direct link to Parameters")

| Name                | Type                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `functionReference` | [`FunctionReference`](/api/modules/server.md#functionreference)<`Type`, `"public"` \| `"internal"`, `Args`, `ReturnType`> |

#### Returns[​](#returns-10 "Direct link to Returns")

`Promise`<[`FunctionHandle`](/api/modules/server.md#functionhandle)<`Type`, `Args`, `ReturnType`>>

#### Defined in[​](#defined-in-91 "Direct link to Defined in")

[server/components/index.ts:54](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L54)

***

### defineComponent[​](#definecomponent "Direct link to defineComponent")

▸ **defineComponent**<`Exports`>(`name`): [`ComponentDefinition`](/api/modules/server.md#componentdefinition)<`Exports`>

Define a component, a piece of a Convex deployment with namespaced resources.

The default the default export of a module like "cool-component/convex.config.js" is a \`@link ComponentDefinition}, but during component definition evaluation this is its type instead.

@param name Name must be alphanumeric plus underscores. Typically these are lowercase with underscores like `"onboarding_flow_tracker"`.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

#### Type parameters[​](#type-parameters-57 "Direct link to Type parameters")

| Name      | Type                               |
| --------- | ---------------------------------- |
| `Exports` | extends `ComponentExports` = `any` |

#### Parameters[​](#parameters-11 "Direct link to Parameters")

| Name   | Type     |
| ------ | -------- |
| `name` | `string` |

#### Returns[​](#returns-11 "Direct link to Returns")

[`ComponentDefinition`](/api/modules/server.md#componentdefinition)<`Exports`>

#### Defined in[​](#defined-in-92 "Direct link to Defined in")

[server/components/index.ts:371](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L371)

***

### defineApp[​](#defineapp "Direct link to defineApp")

▸ **defineApp**(): `AppDefinition`

Attach components, reuseable pieces of a Convex deployment, to this Convex app.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

#### Returns[​](#returns-12 "Direct link to Returns")

`AppDefinition`

#### Defined in[​](#defined-in-93 "Direct link to Defined in")

[server/components/index.ts:397](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L397)

***

### componentsGeneric[​](#componentsgeneric "Direct link to componentsGeneric")

▸ **componentsGeneric**(): [`AnyChildComponents`](/api/modules/server.md#anychildcomponents)

#### Returns[​](#returns-13 "Direct link to Returns")

[`AnyChildComponents`](/api/modules/server.md#anychildcomponents)

#### Defined in[​](#defined-in-94 "Direct link to Defined in")

[server/components/index.ts:452](https://github.com/get-convex/convex-js/blob/main/src/server/components/index.ts#L452)

***

### getFunctionAddress[​](#getfunctionaddress "Direct link to getFunctionAddress")

▸ **getFunctionAddress**(`functionReference`): { `functionHandle`: `string` = functionReference; `name?`: `undefined` ; `reference?`: `undefined` = referencePath } | { `functionHandle?`: `undefined` = functionReference; `name`: `any` ; `reference?`: `undefined` = referencePath } | { `functionHandle?`: `undefined` = functionReference; `name?`: `undefined` ; `reference`: `string` = referencePath }

#### Parameters[​](#parameters-12 "Direct link to Parameters")

| Name                | Type  |
| ------------------- | ----- |
| `functionReference` | `any` |

#### Returns[​](#returns-14 "Direct link to Returns")

{ `functionHandle`: `string` = functionReference; `name?`: `undefined` ; `reference?`: `undefined` = referencePath } | { `functionHandle?`: `undefined` = functionReference; `name`: `any` ; `reference?`: `undefined` = referencePath } | { `functionHandle?`: `undefined` = functionReference; `name?`: `undefined` ; `reference`: `string` = referencePath }

#### Defined in[​](#defined-in-95 "Direct link to Defined in")

[server/components/paths.ts:20](https://github.com/get-convex/convex-js/blob/main/src/server/components/paths.ts#L20)

***

### cronJobs[​](#cronjobs "Direct link to cronJobs")

▸ **cronJobs**(): [`Crons`](/api/classes/server.Crons.md)

Create a CronJobs object to schedule recurring tasks.

```
// convex/crons.js
import { cronJobs } from 'convex/server';
import { api } from "./_generated/api";

const crons = cronJobs();
crons.weekly(
  "weekly re-engagement email",
  {
    hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)
    minuteUTC: 30,
  },
  api.emails.send
)
export default crons;
```

#### Returns[​](#returns-15 "Direct link to Returns")

[`Crons`](/api/classes/server.Crons.md)

#### Defined in[​](#defined-in-96 "Direct link to Defined in")

[server/cron.ts:180](https://github.com/get-convex/convex-js/blob/main/src/server/cron.ts#L180)

***

### mutationGeneric[​](#mutationgeneric "Direct link to mutationGeneric")

▸ **mutationGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`mutation`): [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define a mutation in this Convex app's public API.

You should generally use the `mutation` function from `"./_generated/server"`.

Mutations can read from and write to the database, and are accessible from the client. They run **transactionally**, all database reads and writes within a single mutation are atomic and isolated from other mutations.

**`Example`**

```
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
  args: { text: v.string() },
  returns: v.id("tasks"),
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", {
      text: args.text,
      completed: false,
    });
    return taskId;
  },
});
```

**Best practice:** Always include `args` and `returns` validators on all mutations. If the function doesn't return a value, use `returns: v.null()`. Argument validation is critical for security since public mutations are exposed to the internet.

**Common mistake:** Mutations cannot call third-party APIs or use `fetch`. They must be deterministic. Use actions for external API calls.

**Common mistake:** Do not use `mutation` for sensitive internal functions that should not be called by clients. Use `internalMutation` instead.

**`See`**

<https://docs.convex.dev/functions/mutation-functions>

#### Type parameters[​](#type-parameters-58 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-13 "Direct link to Parameters")

| Name       | Type                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutation` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

#### Returns[​](#returns-16 "Direct link to Returns")

[`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped mutation. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-97 "Direct link to Defined in")

[server/registration.ts:741](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L741)

***

### internalMutationGeneric[​](#internalmutationgeneric "Direct link to internalMutationGeneric")

▸ **internalMutationGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`mutation`): [`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define a mutation that is only accessible from other Convex functions (but not from the client).

You should generally use the `internalMutation` function from `"./_generated/server"`.

Internal mutations can read from and write to the database but are **not** exposed as part of your app's public API. They can only be called by other Convex functions using `ctx.runMutation` or by the scheduler. Like public mutations, they run transactionally.

**`Example`**

```
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

// This mutation can only be called from other Convex functions:
export const markTaskCompleted = internalMutation({
  args: { taskId: v.id("tasks") },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.patch("tasks", args.taskId, { completed: true });
    return null;
  },
});
```

**Best practice:** Use `internalMutation` for any mutation that should not be directly callable by clients, such as write-back functions from actions or scheduled background work. Reference it via the `internal` object: `await ctx.runMutation(internal.myModule.markTaskCompleted, { taskId })`.

**`See`**

<https://docs.convex.dev/functions/internal-functions>

#### Type parameters[​](#type-parameters-59 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-14 "Direct link to Parameters")

| Name       | Type                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutation` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericMutationCtx`](/api/interfaces/server.GenericMutationCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

#### Returns[​](#returns-17 "Direct link to Returns")

[`RegisteredMutation`](/api/modules/server.md#registeredmutation)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped mutation. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-98 "Direct link to Defined in")

[server/registration.ts:741](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L741)

***

### queryGeneric[​](#querygeneric "Direct link to queryGeneric")

▸ **queryGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`query`): [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define a query in this Convex app's public API.

You should generally use the `query` function from `"./_generated/server"`.

Queries can read from the database and are accessible from the client. They are **reactive**, when used with `useQuery` in React, the component automatically re-renders whenever the underlying data changes. Queries cannot modify the database. Query results are automatically cached by the Convex client and kept consistent via WebSocket subscriptions.

**`Example`**

```
import { query } from "./_generated/server";
import { v } from "convex/values";

export const listTasks = query({
  args: { completed: v.optional(v.boolean()) },
  returns: v.array(v.object({
    _id: v.id("tasks"),
    _creationTime: v.number(),
    text: v.string(),
    completed: v.boolean(),
  })),
  handler: async (ctx, args) => {
    if (args.completed !== undefined) {
      return await ctx.db
        .query("tasks")
        .withIndex("by_completed", (q) => q.eq("completed", args.completed))
        .collect();
    }
    return await ctx.db.query("tasks").collect();
  },
});
```

**Best practice:** Always include `args` and `returns` validators. Use `.withIndex()` instead of `.filter()` for efficient database queries. Queries should be fast since they run on every relevant data change.

**Common mistake:** Queries are pure reads, they cannot write to the database, call external APIs, or schedule functions. Use actions for HTTP calls and mutations for database writes and scheduling.

**`See`**

<https://docs.convex.dev/functions/query-functions>

#### Type parameters[​](#type-parameters-60 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-15 "Direct link to Parameters")

| Name    | Type                                                                                                                                                                                                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

#### Returns[​](#returns-18 "Direct link to Returns")

[`RegisteredQuery`](/api/modules/server.md#registeredquery)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped query. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-99 "Direct link to Defined in")

[server/registration.ts:927](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L927)

***

### internalQueryGeneric[​](#internalquerygeneric "Direct link to internalQueryGeneric")

▸ **internalQueryGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`query`): [`RegisteredQuery`](/api/modules/server.md#registeredquery)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define a query that is only accessible from other Convex functions (but not from the client).

You should generally use the `internalQuery` function from `"./_generated/server"`.

Internal queries can read from the database but are **not** exposed as part of your app's public API. They can only be called by other Convex functions using `ctx.runQuery`. This is useful for loading data in actions or for helper queries that shouldn't be client-facing.

**`Example`**

```
import { internalQuery } from "./_generated/server";
import { v } from "convex/values";

// Only callable from other Convex functions:
export const getUser = internalQuery({
  args: { userId: v.id("users") },
  returns: v.union(
    v.object({
      _id: v.id("users"),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
    }),
    v.null(),
  ),
  handler: async (ctx, args) => {
    return await ctx.db.get("users", args.userId);
  },
});
```

**Best practice:** Use `internalQuery` for data-loading in actions via `ctx.runQuery(internal.myModule.getUser, { userId })`.

**`See`**

<https://docs.convex.dev/functions/internal-functions>

#### Type parameters[​](#type-parameters-61 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-16 "Direct link to Parameters")

| Name    | Type                                                                                                                                                                                                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericQueryCtx`](/api/interfaces/server.GenericQueryCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` |

#### Returns[​](#returns-19 "Direct link to Returns")

[`RegisteredQuery`](/api/modules/server.md#registeredquery)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped query. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-100 "Direct link to Defined in")

[server/registration.ts:927](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L927)

***

### actionGeneric[​](#actiongeneric "Direct link to actionGeneric")

▸ **actionGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`func`): [`RegisteredAction`](/api/modules/server.md#registeredaction)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define an action in this Convex app's public API.

Actions can call third-party APIs, use Node.js libraries, and perform other side effects. Unlike queries and mutations, actions do **not** have direct database access (`ctx.db` is not available). Instead, use `ctx.runQuery` and `ctx.runMutation` to read and write data.

You should generally use the `action` function from `"./_generated/server"`.

Actions are accessible from the client and run outside of the database transaction, so they are not atomic. They are best for integrating with external services.

**`Example`**

```
// Add "use node"; at the top of the file if using Node.js built-in modules.
import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const generateSummary = action({
  args: { text: v.string() },
  returns: v.string(),
  handler: async (ctx, args) => {
    // Call an external API:
    const response = await fetch("https://api.example.com/summarize", {
      method: "POST",
      body: JSON.stringify({ text: args.text }),
    });
    const { summary } = await response.json();

    // Write results back via a mutation:
    await ctx.runMutation(internal.myModule.saveSummary, {
      text: args.text,
      summary,
    });

    return summary;
  },
});
```

**Best practice:** Minimize the number of `ctx.runQuery` and `ctx.runMutation` calls from actions. Each call is a separate transaction, so splitting logic across multiple calls introduces the risk of race conditions. Try to batch reads/writes into single query/mutation calls.

**`"use node"` runtime:** Actions run in Convex's default JavaScript runtime, which supports `fetch` and most NPM packages. Only add `"use node";` at the top of the file if a third-party library specifically requires Node.js built-in APIs, it is a last resort, not the default. Node.js actions have slower cold starts, and **only actions can be defined in `"use node"` files** (no queries or mutations), so prefer the default runtime whenever possible.

**Common mistake:** Do not try to access `ctx.db` in an action, it is not available. Use `ctx.runQuery` and `ctx.runMutation` instead.

**`See`**

<https://docs.convex.dev/functions/actions>

#### Type parameters[​](#type-parameters-62 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-17 "Direct link to Parameters")

| Name   | Type                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                       |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `func` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` | The function. It receives a [GenericActionCtx](/api/interfaces/server.GenericActionCtx.md) as its first argument. |

#### Returns[​](#returns-20 "Direct link to Returns")

[`RegisteredAction`](/api/modules/server.md#registeredaction)<`"public"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped function. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-101 "Direct link to Defined in")

[server/registration.ts:1105](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L1105)

***

### internalActionGeneric[​](#internalactiongeneric "Direct link to internalActionGeneric")

▸ **internalActionGeneric**<`ArgsValidator`, `ReturnsValidator`, `ReturnValue`, `OneOrZeroArgs`>(`func`): [`RegisteredAction`](/api/modules/server.md#registeredaction)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

Define an action that is only accessible from other Convex functions (but not from the client).

You should generally use the `internalAction` function from `"./_generated/server"`.

Internal actions behave like public actions (they can call external APIs and use Node.js libraries) but are **not** exposed in your app's public API. They can only be called by other Convex functions using `ctx.runAction` or via the scheduler.

**`Example`**

```
import { internalAction } from "./_generated/server";
import { v } from "convex/values";

export const sendEmail = internalAction({
  args: { to: v.string(), subject: v.string(), body: v.string() },
  returns: v.null(),
  handler: async (ctx, args) => {
    // Call an external email service (fetch works in the default runtime):
    await fetch("https://api.email-service.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
    });
    return null;
  },
});
```

**Best practice:** Use `internalAction` for background work scheduled from mutations: `await ctx.scheduler.runAfter(0, internal.myModule.sendEmail, { ... })`. Only use `ctx.runAction` from another action if you need to cross runtimes (e.g., default Convex runtime to Node.js). Otherwise, extract shared code into a helper function.

**`"use node"` runtime:** Only add `"use node";` at the top of the file as a last resort when a third-party library requires Node.js APIs. Node.js actions have slower cold starts, and **only actions can be defined in `"use node"` files** (no queries or mutations).

**`See`**

<https://docs.convex.dev/functions/internal-functions>

#### Type parameters[​](#type-parameters-63 "Direct link to Type parameters")

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ArgsValidator`    | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnsValidator` | extends `void` \| [`Validator`](/api/modules/values.md#validator)<`any`, `"required"`, `any`> \| [`PropertyValidators`](/api/modules/values.md#propertyvalidators)                                                                                                                                                                                                                                                                                                                                     |
| `ReturnValue`      | extends `any` = `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OneOrZeroArgs`    | extends [`ArgsArray`](/api/modules/server.md#argsarray) \| `OneArgArray`<[`Infer`](/api/modules/values.md#infer)<`ArgsValidator`>> \| `OneArgArray`<[`Expand`](/api/modules/server.md#expand)<{ \[Property in string \| number \| symbol]?: Exclude\<Infer\<ArgsValidator\[Property]>, undefined> } & { \[Property in string \| number \| symbol]: Infer\<ArgsValidator\[Property]> }>> = [`DefaultArgsForOptionalValidator`](/api/modules/server.md#defaultargsforoptionalvalidator)<`ArgsValidator`> |

#### Parameters[​](#parameters-18 "Direct link to Parameters")

| Name   | Type                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                       |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `func` | { `args?`: `ArgsValidator` ; `returns?`: `ReturnsValidator` ; `handler`: (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` } \| (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<`any`>, ...`args`: `OneOrZeroArgs`) => `ReturnValue` | The function. It receives a [GenericActionCtx](/api/interfaces/server.GenericActionCtx.md) as its first argument. |

#### Returns[​](#returns-21 "Direct link to Returns")

[`RegisteredAction`](/api/modules/server.md#registeredaction)<`"internal"`, [`ArgsArrayToObject`](/api/modules/server.md#argsarraytoobject)<`OneOrZeroArgs`>, `ReturnValue`>

The wrapped function. Include this as an `export` to name it and make it accessible.

#### Defined in[​](#defined-in-102 "Direct link to Defined in")

[server/registration.ts:1105](https://github.com/get-convex/convex-js/blob/main/src/server/registration.ts#L1105)

***

### httpActionGeneric[​](#httpactiongeneric "Direct link to httpActionGeneric")

▸ **httpActionGeneric**(`func`): [`PublicHttpAction`](/api/modules/server.md#publichttpaction)

Define a Convex HTTP action.

HTTP actions handle raw HTTP requests and return HTTP responses. They are registered by routing URL paths to them in `convex/http.ts` using [HttpRouter](/api/classes/server.HttpRouter.md). Like regular actions, they can call external APIs and use `ctx.runQuery` / `ctx.runMutation` but do not have direct `ctx.db` access.

**`Example`**

```
// convex/http.ts
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

http.route({
  path: "/api/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json();
    // Process the webhook payload...
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

export default http;
```

**Best practice:** HTTP actions are registered at the exact path specified. For example, `path: "/api/webhook"` registers at `/api/webhook`.

**`See`**

<https://docs.convex.dev/functions/http-actions>

#### Parameters[​](#parameters-19 "Direct link to Parameters")

| Name   | Type                                                                                                                                                                                    | Description                                                                                                                                             |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `func` | (`ctx`: [`GenericActionCtx`](/api/interfaces/server.GenericActionCtx.md)<[`GenericDataModel`](/api/modules/server.md#genericdatamodel)>, `request`: `Request`) => `Promise`<`Response`> | The function. It receives a [GenericActionCtx](/api/interfaces/server.GenericActionCtx.md) as its first argument, and a `Request` object as its second. |

#### Returns[​](#returns-22 "Direct link to Returns")

[`PublicHttpAction`](/api/modules/server.md#publichttpaction)

The wrapped function. Route a URL path to this function in `convex/http.ts`.

#### Defined in[​](#defined-in-103 "Direct link to Defined in")

[server/impl/registration\_impl.ts:719](https://github.com/get-convex/convex-js/blob/main/src/server/impl/registration_impl.ts#L719)

***

### paginationResultValidator[​](#paginationresultvalidator "Direct link to paginationResultValidator")

▸ **paginationResultValidator**<`T`>(`itemValidator`): [`VObject`](/api/classes/values.VObject.md)<{ `splitCursor`: `undefined` | `null` | `string` ; `pageStatus`: `undefined` | `null` | `"SplitRecommended"` | `"SplitRequired"` ; `page`: `T`\[`"type"`]\[] ; `continueCursor`: `string` ; `isDone`: `boolean` }, { `page`: [`VArray`](/api/classes/values.VArray.md)<`T`\[`"type"`]\[], `T`, `"required"`> ; `continueCursor`: [`VString`](/api/classes/values.VString.md)<`string`, `"required"`> ; `isDone`: [`VBoolean`](/api/classes/values.VBoolean.md)<`boolean`, `"required"`> ; `splitCursor`: [`VUnion`](/api/classes/values.VUnion.md)<`undefined` | `null` | `string`, \[[`VString`](/api/classes/values.VString.md)<`string`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"optional"`, `never`> ; `pageStatus`: [`VUnion`](/api/classes/values.VUnion.md)<`undefined` | `null` | `"SplitRecommended"` | `"SplitRequired"`, \[[`VLiteral`](/api/classes/values.VLiteral.md)<`"SplitRecommended"`, `"required"`>, [`VLiteral`](/api/classes/values.VLiteral.md)<`"SplitRequired"`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"optional"`, `never`> }, `"required"`, `"page"` | `"continueCursor"` | `"isDone"` | `"splitCursor"` | `"pageStatus"`>

A [Validator](/api/modules/values.md#validator) factory for [PaginationResult](/api/interfaces/server.PaginationResult.md).

Create a validator for the result of calling [paginate](/api/interfaces/server.OrderedQuery.md#paginate) with a given item validator.

For example:

```
const paginationResultValidator = paginationResultValidator(v.object({
  _id: v.id("users"),
  _creationTime: v.number(),
  name: v.string(),
}));
```

#### Type parameters[​](#type-parameters-64 "Direct link to Type parameters")

| Name | Type                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------ |
| `T`  | extends [`Validator`](/api/modules/values.md#validator)<[`Value`](/api/modules/values.md#value), `"required"`, `string`> |

#### Parameters[​](#parameters-20 "Direct link to Parameters")

| Name            | Type | Description                           |
| --------------- | ---- | ------------------------------------- |
| `itemValidator` | `T`  | A validator for the items in the page |

#### Returns[​](#returns-23 "Direct link to Returns")

[`VObject`](/api/classes/values.VObject.md)<{ `splitCursor`: `undefined` | `null` | `string` ; `pageStatus`: `undefined` | `null` | `"SplitRecommended"` | `"SplitRequired"` ; `page`: `T`\[`"type"`]\[] ; `continueCursor`: `string` ; `isDone`: `boolean` }, { `page`: [`VArray`](/api/classes/values.VArray.md)<`T`\[`"type"`]\[], `T`, `"required"`> ; `continueCursor`: [`VString`](/api/classes/values.VString.md)<`string`, `"required"`> ; `isDone`: [`VBoolean`](/api/classes/values.VBoolean.md)<`boolean`, `"required"`> ; `splitCursor`: [`VUnion`](/api/classes/values.VUnion.md)<`undefined` | `null` | `string`, \[[`VString`](/api/classes/values.VString.md)<`string`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"optional"`, `never`> ; `pageStatus`: [`VUnion`](/api/classes/values.VUnion.md)<`undefined` | `null` | `"SplitRecommended"` | `"SplitRequired"`, \[[`VLiteral`](/api/classes/values.VLiteral.md)<`"SplitRecommended"`, `"required"`>, [`VLiteral`](/api/classes/values.VLiteral.md)<`"SplitRequired"`, `"required"`>, [`VNull`](/api/classes/values.VNull.md)<`null`, `"required"`>], `"optional"`, `never`> }, `"required"`, `"page"` | `"continueCursor"` | `"isDone"` | `"splitCursor"` | `"pageStatus"`>

A validator for the pagination result

#### Defined in[​](#defined-in-104 "Direct link to Defined in")

[server/pagination.ts:192](https://github.com/get-convex/convex-js/blob/main/src/server/pagination.ts#L192)

***

### httpRouter[​](#httprouter "Direct link to httpRouter")

▸ **httpRouter**(): [`HttpRouter`](/api/classes/server.HttpRouter.md)

Return a new [HttpRouter](/api/classes/server.HttpRouter.md) object.

#### Returns[​](#returns-24 "Direct link to Returns")

[`HttpRouter`](/api/classes/server.HttpRouter.md)

#### Defined in[​](#defined-in-105 "Direct link to Defined in")

[server/router.ts:47](https://github.com/get-convex/convex-js/blob/main/src/server/router.ts#L47)

***

### defineTable[​](#definetable "Direct link to defineTable")

▸ **defineTable**<`DocumentSchema`>(`documentSchema`): [`TableDefinition`](/api/classes/server.TableDefinition.md)<`DocumentSchema`>

Define a table in a schema.

You can either specify the schema of your documents as an object like

```
defineTable({
  field: v.string()
});
```

or as a schema type like

```
defineTable(
 v.union(
   v.object({...}),
   v.object({...})
 )
);
```

#### Type parameters[​](#type-parameters-65 "Direct link to Type parameters")

| Name             | Type                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| `DocumentSchema` | extends [`Validator`](/api/modules/values.md#validator)<`Record`<`string`, `any`>, `"required"`, `any`> |

#### Parameters[​](#parameters-21 "Direct link to Parameters")

| Name             | Type             | Description                                 |
| ---------------- | ---------------- | ------------------------------------------- |
| `documentSchema` | `DocumentSchema` | The type of documents stored in this table. |

#### Returns[​](#returns-25 "Direct link to Returns")

[`TableDefinition`](/api/classes/server.TableDefinition.md)<`DocumentSchema`>

A [TableDefinition](/api/classes/server.TableDefinition.md) for the table.

#### Defined in[​](#defined-in-106 "Direct link to Defined in")

[server/schema.ts:615](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L615)

▸ **defineTable**<`DocumentSchema`>(`documentSchema`): [`TableDefinition`](/api/classes/server.TableDefinition.md)<[`VObject`](/api/classes/values.VObject.md)<[`ObjectType`](/api/modules/values.md#objecttype)<`DocumentSchema`>, `DocumentSchema`>>

Define a table in a schema.

You can either specify the schema of your documents as an object like

```
defineTable({
  field: v.string()
});
```

or as a schema type like

```
defineTable(
 v.union(
   v.object({...}),
   v.object({...})
 )
);
```

#### Type parameters[​](#type-parameters-66 "Direct link to Type parameters")

| Name             | Type                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `DocumentSchema` | extends `Record`<`string`, [`GenericValidator`](/api/modules/values.md#genericvalidator)> |

#### Parameters[​](#parameters-22 "Direct link to Parameters")

| Name             | Type             | Description                                 |
| ---------------- | ---------------- | ------------------------------------------- |
| `documentSchema` | `DocumentSchema` | The type of documents stored in this table. |

#### Returns[​](#returns-26 "Direct link to Returns")

[`TableDefinition`](/api/classes/server.TableDefinition.md)<[`VObject`](/api/classes/values.VObject.md)<[`ObjectType`](/api/modules/values.md#objecttype)<`DocumentSchema`>, `DocumentSchema`>>

A [TableDefinition](/api/classes/server.TableDefinition.md) for the table.

#### Defined in[​](#defined-in-107 "Direct link to Defined in")

[server/schema.ts:643](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L643)

***

### defineSchema[​](#defineschema "Direct link to defineSchema")

▸ **defineSchema**<`Schema`, `StrictTableNameTypes`>(`schema`, `options?`): [`SchemaDefinition`](/api/classes/server.SchemaDefinition.md)<`Schema`, `StrictTableNameTypes`>

Define the schema of this Convex project.

This should be exported as the default export from a `schema.ts` file in your `convex/` directory. The schema enables runtime validation of documents and provides end-to-end TypeScript type safety.

Every document in Convex automatically has two system fields:

* `_id` - a unique document ID with validator `v.id("tableName")`
* `_creationTime` - a creation timestamp with validator `v.number()`

You do not need to include these in your schema definition, they are added automatically.

**`Example`**

```
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
  }).index("by_email", ["email"]),

  messages: defineTable({
    body: v.string(),
    userId: v.id("users"),
    channelId: v.id("channels"),
  }).index("by_channel", ["channelId"]),

  channels: defineTable({
    name: v.string(),
  }),

  // Discriminated union table:
  results: defineTable(
    v.union(
      v.object({ kind: v.literal("error"), message: v.string() }),
      v.object({ kind: v.literal("success"), value: v.number() }),
    )
  ),
});
```

**Best practice:** Always include all index fields in the index name. For example, an index on `["field1", "field2"]` should be named `"by_field1_field2"`.

**`See`**

<https://docs.convex.dev/database/schemas>

#### Type parameters[​](#type-parameters-67 "Direct link to Type parameters")

| Name                   | Type                                                            |
| ---------------------- | --------------------------------------------------------------- |
| `Schema`               | extends [`GenericSchema`](/api/modules/server.md#genericschema) |
| `StrictTableNameTypes` | extends `boolean` = `true`                                      |

#### Parameters[​](#parameters-23 "Direct link to Parameters")

| Name       | Type                                                                                           | Description                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `schema`   | `Schema`                                                                                       | A map from table name to [TableDefinition](/api/classes/server.TableDefinition.md) for all of the tables in this project. |
| `options?` | [`DefineSchemaOptions`](/api/interfaces/server.DefineSchemaOptions.md)<`StrictTableNameTypes`> | Optional configuration. See [DefineSchemaOptions](/api/interfaces/server.DefineSchemaOptions.md) for a full description.  |

#### Returns[​](#returns-27 "Direct link to Returns")

[`SchemaDefinition`](/api/classes/server.SchemaDefinition.md)<`Schema`, `StrictTableNameTypes`>

The schema.

#### Defined in[​](#defined-in-108 "Direct link to Defined in")

[server/schema.ts:830](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L830)
