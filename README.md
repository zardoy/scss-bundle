# scss-bundle

> Bundles all SCSS imports into a single file recursively.


Fork of [original scss bundle](https://github.com/reactway/scss-bundle):

Breaking:

- Requires node 14+
- Remove CLI

Added:

- `resolve` - customize resolving. Can return `undefined` to mark as external.
- `onLoad` - customize loading. Can be async.
