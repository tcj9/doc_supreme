# Interface: SearchIndexConfig\<SearchField, FilterFields>

[server](/api/modules/server.md).SearchIndexConfig

The configuration for a full text search index.

## Type parameters[​](#type-parameters "Direct link to Type parameters")

| Name           | Type             |
| -------------- | ---------------- |
| `SearchField`  | extends `string` |
| `FilterFields` | extends `string` |

## Properties[​](#properties "Direct link to Properties")

### searchField[​](#searchfield "Direct link to searchField")

• **searchField**: `SearchField`

The field to index for full text search.

This must be a field of type `string`.

#### Defined in[​](#defined-in "Direct link to Defined in")

[server/schema.ts:101](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L101)

***

### filterFields[​](#filterfields "Direct link to filterFields")

• `Optional` **filterFields**: `FilterFields`\[]

Additional fields to index for fast filtering when running search queries.

#### Defined in[​](#defined-in-1 "Direct link to Defined in")

[server/schema.ts:106](https://github.com/get-convex/convex-js/blob/main/src/server/schema.ts#L106)
