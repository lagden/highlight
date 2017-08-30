'use strict'

import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
	input: 'index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd'
	},
	name: 'highlight',
	plugins: [
		nodeResolve({
			main: false
		}),
		buble()
	],
	sourcemap: true
}
