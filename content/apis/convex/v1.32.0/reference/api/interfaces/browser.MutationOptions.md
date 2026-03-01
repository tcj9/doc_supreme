# Interface: MutationOptions

[browser](/api/modules/browser.md).MutationOptions

Options for [mutation](/api/classes/browser.BaseConvexClient.md#mutation).

## Properties[​](#properties "Direct link to Properties")

### optimisticUpdate[​](#optimisticupdate "Direct link to optimisticUpdate")

• `Optional` **optimisticUpdate**: [`OptimisticUpdate`](/api/modules/browser.md#optimisticupdate)<`any`>

An optimistic update to apply along with this mutation.

An optimistic update locally updates queries while a mutation is pending. Once the mutation completes, the update will be rolled back.

#### Defined in[​](#defined-in "Direct link to Defined in")

[browser/sync/client.ts:210](https://github.com/get-convex/convex-js/blob/main/src/browser/sync/client.ts#L210)
