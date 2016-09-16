# Highlight
[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[npm-img]:       https://img.shields.io/npm/v/highlight.svg
[npm]:           https://www.npmjs.com/package/highlight
[ci-img]:        https://travis-ci.org/lagden/highlight.svg
[ci]:            https://travis-ci.org/lagden/highlight
[coveralls-img]: https://coveralls.io/repos/github/lagden/highlight/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/highlight?branch=master
[dep-img]:       https://david-dm.org/lagden/highlight.svg
[dep]:           https://david-dm.org/lagden/highlight
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


### API

#### highlight(source, q, tpl, split)

Name        | Type     | Required | Value   | Description
----------- | -------- | -------- | ------- | ------------
source      | `string` | `true`   |         | Your text, expression or phrase
q           | `string` | `true`   |         | The word you want to shine
tpl         | `string` | `false`  | `<mark>$1</mark>` | Define a custom template for highlight
split       | `string` | `false`  | `true`  | Break the term in pieces


## License

MIT © [Thiago Lagden](http://lagden.in)
