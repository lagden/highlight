'use strict'

const encode = require('lagden-hex').encode

const spade = '\u2664'

function _mapWords(words) {
	const map = {}
	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		if (word) {
			const n = `${spade}${i}`
			map[n] = word
		}
	}
	return map
}

function highlight(source, q, tpl = '<mark>$&</mark>', split = true) {
	const words = (split ? q.split(' ') : [q]).sort((a, b) => b.length - a.length)
	const map = _mapWords(words)
	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		if (word) {
			const regex = new RegExp(`(${encode(word)})`, 'ig')
			const n = `${spade}${i}`
			source = source.replace(regex, n)
		}
	}
	const regex = new RegExp(`(${spade}[0-9+])`, 'g')
	return source.replace(regex, m => m.replace(m, tpl).replace(m, map[m]))
}

module.exports = highlight
