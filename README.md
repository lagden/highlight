# Highlight
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![devDependency Status][devDep-img]][devDep]

[ci-img]:        https://travis-ci.org/lagden/highlight.svg
[ci]:            https://travis-ci.org/lagden/highlight
[coveralls-img]: https://coveralls.io/repos/github/lagden/highlight/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/highlight?branch=master
[devDep-img]:    https://david-dm.org/lagden/highlight/dev-status.svg
[devDep]:        https://david-dm.org/lagden/highlight#info=devDependencies


Make the words shine


## Install

```
$ npm i -S lagden-highlight
```


## Usage

```js
const highlight = require('lagden-highlight');
const source = 'My name is Bond, James Bond...';
const marked = highlight(source, 'Bond'); // My name is <mark>Bond</mark>, James <mark>Bond</mark>...
```


## License

MIT © [Thiago Lagden](http://lagden.in)
