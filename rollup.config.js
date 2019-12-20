'use strict'

import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
	input: 'src/index.js',
	output: {
		name: 'highlight',
		file: 'dist/index.js',
		format: 'umd'
	},
	plugins: [
		resolve(),
		babel()
	]
}
