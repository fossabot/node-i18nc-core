'use strict';

module.exports = function $handlerName(msg, tpldata)
{
	msg += '';
	if (!tpldata || !tpldata.length || msg.indexOf('%') == -1) return msg;

	var self = $handlerName;

	// K: __FILE_KEY__
	// V: __FUNCTION_VERSION__
	self.K = '$FILE_KEY';
	self.V = '$FUNCTION_VERSION';

	var replace_index = 0;
	return msg.replace(/%s|%\{.+?\}/g, function(all)
	{
		var newVal = tpldata[replace_index++];
		return newVal === undefined ? all : newVal === null ? '' : newVal;
	});
}
