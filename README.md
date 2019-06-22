# [React Splt](https://react-splt.netlify.com/?path=/story/splitterer--basic-example) · ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-splt.svg?style=flat-square)

A tiny (1kb) React component for split panes (written in ReasonML).

## Usage

```sh
yarn add react-splt
```

```jsx
import { Split } from 'react-splt'

function MyComponent() {
    return (
        <Split>
            <span>Left pane.</span>
            <span>Right pane.</span>
        </Split>
    )
}
```

See the Storybook for more examples.

## Developing

```sh
# Install dependencies.
yarn
# Build ReasonML files.
yarn start
# Run a Storybook.
yarn storybook
```
