# Module: react

Tools to integrate Convex into React applications.

This module contains:

1. [ConvexReactClient](/api/classes/react.ConvexReactClient.md), a client for using Convex in React.
2. [ConvexProvider](/api/modules/react.md#convexprovider), a component that stores this client in React context.
3. [Authenticated](/api/modules/react.md#authenticated), [Unauthenticated](/api/modules/react.md#unauthenticated) and [AuthLoading](/api/modules/react.md#authloading) helper auth components.
4. Hooks [useQuery](/api/modules/react.md#usequery), [useMutation](/api/modules/react.md#usemutation), [useAction](/api/modules/react.md#useaction) and more for accessing this client from your React components.

## Usage[​](#usage "Direct link to Usage")

### Creating the client[​](#creating-the-client "Direct link to Creating the client")

```
import { ConvexReactClient } from "convex/react";

// typically loaded from an environment variable
const address = "https://small-mouse-123.convex.cloud"
const convex = new ConvexReactClient(address);
```

### Storing the client in React Context[​](#storing-the-client-in-react-context "Direct link to Storing the client in React Context")

```
import { ConvexProvider } from "convex/react";

<ConvexProvider client={convex}>
  <App />
</ConvexProvider>
```

### Using the auth helpers[​](#using-the-auth-helpers "Direct link to Using the auth helpers")

```
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

<Authenticated>
  Logged in
</Authenticated>
<Unauthenticated>
  Logged out
</Unauthenticated>
<AuthLoading>
  Still loading
</AuthLoading>
```

### Using React hooks[​](#using-react-hooks "Direct link to Using React hooks")

```
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const counter = useQuery(api.getCounter.default);
  const increment = useMutation(api.incrementCounter.default);
  // Your component here!
}
```

## Classes[​](#classes "Direct link to Classes")

* [ConvexReactClient](/api/classes/react.ConvexReactClient.md)

## Interfaces[​](#interfaces "Direct link to Interfaces")

* [ReactMutation](/api/interfaces/react.ReactMutation.md)
* [ReactAction](/api/interfaces/react.ReactAction.md)
* [Watch](/api/interfaces/react.Watch.md)
* [WatchQueryOptions](/api/interfaces/react.WatchQueryOptions.md)
* [MutationOptions](/api/interfaces/react.MutationOptions.md)
* [ConvexReactClientOptions](/api/interfaces/react.ConvexReactClientOptions.md)

## References[​](#references "Direct link to References")

### AuthTokenFetcher[​](#authtokenfetcher "Direct link to AuthTokenFetcher")

Re-exports [AuthTokenFetcher](/api/modules/browser.md#authtokenfetcher)

## Type Aliases[​](#type-aliases "Direct link to Type Aliases")

### ConvexAuthState[​](#convexauthstate "Direct link to ConvexAuthState")

Ƭ **ConvexAuthState**: `Object`

Type representing the state of an auth integration with Convex.

#### Type declaration[​](#type-declaration "Direct link to Type declaration")

| Name              | Type      |
| ----------------- | --------- |
| `isLoading`       | `boolean` |
| `isAuthenticated` | `boolean` |

#### Defined in[​](#defined-in "Direct link to Defined in")

[react/ConvexAuthState.tsx:26](https://github.com/get-convex/convex-js/blob/main/src/react/ConvexAuthState.tsx#L26)

***

### OptionalRestArgsOrSkip[​](#optionalrestargsorskip "Direct link to OptionalRestArgsOrSkip")

Ƭ **OptionalRestArgsOrSkip**<`FuncRef`>: `FuncRef`\[`"_args"`] extends `EmptyObject` ? \[args?: EmptyObject | "skip"] : \[args: FuncRef\["\_args"] | "skip"]

#### Type parameters[​](#type-parameters "Direct link to Type parameters")

| Name      | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `FuncRef` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`any`> |

#### Defined in[​](#defined-in-1 "Direct link to Defined in")

[react/client.ts:799](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L799)

***

### Preloaded[​](#preloaded "Direct link to Preloaded")

Ƭ **Preloaded**<`Query`>: `Object`

The preloaded query payload, which should be passed to a client component and passed to [usePreloadedQuery](/api/modules/react.md#usepreloadedquery).

#### Type parameters[​](#type-parameters-1 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`"query"`> |

#### Type declaration[​](#type-declaration-1 "Direct link to Type declaration")

| Name         | Type     |
| ------------ | -------- |
| `__type`     | `Query`  |
| `_name`      | `string` |
| `_argsJSON`  | `string` |
| `_valueJSON` | `string` |

#### Defined in[​](#defined-in-2 "Direct link to Defined in")

[react/hydration.tsx:12](https://github.com/get-convex/convex-js/blob/main/src/react/hydration.tsx#L12)

***

### PaginatedQueryReference[​](#paginatedqueryreference "Direct link to PaginatedQueryReference")

Ƭ **PaginatedQueryReference**: [`FunctionReference`](/api/modules/server.md#functionreference)<`"query"`, `"public"`, { `paginationOpts`: [`PaginationOptions`](/api/interfaces/server.PaginationOptions.md) }, [`PaginationResult`](/api/interfaces/server.PaginationResult.md)<`any`>>

A [FunctionReference](/api/modules/server.md#functionreference) that is usable with [usePaginatedQuery](/api/modules/react.md#usepaginatedquery).

This function reference must:

* Refer to a public query
* Have an argument named "paginationOpts" of type [PaginationOptions](/api/interfaces/server.PaginationOptions.md)
* Have a return type of [PaginationResult](/api/interfaces/server.PaginationResult.md).

#### Defined in[​](#defined-in-3 "Direct link to Defined in")

[react/use\_paginated\_query.ts:31](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L31)

***

### UsePaginatedQueryResult[​](#usepaginatedqueryresult "Direct link to UsePaginatedQueryResult")

Ƭ **UsePaginatedQueryResult**<`Item`>: { `results`: `Item`\[] ; `loadMore`: (`numItems`: `number`) => `void` } & { `status`: `"LoadingFirstPage"` ; `isLoading`: `true` } | { `status`: `"CanLoadMore"` ; `isLoading`: `false` } | { `status`: `"LoadingMore"` ; `isLoading`: `true` } | { `status`: `"Exhausted"` ; `isLoading`: `false` }

The result of calling the [usePaginatedQuery](/api/modules/react.md#usepaginatedquery) hook.

This includes:

* `results` - An array of the currently loaded results.

* `isLoading` - Whether the hook is currently loading results.

* `status` - The status of the pagination. The possible statuses are:

  <!-- -->

  * "LoadingFirstPage": The hook is loading the first page of results.
  * "CanLoadMore": This query may have more items to fetch. Call `loadMore` to fetch another page.
  * "LoadingMore": We're currently loading another page of results.
  * "Exhausted": We've paginated to the end of the list.

* `loadMore(n)` A callback to fetch more results. This will only fetch more results if the status is "CanLoadMore".

#### Type parameters[​](#type-parameters-2 "Direct link to Type parameters")

| Name   |
| ------ |
| `Item` |

#### Defined in[​](#defined-in-4 "Direct link to Defined in")

[react/use\_paginated\_query.ts:479](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L479)

***

### PaginationStatus[​](#paginationstatus "Direct link to PaginationStatus")

Ƭ **PaginationStatus**: [`UsePaginatedQueryResult`](/api/modules/react.md#usepaginatedqueryresult)<`any`>\[`"status"`]

The possible pagination statuses in [UsePaginatedQueryResult](/api/modules/react.md#usepaginatedqueryresult).

This is a union of string literal types.

#### Defined in[​](#defined-in-5 "Direct link to Defined in")

[react/use\_paginated\_query.ts:507](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L507)

***

### PaginatedQueryArgs[​](#paginatedqueryargs "Direct link to PaginatedQueryArgs")

Ƭ **PaginatedQueryArgs**<`Query`>: [`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>>

Given a [PaginatedQueryReference](/api/modules/react.md#paginatedqueryreference), get the type of the arguments object for the query, excluding the `paginationOpts` argument.

#### Type parameters[​](#type-parameters-3 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Defined in[​](#defined-in-6 "Direct link to Defined in")

[react/use\_paginated\_query.ts:515](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L515)

***

### PaginatedQueryItem[​](#paginatedqueryitem "Direct link to PaginatedQueryItem")

Ƭ **PaginatedQueryItem**<`Query`>: [`FunctionReturnType`](/api/modules/server.md#functionreturntype)<`Query`>\[`"page"`]\[`number`]

Given a [PaginatedQueryReference](/api/modules/react.md#paginatedqueryreference), get the type of the item being paginated over.

#### Type parameters[​](#type-parameters-4 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Defined in[​](#defined-in-7 "Direct link to Defined in")

[react/use\_paginated\_query.ts:524](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L524)

***

### UsePaginatedQueryReturnType[​](#usepaginatedqueryreturntype "Direct link to UsePaginatedQueryReturnType")

Ƭ **UsePaginatedQueryReturnType**<`Query`>: [`UsePaginatedQueryResult`](/api/modules/react.md#usepaginatedqueryresult)<[`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>>

The return type of [usePaginatedQuery](/api/modules/react.md#usepaginatedquery).

#### Type parameters[​](#type-parameters-5 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Defined in[​](#defined-in-8 "Direct link to Defined in")

[react/use\_paginated\_query.ts:532](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L532)

***

### RequestForQueries[​](#requestforqueries "Direct link to RequestForQueries")

Ƭ **RequestForQueries**: `Record`<`string`, { `query`: [`FunctionReference`](/api/modules/server.md#functionreference)<`"query"`> ; `args`: `Record`<`string`, [`Value`](/api/modules/values.md#value)> }>

An object representing a request to load multiple queries.

The keys of this object are identifiers and the values are objects containing the query function and the arguments to pass to it.

This is used as an argument to [useQueries](/api/modules/react.md#usequeries).

#### Defined in[​](#defined-in-9 "Direct link to Defined in")

[react/use\_queries.ts:137](https://github.com/get-convex/convex-js/blob/main/src/react/use_queries.ts#L137)

## Functions[​](#functions "Direct link to Functions")

### useConvexAuth[​](#useconvexauth "Direct link to useConvexAuth")

▸ **useConvexAuth**(): `Object`

Get the [ConvexAuthState](/api/modules/react.md#convexauthstate) within a React component.

This relies on a Convex auth integration provider being above in the React component tree.

#### Returns[​](#returns "Direct link to Returns")

`Object`

The current [ConvexAuthState](/api/modules/react.md#convexauthstate).

| Name              | Type      |
| ----------------- | --------- |
| `isLoading`       | `boolean` |
| `isAuthenticated` | `boolean` |

#### Defined in[​](#defined-in-10 "Direct link to Defined in")

[react/ConvexAuthState.tsx:43](https://github.com/get-convex/convex-js/blob/main/src/react/ConvexAuthState.tsx#L43)

***

### ConvexProviderWithAuth[​](#convexproviderwithauth "Direct link to ConvexProviderWithAuth")

▸ **ConvexProviderWithAuth**(`«destructured»`): `Element`

A replacement for [ConvexProvider](/api/modules/react.md#convexprovider) which additionally provides [ConvexAuthState](/api/modules/react.md#convexauthstate) to descendants of this component.

Use this to integrate any auth provider with Convex. The `useAuth` prop should be a React hook that returns the provider's authentication state and a function to fetch a JWT access token.

If the `useAuth` prop function updates causing a rerender then auth state will transition to loading and the `fetchAccessToken()` function called again.

See [Custom Auth Integration](https://docs.convex.dev/auth/advanced/custom-auth) for more information.

#### Parameters[​](#parameters "Direct link to Parameters")

| Name             | Type                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `«destructured»` | `Object`                                                                                                                                                            |
| › `children?`    | `ReactNode`                                                                                                                                                         |
| › `client`       | `IConvexReactClient`                                                                                                                                                |
| › `useAuth`      | () => { `isLoading`: `boolean` ; `isAuthenticated`: `boolean` ; `fetchAccessToken`: (`args`: { `forceRefreshToken`: `boolean` }) => `Promise`<`null` \| `string`> } |

#### Returns[​](#returns-1 "Direct link to Returns")

`Element`

#### Defined in[​](#defined-in-11 "Direct link to Defined in")

[react/ConvexAuthState.tsx:75](https://github.com/get-convex/convex-js/blob/main/src/react/ConvexAuthState.tsx#L75)

***

### Authenticated[​](#authenticated "Direct link to Authenticated")

▸ **Authenticated**(`«destructured»`): `null` | `Element`

Renders children if the client is authenticated.

#### Parameters[​](#parameters-1 "Direct link to Parameters")

| Name             | Type        |
| ---------------- | ----------- |
| `«destructured»` | `Object`    |
| › `children`     | `ReactNode` |

#### Returns[​](#returns-2 "Direct link to Returns")

`null` | `Element`

#### Defined in[​](#defined-in-12 "Direct link to Defined in")

[react/auth\_helpers.tsx:10](https://github.com/get-convex/convex-js/blob/main/src/react/auth_helpers.tsx#L10)

***

### Unauthenticated[​](#unauthenticated "Direct link to Unauthenticated")

▸ **Unauthenticated**(`«destructured»`): `null` | `Element`

Renders children if the client is using authentication but is not authenticated.

#### Parameters[​](#parameters-2 "Direct link to Parameters")

| Name             | Type        |
| ---------------- | ----------- |
| `«destructured»` | `Object`    |
| › `children`     | `ReactNode` |

#### Returns[​](#returns-3 "Direct link to Returns")

`null` | `Element`

#### Defined in[​](#defined-in-13 "Direct link to Defined in")

[react/auth\_helpers.tsx:23](https://github.com/get-convex/convex-js/blob/main/src/react/auth_helpers.tsx#L23)

***

### AuthLoading[​](#authloading "Direct link to AuthLoading")

▸ **AuthLoading**(`«destructured»`): `null` | `Element`

Renders children if the client isn't using authentication or is in the process of authenticating.

#### Parameters[​](#parameters-3 "Direct link to Parameters")

| Name             | Type        |
| ---------------- | ----------- |
| `«destructured»` | `Object`    |
| › `children`     | `ReactNode` |

#### Returns[​](#returns-4 "Direct link to Returns")

`null` | `Element`

#### Defined in[​](#defined-in-14 "Direct link to Defined in")

[react/auth\_helpers.tsx:37](https://github.com/get-convex/convex-js/blob/main/src/react/auth_helpers.tsx#L37)

***

### useConvex[​](#useconvex "Direct link to useConvex")

▸ **useConvex**(): [`ConvexReactClient`](/api/classes/react.ConvexReactClient.md)

Get the [ConvexReactClient](/api/classes/react.ConvexReactClient.md) within a React component.

This relies on the [ConvexProvider](/api/modules/react.md#convexprovider) being above in the React component tree.

#### Returns[​](#returns-5 "Direct link to Returns")

[`ConvexReactClient`](/api/classes/react.ConvexReactClient.md)

The active [ConvexReactClient](/api/classes/react.ConvexReactClient.md) object, or `undefined`.

#### Defined in[​](#defined-in-15 "Direct link to Defined in")

[react/client.ts:774](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L774)

***

### ConvexProvider[​](#convexprovider "Direct link to ConvexProvider")

▸ **ConvexProvider**(`props`, `deprecatedLegacyContext?`): `null` | `ReactElement`<`any`, `any`>

Provides an active Convex [ConvexReactClient](/api/classes/react.ConvexReactClient.md) to descendants of this component.

Wrap your app in this component to use Convex hooks `useQuery`, `useMutation`, and `useConvex`.

#### Parameters[​](#parameters-4 "Direct link to Parameters")

| Name                       | Type                                                           | Description                                                                                                                           |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `props`                    | `Object`                                                       | an object with a `client` property that refers to a [ConvexReactClient](/api/classes/react.ConvexReactClient.md).                     |
| `props.client`             | [`ConvexReactClient`](/api/classes/react.ConvexReactClient.md) | -                                                                                                                                     |
| `props.children?`          | `ReactNode`                                                    | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                          | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns[​](#returns-6 "Direct link to Returns")

`null` | `ReactElement`<`any`, `any`>

#### Defined in[​](#defined-in-16 "Direct link to Defined in")

../../common/temp/node\_modules/.pnpm/@types+react\@18.3.26/node\_modules/@types/react/ts5.0/index.d.ts:1129

***

### useQuery[​](#usequery "Direct link to useQuery")

▸ **useQuery**<`Query`>(`query`, `...args`): `Query`\[`"_returnType"`] | `undefined`

Load a reactive query within a React component.

This React hook subscribes to a Convex query and causes a rerender whenever the query result changes. The subscription is managed automatically -- it starts when the component mounts and stops when it unmounts.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

**`Example`**

```
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function TaskList() {
  // Reactively loads tasks, re-renders when data changes:
  const tasks = useQuery(api.tasks.list, { completed: false });

  // Returns `undefined` while loading:
  if (tasks === undefined) return <div>Loading...</div>;

  return tasks.map((task) => <div key={task._id}>{task.text}</div>);
}

// Pass "skip" to conditionally disable the query:
function MaybeProfile({ userId }: { userId?: Id<"users"> }) {
  const profile = useQuery(
    api.users.get,
    userId ? { userId } : "skip",
  );
  // ...
}
```

**`See`**

<https://docs.convex.dev/client/react#fetching-data>

#### Type parameters[​](#type-parameters-6 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`"query"`> |

#### Parameters[​](#parameters-5 "Direct link to Parameters")

| Name      | Type                                                                              | Description                                                                                                                     |
| --------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `query`   | `Query`                                                                           | a [FunctionReference](/api/modules/server.md#functionreference) for the public query to run like `api.dir1.dir2.filename.func`. |
| `...args` | [`OptionalRestArgsOrSkip`](/api/modules/react.md#optionalrestargsorskip)<`Query`> | The arguments to the query function or the string `"skip"` if the query should not be loaded.                                   |

#### Returns[​](#returns-7 "Direct link to Returns")

`Query`\[`"_returnType"`] | `undefined`

the result of the query. Returns `undefined` while loading.

#### Defined in[​](#defined-in-17 "Direct link to Defined in")

[react/client.ts:847](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L847)

***

### useMutation[​](#usemutation "Direct link to useMutation")

▸ **useMutation**<`Mutation`>(`mutation`): [`ReactMutation`](/api/interfaces/react.ReactMutation.md)<`Mutation`>

Construct a new [ReactMutation](/api/interfaces/react.ReactMutation.md).

Returns a function that you can call to execute a Convex mutation. The returned function is stable across renders (same reference identity), so it can be safely used in dependency arrays and memoization.

Mutations can optionally be configured with [optimistic updates](https://docs.convex.dev/client/react/optimistic-updates) for instant UI feedback.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

**`Example`**

```
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

function CreateTask() {
  const createTask = useMutation(api.tasks.create);

  const handleClick = async () => {
    await createTask({ text: "New task" });
  };

  return <button onClick={handleClick}>Add Task</button>;
}
```

**`See`**

<https://docs.convex.dev/client/react#editing-data>

#### Type parameters[​](#type-parameters-7 "Direct link to Type parameters")

| Name       | Type                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| `Mutation` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`"mutation"`> |

#### Parameters[​](#parameters-6 "Direct link to Parameters")

| Name       | Type       | Description                                                                                                                        |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `mutation` | `Mutation` | A [FunctionReference](/api/modules/server.md#functionreference) for the public mutation to run like `api.dir1.dir2.filename.func`. |

#### Returns[​](#returns-8 "Direct link to Returns")

[`ReactMutation`](/api/interfaces/react.ReactMutation.md)<`Mutation`>

The [ReactMutation](/api/interfaces/react.ReactMutation.md) object with that name.

#### Defined in[​](#defined-in-18 "Direct link to Defined in")

[react/client.ts:916](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L916)

***

### useAction[​](#useaction "Direct link to useAction")

▸ **useAction**<`Action`>(`action`): [`ReactAction`](/api/interfaces/react.ReactAction.md)<`Action`>

Construct a new [ReactAction](/api/interfaces/react.ReactAction.md).

Returns a function that you can call to execute a Convex action. Actions can call third-party APIs and perform side effects. The returned function is stable across renders (same reference identity).

**Error handling:** Actions can fail (e.g., if an external API is down). Always wrap action calls in try/catch or handle the rejected promise.

**Note:** In most cases, calling an action directly from a client is an anti-pattern. Prefer having the client call a mutation that captures the user's intent (by writing to the database) and then schedules the action via `ctx.scheduler.runAfter`. This ensures the intent is durably recorded even if the client disconnects.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

**`Example`**

```
import { useAction } from "convex/react";
import { api } from "../convex/_generated/api";

function GenerateSummary() {
  const generate = useAction(api.ai.generateSummary);

  const handleClick = async () => {
    try {
      const summary = await generate({ text: "Some long text..." });
      console.log(summary);
    } catch (error) {
      console.error("Action failed:", error);
    }
  };

  return <button onClick={handleClick}>Generate</button>;
}
```

**`See`**

<https://docs.convex.dev/functions/actions#calling-actions-from-clients>

#### Type parameters[​](#type-parameters-8 "Direct link to Type parameters")

| Name     | Type                                                                                |
| -------- | ----------------------------------------------------------------------------------- |
| `Action` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`"action"`> |

#### Parameters[​](#parameters-7 "Direct link to Parameters")

| Name     | Type     | Description                                                                                                                      |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `action` | `Action` | A [FunctionReference](/api/modules/server.md#functionreference) for the public action to run like `api.dir1.dir2.filename.func`. |

#### Returns[​](#returns-9 "Direct link to Returns")

[`ReactAction`](/api/interfaces/react.ReactAction.md)<`Action`>

The [ReactAction](/api/interfaces/react.ReactAction.md) object with that name.

#### Defined in[​](#defined-in-19 "Direct link to Defined in")

[react/client.ts:985](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L985)

***

### useConvexConnectionState[​](#useconvexconnectionstate "Direct link to useConvexConnectionState")

▸ **useConvexConnectionState**(): [`ConnectionState`](/api/modules/browser.md#connectionstate)

React hook to get the current [ConnectionState](/api/modules/browser.md#connectionstate) and subscribe to changes.

This hook returns the current connection state and automatically rerenders when any part of the connection state changes (e.g., when going online/offline, when requests start/complete, etc.).

The shape of ConnectionState may change in the future which may cause this hook to rerender more frequently.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

#### Returns[​](#returns-10 "Direct link to Returns")

[`ConnectionState`](/api/modules/browser.md#connectionstate)

The current [ConnectionState](/api/modules/browser.md#connectionstate) with the Convex backend.

#### Defined in[​](#defined-in-20 "Direct link to Defined in")

[react/client.ts:1024](https://github.com/get-convex/convex-js/blob/main/src/react/client.ts#L1024)

***

### usePreloadedQuery[​](#usepreloadedquery "Direct link to usePreloadedQuery")

▸ **usePreloadedQuery**<`Query`>(`preloadedQuery`): `Query`\[`"_returnType"`]

Load a reactive query within a React component using a `Preloaded` payload from a Server Component returned by [preloadQuery](/api/modules/nextjs.md#preloadquery).

This React hook contains internal state that will cause a rerender whenever the query result changes.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

#### Type parameters[​](#type-parameters-9 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`FunctionReference`](/api/modules/server.md#functionreference)<`"query"`> |

#### Parameters[​](#parameters-8 "Direct link to Parameters")

| Name             | Type                                                    | Description                                            |
| ---------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| `preloadedQuery` | [`Preloaded`](/api/modules/react.md#preloaded)<`Query`> | The `Preloaded` query payload from a Server Component. |

#### Returns[​](#returns-11 "Direct link to Returns")

`Query`\[`"_returnType"`]

the result of the query. Initially returns the result fetched by the Server Component. Subsequently returns the result fetched by the client.

#### Defined in[​](#defined-in-21 "Direct link to Defined in")

[react/hydration.tsx:34](https://github.com/get-convex/convex-js/blob/main/src/react/hydration.tsx#L34)

***

### usePaginatedQuery[​](#usepaginatedquery "Direct link to usePaginatedQuery")

▸ **usePaginatedQuery**<`Query`>(`query`, `args`, `options`): [`UsePaginatedQueryReturnType`](/api/modules/react.md#usepaginatedqueryreturntype)<`Query`>

Load data reactively from a paginated query to a create a growing list.

This can be used to power "infinite scroll" UIs.

This hook must be used with public query references that match [PaginatedQueryReference](/api/modules/react.md#paginatedqueryreference).

`usePaginatedQuery` concatenates all the pages of results into a single list and manages the continuation cursors when requesting more items.

Example usage:

```
const { results, status, isLoading, loadMore } = usePaginatedQuery(
  api.messages.list,
  { channel: "#general" },
  { initialNumItems: 5 }
);
```

If the query reference or arguments change, the pagination state will be reset to the first page. Similarly, if any of the pages result in an InvalidCursor error or an error associated with too much data, the pagination state will also reset to the first page.

To learn more about pagination, see [Paginated Queries](https://docs.convex.dev/database/pagination).

#### Type parameters[​](#type-parameters-10 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-9 "Direct link to Parameters")

| Name                      | Type                                                                                                                                                                                         | Description                                                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `query`                   | `Query`                                                                                                                                                                                      | A FunctionReference to the public query function to run.                                                                      |
| `args`                    | `"skip"` \| [`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>> | The arguments object for the query function, excluding the `paginationOpts` property. That property is injected by this hook. |
| `options`                 | `Object`                                                                                                                                                                                     | An object specifying the `initialNumItems` to be loaded in the first page.                                                    |
| `options.initialNumItems` | `number`                                                                                                                                                                                     | -                                                                                                                             |

#### Returns[​](#returns-12 "Direct link to Returns")

[`UsePaginatedQueryReturnType`](/api/modules/react.md#usepaginatedqueryreturntype)<`Query`>

A [UsePaginatedQueryResult](/api/modules/react.md#usepaginatedqueryresult) that includes the currently loaded items, the status of the pagination, and a `loadMore` function.

#### Defined in[​](#defined-in-22 "Direct link to Defined in")

[react/use\_paginated\_query.ts:162](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L162)

***

### resetPaginationId[​](#resetpaginationid "Direct link to resetPaginationId")

▸ **resetPaginationId**(): `void`

Reset pagination id for tests only, so tests know what it is.

#### Returns[​](#returns-13 "Direct link to Returns")

`void`

#### Defined in[​](#defined-in-23 "Direct link to Defined in")

[react/use\_paginated\_query.ts:458](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L458)

***

### optimisticallyUpdateValueInPaginatedQuery[​](#optimisticallyupdatevalueinpaginatedquery "Direct link to optimisticallyUpdateValueInPaginatedQuery")

▸ **optimisticallyUpdateValueInPaginatedQuery**<`Query`>(`localStore`, `query`, `args`, `updateValue`): `void`

Optimistically update the values in a paginated list.

This optimistic update is designed to be used to update data loaded with [usePaginatedQuery](/api/modules/react.md#usepaginatedquery). It updates the list by applying `updateValue` to each element of the list across all of the loaded pages.

This will only apply to queries with a matching names and arguments.

Example usage:

```
const myMutation = useMutation(api.myModule.myMutation)
.withOptimisticUpdate((localStore, mutationArg) => {

  // Optimistically update the document with ID `mutationArg`
  // to have an additional property.

  optimisticallyUpdateValueInPaginatedQuery(
    localStore,
    api.myModule.paginatedQuery
    {},
    currentValue => {
      if (mutationArg === currentValue._id) {
        return {
          ...currentValue,
          "newProperty": "newValue",
        };
      }
      return currentValue;
    }
  );

});
```

#### Type parameters[​](#type-parameters-11 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-10 "Direct link to Parameters")

| Name          | Type                                                                                                                                                                             | Description                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `localStore`  | [`OptimisticLocalStore`](/api/interfaces/browser.OptimisticLocalStore.md)                                                                                                        | An [OptimisticLocalStore](/api/interfaces/browser.OptimisticLocalStore.md) to update.              |
| `query`       | `Query`                                                                                                                                                                          | A [FunctionReference](/api/modules/server.md#functionreference) for the paginated query to update. |
| `args`        | [`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>> | The arguments object to the query function, excluding the `paginationOpts` property.               |
| `updateValue` | (`currentValue`: [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>) => [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>         | A function to produce the new values.                                                              |

#### Returns[​](#returns-14 "Direct link to Returns")

`void`

#### Defined in[​](#defined-in-24 "Direct link to Defined in")

[react/use\_paginated\_query.ts:578](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L578)

***

### insertAtTop[​](#insertattop "Direct link to insertAtTop")

▸ **insertAtTop**<`Query`>(`options`): `void`

Updates a paginated query to insert an element at the top of the list.

This is regardless of the sort order, so if the list is in descending order, the inserted element will be treated as the "biggest" element, but if it's ascending, it'll be treated as the "smallest".

Example:

```
const createTask = useMutation(api.tasks.create)
  .withOptimisticUpdate((localStore, mutationArgs) => {
  insertAtTop({
    paginatedQuery: api.tasks.list,
    argsToMatch: { listId: mutationArgs.listId },
    localQueryStore: localStore,
    item: { _id: crypto.randomUUID() as Id<"tasks">, title: mutationArgs.title, completed: false },
  });
});
```

#### Type parameters[​](#type-parameters-12 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-11 "Direct link to Parameters")

| Name                      | Type                                                                                                                                                                                        | Description                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                 | `Object`                                                                                                                                                                                    | -                                                                                                                                                                     |
| `options.paginatedQuery`  | `Query`                                                                                                                                                                                     | A function reference to the paginated query.                                                                                                                          |
| `options.argsToMatch?`    | `Partial`<[`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>>> | Optional arguments that must be in each relevant paginated query. This is useful if you use the same query function with different arguments to load different lists. |
| `options.localQueryStore` | [`OptimisticLocalStore`](/api/interfaces/browser.OptimisticLocalStore.md)                                                                                                                   |                                                                                                                                                                       |
| `options.item`            | [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>                                                                                                                   | The item to insert.                                                                                                                                                   |

#### Returns[​](#returns-15 "Direct link to Returns")

`void`

#### Defined in[​](#defined-in-25 "Direct link to Defined in")

[react/use\_paginated\_query.ts:640](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L640)

***

### insertAtBottomIfLoaded[​](#insertatbottomifloaded "Direct link to insertAtBottomIfLoaded")

▸ **insertAtBottomIfLoaded**<`Query`>(`options`): `void`

Updates a paginated query to insert an element at the bottom of the list.

This is regardless of the sort order, so if the list is in descending order, the inserted element will be treated as the "smallest" element, but if it's ascending, it'll be treated as the "biggest".

This only has an effect if the last page is loaded, since otherwise it would result in the element being inserted at the end of whatever is loaded (which is the middle of the list) and then popping out once the optimistic update is over.

#### Type parameters[​](#type-parameters-13 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-12 "Direct link to Parameters")

| Name                      | Type                                                                                                                                                                                        | Description                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                 | `Object`                                                                                                                                                                                    | -                                                                                                                                                                     |
| `options.paginatedQuery`  | `Query`                                                                                                                                                                                     | A function reference to the paginated query.                                                                                                                          |
| `options.argsToMatch?`    | `Partial`<[`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>>> | Optional arguments that must be in each relevant paginated query. This is useful if you use the same query function with different arguments to load different lists. |
| `options.localQueryStore` | [`OptimisticLocalStore`](/api/interfaces/browser.OptimisticLocalStore.md)                                                                                                                   |                                                                                                                                                                       |
| `options.item`            | [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>                                                                                                                   | -                                                                                                                                                                     |

#### Returns[​](#returns-16 "Direct link to Returns")

`void`

#### Defined in[​](#defined-in-26 "Direct link to Defined in")

[react/use\_paginated\_query.ts:689](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L689)

***

### insertAtPosition[​](#insertatposition "Direct link to insertAtPosition")

▸ **insertAtPosition**<`Query`>(`options`): `void`

This is a helper function for inserting an item at a specific position in a paginated query.

You must provide the sortOrder and a function for deriving the sort key (an array of values) from an item in the list.

This will only work if the server query uses the same sort order and sort key as the optimistic update.

Example:

```
const createTask = useMutation(api.tasks.create)
  .withOptimisticUpdate((localStore, mutationArgs) => {
  insertAtPosition({
    paginatedQuery: api.tasks.listByPriority,
    argsToMatch: { listId: mutationArgs.listId },
    sortOrder: "asc",
    sortKeyFromItem: (item) => [item.priority, item._creationTime],
    localQueryStore: localStore,
    item: {
      _id: crypto.randomUUID() as Id<"tasks">,
      _creationTime: Date.now(),
      title: mutationArgs.title,
      completed: false,
      priority: mutationArgs.priority,
    },
  });
});
```

#### Type parameters[​](#type-parameters-14 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-13 "Direct link to Parameters")

| Name                      | Type                                                                                                                                                                                        | Description                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                 | `Object`                                                                                                                                                                                    | -                                                                                                                                                                     |
| `options.paginatedQuery`  | `Query`                                                                                                                                                                                     | A function reference to the paginated query.                                                                                                                          |
| `options.argsToMatch?`    | `Partial`<[`Expand`](/api/modules/server.md#expand)<[`BetterOmit`](/api/modules/server.md#betteromit)<[`FunctionArgs`](/api/modules/server.md#functionargs)<`Query`>, `"paginationOpts"`>>> | Optional arguments that must be in each relevant paginated query. This is useful if you use the same query function with different arguments to load different lists. |
| `options.sortOrder`       | `"asc"` \| `"desc"`                                                                                                                                                                         | The sort order of the paginated query ("asc" or "desc").                                                                                                              |
| `options.sortKeyFromItem` | (`element`: [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>) => [`Value`](/api/modules/values.md#value) \| [`Value`](/api/modules/values.md#value)\[]             | A function for deriving the sort key (an array of values) from an element in the list. Including a tie-breaker field like `_creationTime` is recommended.             |
| `options.localQueryStore` | [`OptimisticLocalStore`](/api/interfaces/browser.OptimisticLocalStore.md)                                                                                                                   |                                                                                                                                                                       |
| `options.item`            | [`PaginatedQueryItem`](/api/modules/react.md#paginatedqueryitem)<`Query`>                                                                                                                   | The item to insert.                                                                                                                                                   |

#### Returns[​](#returns-17 "Direct link to Returns")

`void`

#### Defined in[​](#defined-in-27 "Direct link to Defined in")

[react/use\_paginated\_query.ts:770](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query.ts#L770)

***

### usePaginatedQuery\_experimental[​](#usepaginatedquery_experimental "Direct link to usePaginatedQuery_experimental")

▸ **usePaginatedQuery\_experimental**<`Query`>(`query`, `args`, `options`): [`UsePaginatedQueryReturnType`](/api/modules/react.md#usepaginatedqueryreturntype)<`Query`>

Experimental new usePaginatedQuery implementation that will replace the current one in the future.

Load data reactively from a paginated query to a create a growing list.

This is an alternate implementation that relies on new client pagination logic.

This can be used to power "infinite scroll" UIs.

This hook must be used with public query references that match [PaginatedQueryReference](/api/modules/react.md#paginatedqueryreference).

`usePaginatedQuery` concatenates all the pages of results into a single list and manages the continuation cursors when requesting more items.

Example usage:

```
const { results, status, isLoading, loadMore } = usePaginatedQuery(
  api.messages.list,
  { channel: "#general" },
  { initialNumItems: 5 }
);
```

If the query reference or arguments change, the pagination state will be reset to the first page. Similarly, if any of the pages result in an InvalidCursor error or an error associated with too much data, the pagination state will also reset to the first page.

To learn more about pagination, see [Paginated Queries](https://docs.convex.dev/database/pagination).

#### Type parameters[​](#type-parameters-15 "Direct link to Type parameters")

| Name    | Type                                                                               |
| ------- | ---------------------------------------------------------------------------------- |
| `Query` | extends [`PaginatedQueryReference`](/api/modules/react.md#paginatedqueryreference) |

#### Parameters[​](#parameters-14 "Direct link to Parameters")

| Name                      | Type                                                                                  | Description                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `query`                   | `Query`                                                                               | A FunctionReference to the public query function to run.                                                                      |
| `args`                    | `"skip"` \| [`PaginatedQueryArgs`](/api/modules/react.md#paginatedqueryargs)<`Query`> | The arguments object for the query function, excluding the `paginationOpts` property. That property is injected by this hook. |
| `options`                 | `Object`                                                                              | An object specifying the `initialNumItems` to be loaded in the first page.                                                    |
| `options.initialNumItems` | `number`                                                                              | -                                                                                                                             |

#### Returns[​](#returns-18 "Direct link to Returns")

[`UsePaginatedQueryReturnType`](/api/modules/react.md#usepaginatedqueryreturntype)<`Query`>

A [UsePaginatedQueryResult](/api/modules/react.md#usepaginatedqueryresult) that includes the currently loaded items, the status of the pagination, and a `loadMore` function.

#### Defined in[​](#defined-in-28 "Direct link to Defined in")

[react/use\_paginated\_query2.ts:72](https://github.com/get-convex/convex-js/blob/main/src/react/use_paginated_query2.ts#L72)

***

### useQueries[​](#usequeries "Direct link to useQueries")

▸ **useQueries**(`queries`): `Record`<`string`, `any` | `undefined` | `Error`>

Load a variable number of reactive Convex queries.

`useQueries` is similar to [useQuery](/api/modules/react.md#usequery) but it allows loading multiple queries which can be useful for loading a dynamic number of queries without violating the rules of React hooks.

This hook accepts an object whose keys are identifiers for each query and the values are objects of `{ query: FunctionReference, args: Record<string, Value> }`. The `query` is a FunctionReference for the Convex query function to load, and the `args` are the arguments to that function.

The hook returns an object that maps each identifier to the result of the query, `undefined` if the query is still loading, or an instance of `Error` if the query threw an exception.

For example if you loaded a query like:

```
const results = useQueries({
  messagesInGeneral: {
    query: "listMessages",
    args: { channel: "#general" }
  }
});
```

then the result would look like:

```
{
  messagesInGeneral: [{
    channel: "#general",
    body: "hello"
    _id: ...,
    _creationTime: ...
  }]
}
```

This React hook contains internal state that will cause a rerender whenever any of the query results change.

Throws an error if not used under [ConvexProvider](/api/modules/react.md#convexprovider).

#### Parameters[​](#parameters-15 "Direct link to Parameters")

| Name      | Type                                                           | Description                                                                                                                            |
| --------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `queries` | [`RequestForQueries`](/api/modules/react.md#requestforqueries) | An object mapping identifiers to objects of `{query: string, args: Record<string, Value> }` describing which query functions to fetch. |

#### Returns[​](#returns-19 "Direct link to Returns")

`Record`<`string`, `any` | `undefined` | `Error`>

An object with the same keys as the input. The values are the result of the query function, `undefined` if it's still loading, or an `Error` if it threw an exception.

#### Defined in[​](#defined-in-29 "Direct link to Defined in")

[react/use\_queries.ts:61](https://github.com/get-convex/convex-js/blob/main/src/react/use_queries.ts#L61)
