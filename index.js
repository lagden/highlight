'use strict'

const encode = require('lagden-hex').encode

const spade = '\u2664'

function highlight(source, q, tpl = '<mark>$&</mark>', split = true) {
	const words = (split ? q.split(' ') : [q]).sort((a, b) => b.length - a.length)
	const map = {}
	let cc = 0
	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		if (word) {
			const matches = source.match(new RegExp(`(${encode(word)})`, 'ig'))
			if (matches) {
				for (let k = 0; k < matches.length; k++) {
					const match = matches[k]
					const n = `${spade}${cc}`
					map[n] = match
					source = source.replace(new RegExp(`(${encode(match)})`, 'g'), n)
					cc++
				}
			}
		}
	}
	const regex = new RegExp(`(${spade}[0-9+])`, 'g')
	return source.replace(regex, m => m.replace(m, tpl).replace(m, map[m]))
}

module.exports = highlight
