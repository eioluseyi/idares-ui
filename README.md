# iDares UI

###### A collection of select accessible and customizable react UI components.

---

#### Table of contents

1. [ Available components ](#available-components)
2. [ Installation ](#installation)
3. [ Usage ](#usage)
   - [Default usage](#default-usage)
   - [Control `page`](#control-page)
   - [Props](#props)
4. [ Storybook docs ](#story-book)

<a name="available-components"></a>

##### Available components

- Pagination
- ...

<a name="installation"></a>

##### Installation

Using npm:

```javascript
$ npm install @idares-ui/react
```

Using yarn:

```javascript
$ yarn add @idares-ui/react
```

<a name="usage"></a>

##### Usage

<a name="default-usage"></a>

###### Default usage

```javascript
import { Pagination } from "@idares-ui/react";

...
<Pagination />
...

```

<a name="control-page"></a>

###### Control `page` in your component

```javascript
import { Pagination } from "@idares-ui/react";

...
const [page, setPage] = React.useState(1);

...
<Pagination page={page} setPage={setPage} />
...
```

<a name="props"></a>

###### Props and default values

| Prop      |   Type   | Default |
| --------- | :------: | ------: |
| page      |  number  |     `1` |
| perPage   |  number  |    `10` |
| count     |  number  |    `60` |
| setPage   | function |  `void` |
| baseSize  |  bsType  |  `"xl"` |
| baseColor |  string  |  `null` |

```typescript
bsType = "xs" | "sm" | "md" | "lg" | "xl" | <css-size-units>
```

<a name="story-book"></a>

##### Storybook docs

View the full Storybook documentation [ here ](#https://idares-ui.netlify.app)
