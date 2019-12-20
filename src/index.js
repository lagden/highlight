'use strict'

import {encode} from '@tadashi/hex/dist/index.es'

function highlight(source, q, options = {}) {
	const {tpl = '<mark>$&</mark>', split = true, caseSensitive = true} = options
	const seen = new Set()
	const words = (split ? q.split(' ') : [q])
		.map(word => word.trim())
		.filter(value => {
			if (seen.has(value) || value === '') {
				return false
			}

			seen.add(value)
			return true
		})
		.sort((a, b) => b.length - a.length)
		.map(word => encode(word))

	const regex = new RegExp(`${words.join('|')}`, caseSensitive ? 'gu' : 'igu')
	return source.replace(regex, tpl)
}

export default highlight
