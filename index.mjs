'use strict'

function _encode(str) {
	const result = []
	const len = str.length
	for (let i = 0; i < len; i++) {
		const hex = str.charAt(i).charCodeAt(0).toString(16)
		result.push(`\\u{${hex}}`)
	}
	return result.join('')
}

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
		.map(word => _encode(word))

	const regex = new RegExp(`${words.join('|')}`, caseSensitive ? 'gu' : 'igu')
	return source.replace(regex, tpl)
}

export default highlight
