# Interface: GenericDatabaseWriter\<DataModel>

[server](/api/modules/server.md).GenericDatabaseWriter

An interface to read from and write to the database within Convex mutation functions.

Available as `ctx.db` in mutations. You should generally use the `DatabaseWriter` type from `"./_generated/server"`.

Extends [GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md) with write operations. All reads and writes within a single mutation are executed **atomically**, you never have to worry about partial writes leaving your data in an inconsistent state.

**`Example`**

```
// Insert a new document:
const userId = await ctx.db.insert("users", { name: "Alice", email: "alice@example.com" });

// Update specific fields (shallow merge):
await ctx.db.patch("users", userId, { name: "Alice Smith" });

// Replace entire document (all non-system fields):
await ctx.db.replace("users", userId, { name: "Bob", email: "bob@example.com" });

// Delete a document:
await ctx.db.delete("users", userId);

// Delete multiple documents (collect first, then delete each):
const oldTasks = await ctx.db
  .query("tasks")
  .withIndex("by_completed", (q) => q.eq("completed", true))
  .collect();
for (const task of oldTasks) {
  await ctx.db.delete("tasks", task._id);
}
```

**`See`**

<https://docs.convex.dev/database/writing-data>

## Type parameters[​](#type-parameters "Direct link to Type parameters")

