'use strict';

var debug = require('debug')('i18nc-core');
var optionsUtils = require('./lib/options');

exports = module.exports = require('./lib/main');
exports.defaults = optionsUtils.defaults;
exports.version = require('./package.json').version;

// 已经采用标准版的json格式去处理翻译数据
// 所以不用再输出parse的接口
// exports.parse = require('./lib/ast_utils').parse;

require('./lib/emitter').proxy(exports);

exports.plugins = {};
exports.registerPlugin = function(name, handler)
{
	var defaults = optionsUtils.defaults;
	handler(exports, defaults.pluginSettings, defaults.pluginEnabled);
	exports.plugins[name] = handler;
	debug('register plugin:%s', name);
};
