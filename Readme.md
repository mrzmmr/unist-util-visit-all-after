# unist-util-visit-all-after

> Unist node visitor. Utility to visit nodes after another node.

## Install

```
npm install -S unist-util-visit-all-after
```

## Usage

text.txt

```
A whole lot of dogs, dogs, dogs.
```

index.js

```js
var vfile = require('to-vfile')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
var after = require('unist-util-visit-all-after')

function cats () {
    return function (tree) {
        var start = {
            type: 'TextNode',
            value: 'of'
        }
        var test = 'TextNode'
        after(tree, start, test, function (node) {
            node.value = 'cats'
        })
    }
}

unified()
    .use(english)
    .use(stringify)
    .use(cats)
    .process(vfile.readSync('text.txt'), function (error, file) {
        console.log(String(file))
    })
```

outputs,

```
A whole lot of cats, cats, cats.
```

## License

MIT © Paul Zimmer
