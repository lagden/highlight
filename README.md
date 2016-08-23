# Highlight
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

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


## API

### highlight(source, q, tpl, split)

#### source

*Required*  
Type: `string`

Your text, expression or phrase

#### q

*Required*  
Type: `string`

The word you want to shine

#### tpl

Type: `string`  
Default: `<mark>$1</mark>`

Define a custom template for highlight

#### split

Type: `boolean`  
Default: `true`

Break the term in pieces


## License

MIT © [Thiago Lagden](http://lagden.in)
