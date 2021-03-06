'use strict';

var fs = require('fs');
var optionsComment = require('./doc-lib/options-comment');
var codeMapTable = require('./doc-lib/codemap-table');
var optionsUtils = require('../../lib/utils/options_utils');

var tpl = fs.readFileSync(__dirname+'/doc-lib/tpl/options.tpl.md').toString();
var content = fs.readFileSync(__dirname+'/../../lib/options.js').toString();

var fileContent = tpl.replace(/\$(\w+)/g, function(all, key)
{
	switch(key)
	{
		case 'OPTIONS_TABLE_DATA':
			return optionsComment(content);

		case 'OPTIONS_LINK_TABLE_DATA':
			return codeMapTable.table_1toN(optionsUtils.LINK_VALUES, '当此配置为', '将强制设置成');

		default:
			return all;
	}
});

fs.writeFileSync(__dirname+'/../../docs/zh-CN/options.md', fileContent);
