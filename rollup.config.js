'use strict';

import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'index.js',
	format: 'umd',
	dest: 'dist/index.js',
	moduleName: 'highlight',
	plugins: [
		buble(),
		nodeResolve({
			jsnext: false,
			main: true
		}),
		commonjs()
	],
	sourceMap: true
};
