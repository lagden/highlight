'use strict'

import {encode} from 'lagden-hex'

function onlyUnique(value, index, arr) {
	return arr.indexOf(value) === index && value
}

function highlight(...args) {
	const _tpl = '<mark>$&</mark>'
	let [source, q, tpl = _tpl, split = true] = args
	if (typeof tpl === 'boolean') {
		split = tpl
		tpl = _tpl
	}

	const words = (split ? q.split(' ') : [q])
		.map(word => word.trim())
		.filter(onlyUnique)
		.sort((a, b) => b.length - a.length)
		.map(word => encode(word))

	const regex = new RegExp(`${words.join('|')}`, 'g')
	return source.replace(regex, tpl)
}

export default highlight
