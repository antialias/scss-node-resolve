# scss-node-resolve
[importer for `node-sass`](https://github.com/sass/node-sass#importer--v200---experimental) that resolves paths using [`resolve`](https://www.npmjs.com/package/resolve)

##installation:
```sh
npm install --save scss-node-resolve
```

##usage:
```js
require('node-sass').render({
    ...,
    importer: require('scss-node-resolve')
});

```
