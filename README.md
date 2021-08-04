# dummy-apis-jsonplaceholder

> `dummy-apis-jsonplaceholder` is a collection of dummy api urls based on jsonplaceholder like [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).

## Quick Start

```shell
yarn add dummy-apis-jsonplaceholder
```

```shell
npm i dummy-apis-jsonplaceholder
```

## Examples

```typescript
import { dummyApiUrl, DummyPost } from "dummy-apis-jsonplaceholder";
```

```typescript
const response = await axios.get<DummyPost[]>(dummyApiUrl().posts.index);
```

- response.data : [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

```typescript
const response = await axios.get<DummyPost>(dummyApiUrl(2).posts.index);
```

- response.data : [https://jsonplaceholder.typicode.com/posts/2](https://jsonplaceholder.typicode.com/posts/2)

```typescript
// with react
import { MouseEventHandler, useCallback, useState } from "react";
import { dummyApiUrl, DummyPost } from "dummy-apis-jsonplaceholder";
import axios from "axios";

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState<DummyPost[] | null>(null);

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(async (): Promise<void> => {
      const response = await axios.get<DummyPost[]>(dummyApiUrl().posts.index);
      setPosts(response.data);
    }, []);

  return (
    <div>
      <button onClick={handleButtonClick}>get api</button>
      {posts?.map((post) => (
        <div key={post.id}> {post.title}</div>
      ))}
    </div>
  );
}
```
