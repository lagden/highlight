'use strict'

import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
	entry: 'index.js',
	format: 'umd',
	dest: 'dist/index.js',
	moduleName: 'highlight',
	plugins: [
		nodeResolve({
			main: false
		}),
		buble()
	],
	sourceMap: true
}
