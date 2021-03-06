'use strict';

var debug			= require('debug')('i18nc-core:words_utils');
var emitter			= require('../emitter');

exports.splitValue2lineStrings = splitValue2lineStrings;

function splitValue2lineStrings(value, type, options)
{
	// 正则说明
	// 必须要有非accii之外的字符（比如：中文）
	// 同时包含非html标签的其他字符
	var lineStrings = [];
	var cutwordReg = options.cutwordReg;

	if (cutwordReg instanceof RegExp)
	{
		var matchArr = value.match(cutwordReg);
		var lastIndex = 0, noTranslateWordLen;
		for (var i = 0; cutwordReg.test(value); i++)
		{
			var matchItem = matchArr[i];
			noTranslateWordLen = cutwordReg.lastIndex - lastIndex - matchItem.length;
			if (noTranslateWordLen)
			{
				lineStrings.push(
				{
					translateWord: false,
					ignore: false,
					disconnected: false,
					value: value.substr(lastIndex, noTranslateWordLen)
				});
			}

			lineStrings.push(
			{
				translateWord: true,
				ignore: false,
				disconnected: false,
				value: matchItem
			});

			lastIndex = cutwordReg.lastIndex;
		}

		noTranslateWordLen = value.length - lastIndex;
		if (noTranslateWordLen)
		{
			lineStrings.push(
			{
				translateWord: false,
				ignore: false,
				disconnected: false,
				value: value.substr(lastIndex, noTranslateWordLen)
			});
		}
	}

	if (!lineStrings.length)
	{
		lineStrings.push({translateWord: false, ignore: false, disconnected: false, value: value});
	}

	var emitData =
	{
		type			: type,
		options			: options,
		original		: lineStrings,
		originalString	: value,
		result			: lineStrings,
	};
	emitter.trigger('cutword', emitData);

	lineStrings = emitData.result;
	if (!lineStrings || !lineStrings.length) return;
	// 如果结果全部是不需要翻译的，也忽略
	if (!lineStrings.some(function(item){return item.translateWord && !item.ignore}))
	{
		debug('ignore no translateWord of lineStrings:%o', lineStrings);
		return;
	}

	return lineStrings;
}

exports.getTranslateWordsFromLineStrings = getTranslateWordsFromLineStrings;
function getTranslateWordsFromLineStrings(lineStrings)
{
	var translateWords = [];
	lineStrings.forEach(function(item)
	{
		if (item.translateWord && !item.ignore)
		{
			translateWords.push(item.value);
		}
	});

	return translateWords;
}
