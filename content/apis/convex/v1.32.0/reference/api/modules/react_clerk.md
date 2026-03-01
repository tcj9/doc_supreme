# Module: react-clerk

React login component for use with Clerk.

## Functions[​](#functions "Direct link to Functions")

### ConvexProviderWithClerk[​](#convexproviderwithclerk "Direct link to ConvexProviderWithClerk")

▸ **ConvexProviderWithClerk**(`«destructured»`): `Element`

A wrapper React component which provides a [ConvexReactClient](/api/classes/react.ConvexReactClient.md) authenticated with Clerk.

It must be wrapped by a configured `ClerkProvider`, from `@clerk/clerk-react`, `@clerk/clerk-expo`, `@clerk/nextjs` or another React-based Clerk client library and have the corresponding `useAuth` hook passed in.

See [Convex Clerk](https://docs.convex.dev/auth/clerk) on how to set up Convex with Clerk.

#### Parameters[​](#parameters "Direct link to Parameters")

| Name             | Type                 |
| ---------------- | -------------------- |
| `«destructured»` | `Object`             |
| › `children`     | `ReactNode`          |
| › `client`       | `IConvexReactClient` |
| › `useAuth`      | `UseAuth`            |

#### Returns[​](#returns "Direct link to Returns")

`Element`

#### Defined in[​](#defined-in "Direct link to Defined in")

[react-clerk/ConvexProviderWithClerk.tsx:41](https://github.com/get-convex/convex-js/blob/main/src/react-clerk/ConvexProviderWithClerk.tsx#L41)
