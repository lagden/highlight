'use strict';

import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
