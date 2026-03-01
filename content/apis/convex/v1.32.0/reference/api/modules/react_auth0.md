# Module: react-auth0

React login component for use with Auth0.

## Functions[​](#functions "Direct link to Functions")

### ConvexProviderWithAuth0[​](#convexproviderwithauth0 "Direct link to ConvexProviderWithAuth0")

▸ **ConvexProviderWithAuth0**(`«destructured»`): `Element`

A wrapper React component which provides a [ConvexReactClient](/api/classes/react.ConvexReactClient.md) authenticated with Auth0.

It must be wrapped by a configured `Auth0Provider` from `@auth0/auth0-react`.

See [Convex Auth0](https://docs.convex.dev/auth/auth0) on how to set up Convex with Auth0.

#### Parameters[​](#parameters "Direct link to Parameters")

| Name             | Type                 |
| ---------------- | -------------------- |
| `«destructured»` | `Object`             |
| › `children`     | `ReactNode`          |
| › `client`       | `IConvexReactClient` |

#### Returns[​](#returns "Direct link to Returns")

`Element`

#### Defined in[​](#defined-in "Direct link to Defined in")

[react-auth0/ConvexProviderWithAuth0.tsx:26](https://github.com/get-convex/convex-js/blob/main/src/react-auth0/ConvexProviderWithAuth0.tsx#L26)
