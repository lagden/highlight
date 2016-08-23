(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.highlight = factory());
}(this, (function () { 'use strict';

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$2 = createCommonjsModule(function (module, exports) {
'use strict';

function encode(str) {
	var result = [];
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var hex = str.charAt(i).charCodeAt(0).toString(16);
		result.push(("\\u" + (((("000" + hex)).slice(-4)))));
	}
	return result.join('');
}

function decode(hex) {
	return hex.toString();
}

exports.encode = encode;
exports.decode = decode;
});

var index$3 = interopDefault(index$2);
var decode = index$2.decode;
var encode = index$2.encode;

var require$$0 = Object.freeze({
	default: index$3,
	decode: decode,
	encode: encode
});

var index = createCommonjsModule(function (module) {
'use strict';

var encode = interopDefault(require$$0).encode;

function highlight(source, q, tpl, split) {
	if ( tpl === void 0 ) tpl = '<mark>$1</mark>';
	if ( split === void 0 ) split = true;

	var words = split ? q.split(' ') : [q];
	words.forEach(function (word) {
		var regex = new RegExp(("(" + (encode(word)) + ")"), 'ig');
		source = source.replace(regex, tpl);
	});
	return source;
}

module.exports = highlight;
});

var index$1 = interopDefault(index);

return index$1;

})));
//# sourceMappingURL=index.js.map
