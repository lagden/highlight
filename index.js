'use strict';

const encode = require('lagden-hex').encode;

function highlight(source, q, tpl = '<mark>$1</mark>', split = true) {
	const words = split ? q.split(' ') : [q];
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (word) {
			const regex = new RegExp(`(${encode(word)})`, 'ig');
			source = source.replace(regex, tpl);
		}
	}
	return source;
}

module.exports = highlight;