| Name        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `DataModel` | extends [`GenericDataModel`](/api/modules/server.md#genericdatamodel) |

## Hierarchy[​](#hierarchy "Direct link to Hierarchy")

* [`GenericDatabaseReader`](/api/interfaces/server.GenericDatabaseReader.md)<`DataModel`>

  ↳ **`GenericDatabaseWriter`**

## Properties[​](#properties "Direct link to Properties")

### system[​](#system "Direct link to system")

• **system**: `BaseDatabaseReader`<[`SystemDataModel`](/api/interfaces/server.SystemDataModel.md)>

An interface to read from the system tables within Convex query functions.

System tables include `_storage` (file metadata) and `_scheduled_functions` (scheduled function state). Use `ctx.db.system.get()` and `ctx.db.system.query()` just like regular tables.

**`Example`**

```
// Get file metadata from the _storage system table:
const metadata = await ctx.db.system.get("_storage", storageId);
// metadata has: _id, _creationTime, contentType, sha256, size
```

#### Inherited from[​](#inherited-from "Direct link to Inherited from")

[GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md).[system](/api/interfaces/server.GenericDatabaseReader.md#system)

#### Defined in[​](#defined-in "Direct link to Defined in")

[server/database.ts:152](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L152)

## Methods[​](#methods "Direct link to Methods")

### get[​](#get "Direct link to get")

▸ **get**<`TableName`>(`table`, `id`): `Promise`<`null` | [`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>>

Fetch a single document from the database by its [GenericId](/api/modules/values.md#genericid).

#### Type parameters[​](#type-parameters-1 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters "Direct link to Parameters")

| Name    | Type                                                                     | Description                                                                                   |
| ------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `table` | `TableName`                                                              | The name of the table to fetch the document from.                                             |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`NonUnion`<`TableName`>> | The [GenericId](/api/modules/values.md#genericid) of the document to fetch from the database. |

#### Returns[​](#returns "Direct link to Returns")

`Promise`<`null` | [`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>>

* The [GenericDocument](/api/modules/server.md#genericdocument) of the document at the given [GenericId](/api/modules/values.md#genericid), or `null` if it no longer exists.

#### Inherited from[​](#inherited-from-1 "Direct link to Inherited from")

[GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md).[get](/api/interfaces/server.GenericDatabaseReader.md#get)

#### Defined in[​](#defined-in-1 "Direct link to Defined in")

[server/database.ts:23](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L23)

▸ **get**<`TableName`>(`id`): `Promise`<`null` | [`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>>

Fetch a single document from the database by its [GenericId](/api/modules/values.md#genericid).

#### Type parameters[​](#type-parameters-2 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-1 "Direct link to Parameters")

| Name | Type                                                         | Description                                                                                   |
| ---- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `id` | [`GenericId`](/api/modules/values.md#genericid)<`TableName`> | The [GenericId](/api/modules/values.md#genericid) of the document to fetch from the database. |

#### Returns[​](#returns-1 "Direct link to Returns")

`Promise`<`null` | [`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>>

* The [GenericDocument](/api/modules/server.md#genericdocument) of the document at the given [GenericId](/api/modules/values.md#genericid), or `null` if it no longer exists.

#### Inherited from[​](#inherited-from-2 "Direct link to Inherited from")

[GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md).[get](/api/interfaces/server.GenericDatabaseReader.md#get)

#### Defined in[​](#defined-in-2 "Direct link to Defined in")

[server/database.ts:34](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L34)

***

### query[​](#query "Direct link to query")

▸ **query**<`TableName`>(`tableName`): [`QueryInitializer`](/api/interfaces/server.QueryInitializer.md)<[`NamedTableInfo`](/api/modules/server.md#namedtableinfo)<`DataModel`, `TableName`>>

Begin a query for the given table name.

Queries don't execute immediately, so calling this method and extending its query are free until the results are actually used.

#### Type parameters[​](#type-parameters-3 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-2 "Direct link to Parameters")

| Name        | Type        | Description                     |
| ----------- | ----------- | ------------------------------- |
| `tableName` | `TableName` | The name of the table to query. |

#### Returns[​](#returns-2 "Direct link to Returns")

[`QueryInitializer`](/api/interfaces/server.QueryInitializer.md)<[`NamedTableInfo`](/api/modules/server.md#namedtableinfo)<`DataModel`, `TableName`>>

* A [QueryInitializer](/api/interfaces/server.QueryInitializer.md) object to start building a query.

#### Inherited from[​](#inherited-from-3 "Direct link to Inherited from")

[GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md).[query](/api/interfaces/server.GenericDatabaseReader.md#query)

#### Defined in[​](#defined-in-3 "Direct link to Defined in")

[server/database.ts:47](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L47)

***

### normalizeId[​](#normalizeid "Direct link to normalizeId")

▸ **normalizeId**<`TableName`>(`tableName`, `id`): `null` | [`GenericId`](/api/modules/values.md#genericid)<`TableName`>

Returns the string ID format for the ID in a given table, or null if the ID is from a different table or is not a valid ID.

This accepts the string ID format as well as the `.toString()` representation of the legacy class-based ID format.

This does not guarantee that the ID exists (i.e. `db.get(id)` may return `null`).

#### Type parameters[​](#type-parameters-4 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-3 "Direct link to Parameters")

| Name        | Type        | Description            |
| ----------- | ----------- | ---------------------- |
| `tableName` | `TableName` | The name of the table. |
| `id`        | `string`    | The ID string.         |

#### Returns[​](#returns-3 "Direct link to Returns")

`null` | [`GenericId`](/api/modules/values.md#genericid)<`TableName`>

#### Inherited from[​](#inherited-from-4 "Direct link to Inherited from")

[GenericDatabaseReader](/api/interfaces/server.GenericDatabaseReader.md).[normalizeId](/api/interfaces/server.GenericDatabaseReader.md#normalizeid)

#### Defined in[​](#defined-in-4 "Direct link to Defined in")

[server/database.ts:63](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L63)

***

### insert[​](#insert "Direct link to insert")

▸ **insert**<`TableName`>(`table`, `value`): `Promise`<[`GenericId`](/api/modules/values.md#genericid)<`TableName`>>

Insert a new document into a table.

**`Example`**

```
const taskId = await ctx.db.insert("tasks", {
  text: "Buy groceries",
  completed: false,
});
```

#### Type parameters[​](#type-parameters-5 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-4 "Direct link to Parameters")

| Name    | Type                                                                                                                                                     | Description                                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `table` | `TableName`                                                                                                                                              | The name of the table to insert a new document into.                                                               |
| `value` | [`WithoutSystemFields`](/api/modules/server.md#withoutsystemfields)<[`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>> | The document to insert. System fields (`_id`, `_creationTime`) are added automatically and should not be included. |

#### Returns[​](#returns-4 "Direct link to Returns")

`Promise`<[`GenericId`](/api/modules/values.md#genericid)<`TableName`>>

The [GenericId](/api/modules/values.md#genericid) of the new document.

#### Defined in[​](#defined-in-5 "Direct link to Defined in")

[server/database.ts:228](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L228)

***

### patch[​](#patch "Direct link to patch")

▸ **patch**<`TableName`>(`table`, `id`, `value`): `Promise`<`void`>

Patch an existing document, shallow merging it with the given partial document.

New fields are added. Existing fields are overwritten. Fields set to `undefined` are removed. Fields not specified in the patch are left unchanged.

This method will throw if the document does not exist.

**`Example`**

```
// Update only the "completed" field, leaving other fields unchanged:
await ctx.db.patch("tasks", taskId, { completed: true });

// Remove an optional field by setting it to undefined:
await ctx.db.patch("tasks", taskId, { assignee: undefined });
```

**Tip:** Use `patch` for partial updates. Use `replace` when you want to overwrite the entire document.

#### Type parameters[​](#type-parameters-6 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-5 "Direct link to Parameters")

| Name    | Type                                                                                              | Description                                                                 |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `table` | `TableName`                                                                                       | The name of the table the document is in.                                   |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`NonUnion`<`TableName`>>                          | The [GenericId](/api/modules/values.md#genericid) of the document to patch. |
| `value` | `PatchValue`<[`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>> | The partial document to merge into the existing document.                   |

#### Returns[​](#returns-5 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-6 "Direct link to Defined in")

[server/database.ts:259](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L259)

▸ **patch**<`TableName`>(`id`, `value`): `Promise`<`void`>

Patch an existing document, shallow merging it with the given partial document.

New fields are added. Existing fields are overwritten. Fields set to `undefined` are removed. Fields not specified in the patch are left unchanged.

This method will throw if the document does not exist.

#### Type parameters[​](#type-parameters-7 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-6 "Direct link to Parameters")

| Name    | Type                                                                                              | Description                                                                 |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`TableName`>                                      | The [GenericId](/api/modules/values.md#genericid) of the document to patch. |
| `value` | `PatchValue`<[`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>> | The partial document to merge into the existing document.                   |

#### Returns[​](#returns-6 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-7 "Direct link to Defined in")

[server/database.ts:278](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L278)

***

### replace[​](#replace "Direct link to replace")

▸ **replace**<`TableName`>(`table`, `id`, `value`): `Promise`<`void`>

Replace the value of an existing document, overwriting its old value completely.

Unlike `patch`, which does a shallow merge, `replace` overwrites the entire document. Any fields not included in the new value will be removed (except system fields `_id` and `_creationTime`).

This method will throw if the document does not exist.

**`Example`**

```
// Replace the entire document:
await ctx.db.replace("users", userId, {
  name: "New Name",
  email: "new@example.com",
});
```

#### Type parameters[​](#type-parameters-8 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-7 "Direct link to Parameters")

| Name    | Type                                                                                                                                                               | Description                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `table` | `TableName`                                                                                                                                                        | The name of the table the document is in.                                     |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`NonUnion`<`TableName`>>                                                                                           | The [GenericId](/api/modules/values.md#genericid) of the document to replace. |
| `value` | [`WithOptionalSystemFields`](/api/modules/server.md#withoptionalsystemfields)<[`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>> | The new document. System fields can be omitted.                               |

#### Returns[​](#returns-7 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-8 "Direct link to Defined in")

[server/database.ts:306](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L306)

▸ **replace**<`TableName`>(`id`, `value`): `Promise`<`void`>

Replace the value of an existing document, overwriting its old value completely.

Unlike `patch`, which does a shallow merge, `replace` overwrites the entire document.

#### Type parameters[​](#type-parameters-9 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-8 "Direct link to Parameters")

| Name    | Type                                                                                                                                                               | Description                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`TableName`>                                                                                                       | The [GenericId](/api/modules/values.md#genericid) of the document to replace. |
| `value` | [`WithOptionalSystemFields`](/api/modules/server.md#withoptionalsystemfields)<[`DocumentByName`](/api/modules/server.md#documentbyname)<`DataModel`, `TableName`>> | The new document. System fields can be omitted.                               |

#### Returns[​](#returns-8 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-9 "Direct link to Defined in")

[server/database.ts:322](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L322)

***

### delete[​](#delete "Direct link to delete")

▸ **delete**<`TableName`>(`table`, `id`): `Promise`<`void`>

Delete an existing document.

**`Example`**

```
await ctx.db.delete("tasks", taskId);
```

#### Type parameters[​](#type-parameters-10 "Direct link to Type parameters")

| Name        | Type             |
| ----------- | ---------------- |
| `TableName` | extends `string` |

#### Parameters[​](#parameters-9 "Direct link to Parameters")

| Name    | Type                                                                     | Description                                                                  |
| ------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `table` | `TableName`                                                              | The name of the table the document is in.                                    |
| `id`    | [`GenericId`](/api/modules/values.md#genericid)<`NonUnion`<`TableName`>> | The [GenericId](/api/modules/values.md#genericid) of the document to remove. |

#### Returns[​](#returns-9 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-10 "Direct link to Defined in")

[server/database.ts:338](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L338)

▸ **delete**(`id`): `Promise`<`void`>

Delete an existing document.

**Note:** Convex queries do not support `.delete()` directly on query results. To delete multiple documents, `.collect()` them first, then delete each one individually.

#### Parameters[​](#parameters-10 "Direct link to Parameters")

| Name | Type                                                                                                                                  | Description                                                                  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id` | [`GenericId`](/api/modules/values.md#genericid)<[`TableNamesInDataModel`](/api/modules/server.md#tablenamesindatamodel)<`DataModel`>> | The [GenericId](/api/modules/values.md#genericid) of the document to remove. |

#### Returns[​](#returns-10 "Direct link to Returns")

`Promise`<`void`>

#### Defined in[​](#defined-in-11 "Direct link to Defined in")

[server/database.ts:352](https://github.com/get-convex/convex-js/blob/main/src/server/database.ts#L352)
