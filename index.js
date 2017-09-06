'use strict'

import {encode} from 'lagden-hex'

function unique(value, index, arr) {
	return arr.indexOf(value) === index && value
}

function highlight(source, q, options = {}) {
	const {tpl = '<mark>$&</mark>', split = true, caseSensitive = true} = options
	const words = (split ? q.split(' ') : [q])
		.map(word => word.trim())
		.filter(unique)
		.sort((a, b) => b.length - a.length)
		.map(word => encode(word))

	const regex = new RegExp(`${words.join('|')}`, caseSensitive ? 'g' : 'ig')
	return source.replace(regex, tpl)
}

export default highlight
