# rehype-prims-plus typing issue

## Problem

This is the error message when compiling TypeScript file that imports the module.

```sh
error TS2315: Type 'Visitor' is not generic.

9 export type Visitor = import('unist-util-visit').Visitor<Node>;
```

For more details, please see this [rehype-prism-plus#23](https://github.com/timlrx/rehype-prism-plus/issues/23).

## How to run

1. Run `npm i` to install the dependencies
2. Run `npm run build` and see the error message
