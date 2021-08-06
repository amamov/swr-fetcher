# [swr-fetcher](https://www.npmjs.com/package/swr-fetcher)

> Advanced OOP principles fetcher npm package for [React SWR](https://github.com/vercel/swr) based in [axios](https://github.com/axios/axios).

> In fact, you can use swr even if you don't use it. In this case, it can be used as a class that wraps axios based on the singleton pattern.

## Quick Start

```shell
npm i --save swr-fetcher
```

```shell
yarn add swr-fetcher
```

## Examples

```typescript
import useSWR from 'swr'
import Fetcher, { FetchError } from 'swr-fetcher'

// Singleton Pattern
const fetcher = new Fetcher({ baseURL: 'https://api.example.com' })

export default function App(): JSX.Element {
  const { data: users, error } = useSWR<User[], FetchError>(
    '/api/users',
    fetcher.get.bind(fetcher),
  )

  // code...
}
```

```typescript
// post fetcher

const { data: users, error } = useSWR<User[], FetchError>(
  '/api/users',
  fetcher.post.bind(fetcher, requestData),
)
```

You can use like this.

```typescript
const fetchConfig: FetchConfig = {
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: 1000, // default is `0` (no timeout)
  withCredentials: false, // default
}

const { data: users, error } = useSWR<User[], FetchError>('/api/users', (url) =>
  fetcher.get.bind(fetcher)(url, fetchConfig),
)
```
