# Interface: Auth

[server](/api/modules/server.md).Auth

An interface to access information about the currently authenticated user within Convex query and mutation functions.

## Methods[​](#methods "Direct link to Methods")

### getUserIdentity[​](#getuseridentity "Direct link to getUserIdentity")

▸ **getUserIdentity**(): `Promise`<`null` | [`UserIdentity`](/api/interfaces/server.UserIdentity.md)>

Get details about the currently authenticated user.

#### Returns[​](#returns "Direct link to Returns")

`Promise`<`null` | [`UserIdentity`](/api/interfaces/server.UserIdentity.md)>

A promise that resolves to a [UserIdentity](/api/interfaces/server.UserIdentity.md) if the Convex client was configured with a valid ID token, or if not, will:

* returns `null` on Convex queries, mutations, actions.
* `throw` on HTTP Actions.

#### Defined in[​](#defined-in "Direct link to Defined in")

[server/authentication.ts:236](https://github.com/get-convex/convex-js/blob/main/src/server/authentication.ts#L236)
