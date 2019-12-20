# Highlight

<!-- [![Coverage Status][coveralls-img]][coveralls] -->
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[![XO code style][xo-img]][xo]
[![Greenkeeper badge][greenkeeper-img]][greenkeeper]


[ci-img]:          https://travis-ci.org/lagden/highlight.svg
[ci]:              https://travis-ci.org/lagden/highlight
[coveralls-img]:   https://coveralls.io/repos/github/lagden/highlight/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/highlight?branch=master
[dep-img]:         https://david-dm.org/@tadashi/highlight.svg
[dep]:             https://david-dm.org/@tadashi/highlight
[devDep-img]:      https://david-dm.org/@tadashi/highlight/dev-status.svg
[devDep]:          https://david-dm.org/@tadashi/highlight#info=devDependencies
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo
[greenkeeper-img]: https://badges.greenkeeper.io/lagden/highlight.svg
[greenkeeper]:     https://greenkeeper.io/


Make the words shine


## Install

```
$ npm i -S @tadashi/highlight
```


## Usage

Basic usage

```js
const highlight = require('@tadashi/highlight')

const source = 'My name is Bond, James Bond...'
const q = 'James Bond'

highlight(source, q)
// My name is <mark>Bond</mark>, <mark>James</mark> <mark>Bond</mark>...
```

---

Without breaking the term into small words

```js
const highlight = require('@tadashi/highlight')

const source = 'My name is Bond, James Bond...'
const q = 'James Bond'
const split = false

highlight(source, q, {split});
// My name is Bond, <mark>James Bond</mark>...
```

---

Without breaking the term into small words and changing the template

```js
const highlight = require('@tadashi/highlight')

const source = 'My name is Bond, James Bond...'
const q = 'James Bond'
const tpl = '<b>$&</b>'
const split = false

highlight(source, q, {tpl, split});
// My name is Bond, <b>James Bond</b>...
```

---

Ignoring case sensitive

```js
const highlight = require('@tadashi/highlight')

const source = 'What a wonderful phrase'
const q = 'w'
const tpl = '<b>$&</b>'
const caseSensitive = false

highlight(source, q, {tpl, caseSensitive});
// <b>W</b>hat a <b>w</b>onderful phrase
```


## API

### highlight(source, q \[, options\])

Name        | Type      | Required | Default                         | Description
----------- | --------- | -------- | ------------------------------- | ------------
source      | string    | yes      | -                               | Your text
q           | string    | yes      | -                               | The term that will be shine
options     | object    | no       | [see below](#options)           | Options


#### options

Name          | Type      | Required | Default                         | Description
-----------   | --------- | -------- | ------------------------------- | ------------
tpl           | string    | no       | \<mark\>$\&\</mark\>            | Custom template
split         | boolean   | no       | true                            | Break the term in many words
caseSensitive | boolean   | no       | true                            | Defines whether letters are treated as distinct


## License

MIT © [Thiago Lagden](http://lagden.in)
