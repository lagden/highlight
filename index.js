/* eslint max-depth: 0 */
'use strict'

import {encode} from 'lagden-hex'

function highlight(source, q, tpl = '<mark>$&</mark>', split = true) {
	const spade = '\u2664'
	let words = (split ? q.split(' ') : [q]).sort((a, b) => b.length - a.length)
	let map = {}
	let unique = {}
	let cc = 0
	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		if (word) {
			const matches = source.match(new RegExp(`(${encode(word)})`, 'ig'))
			if (matches) {
				for (let k = 0; k < matches.length; k++) {
					const match = matches[k]
					if (unique[match]) {
						continue
					}
					unique[match] = 1
					const n = `${spade}${cc}`
					map[n] = match
					source = source.replace(new RegExp(`(${encode(match)})`, 'g'), n)
					cc++
				}
			}
		}
	}
	const result = Object.keys(map).reverse().reduce(
		(memo, key) => memo.replace(new RegExp(key, 'g'), tpl.replace('$&', map[key])),
		source
	)
	words = null
	map = null
	unique = null
	return result
}

export default highlight
