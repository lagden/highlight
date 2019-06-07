'use strict'

import babel from 'rollup-plugin-babel'

export default {
	input: 'src/index.mjs',
	output: {
		name: 'highlight',
		file: 'dist/index.js',
		format: 'umd'
	},
	plugins: [
		babel()
	]
}
