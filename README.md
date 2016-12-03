# Highlight
[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]
[![XO code style][xo-img]][xo]

[npm-img]:       https://img.shields.io/npm/v/lagden-highlight.svg
[npm]:           https://www.npmjs.com/package/lagden-highlight
[ci-img]:        https://travis-ci.org/lagden/highlight.svg
[ci]:            https://travis-ci.org/lagden/highlight
[coveralls-img]: https://coveralls.io/repos/github/lagden/highlight/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/highlight?branch=master
[dep-img]:       https://david-dm.org/lagden/highlight.svg
[dep]:           https://david-dm.org/lagden/highlight
[devDep-img]:    https://david-dm.org/lagden/highlight/dev-status.svg
[devDep]:        https://david-dm.org/lagden/highlight#info=devDependencies
[xo]:            https://github.com/sindresorhus/xo


Make the words shine


## Install

```
$ npm i -S lagden-highlight
```


## Usage

```js
const highlight = require('lagden-highlight')

const source = 'My name is Bond, James Bond...'
const q = 'James Bond'
highlight(source, q)
// My name is <mark>Bond</mark>, <mark>James</mark> <mark>Bond</mark>...

/* or */

const source = 'My name is Bond, James Bond...'
const q = 'James Bond'
const tpl = '<b>&</b>'
const split = false
const marked = highlight(source, q, tpl, split);
// My name is Bond, <b>James Bond</b>...
```


### API

#### highlight(source, q, tpl, split)

Name        | Type      | Required | Default                         | Description
----------- | --------- | -------- | ------------------------------- | ------------
source      | string    | yes      |                                 | Your text
q           | string    | yes      |                                 | The word or term that will shine on text
tpl         | string    | no       | &lt;mark&gt;$&amp;&lt;/mark&gt; | Custom template
split       | boolean   | no       | true                            | Break the term in many words


## License

MIT © [Thiago Lagden](http://lagden.in)
