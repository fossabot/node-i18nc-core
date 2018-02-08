module.exports = function code()
{
    var result;       // 中文注释
    result = I18N('中文0');
    result += I18N('中文1')+1;
    result += "123"+2;
    result += I18N('中文 only db');
    result += I18N('中文 only file');
    result += I18N('2中文4中文5');     // 中文注释
    result += '<span>' + I18N('中文span') + '</span>' + I18N('中文span2') + '<span>' + I18N('中文span3')+0;

    var c5 = {
        d1: I18N('中文1'),
        d2: [I18N('中文2'), I18N('中文3')],
        d3: function(){},
        '中文key in object': I18N('中文val in object'),
    }

    c5[I18N('中文key')] = I18N('中文val');


    result += c5.d1;
    result += c5.d2;
    result += c5[I18N('中文key')];

    function print(msg)
    {
        return I18N('再来一句，') + msg;
    }

    // 中文注释
    result += print(I18N('print中文'));     // 中文注释

    function switch_print(name)
    {
        switch(name)
        {
            case I18N('中文case'):
            case 11+I18N('中文case+数字'):
            case c5[I18N('中文key')]+I18N('中文case+objkey'):
            case print(I18N('run 中文'))+I18N('中文case+handler'):
                result += name;
                break;
        }
    }

    switch_print(I18N('中文case'));
    switch_print(11+I18N('中文case+数字'));
    switch_print(c5[I18N('中文key')]+I18N('中文case+objkey'));
    switch_print(print(I18N('run 中文'))+I18N('中文case+handler'));


    if (!!I18N('中文if'))
    {
        result += true ? I18N('中午true') : I18N('中文false')
    }

    I18N('中文I18N');
    I18N('中文I18N subtype', 'subtype');
    I18N('中文I18N subtype', 'subtype');

    // I18N
	function I18N(msg, subtype)
	{
		var LAN = 'zh';
		if (!LAN) return msg;

		var self = I18N;
		if (self.__TRANSLATE_LAN__ != LAN)
		{
			self.__TRANSLATE_LAN__ = LAN;
			self.__FILE_KEY__ = "func_code_file_key";
			self.__FUNCTION_VERSION__ = "5";
			self.__TRANSLATE_JSON__ =
				{
					"en-US":
					{
						"DEFAULTS":
						{
							'中文 only file': '中文只在文件'
						},
						"SUBTYPES":
						{
							'subtype':
							{
								'I18N(中文)': 'I18N(zh)'
							}
						}
					},
					"zh-TW":
					{
						"DEFAULTS":
						{
							'简体 not exist': '簡體不存在',
							'简体': '簡體',
						},
						"SUBTYPES":
						{
							'subtype':
							{
								'简体++': '簡體++',
							}
						}
					}
				};

			var __TRANSLATE_JSON__ = self.__TRANSLATE_JSON__;
			var lanArr = self.__TRANSLATE_LAN_JSON__ = [];
			if (LAN && LAN.split)
			{
				var lanKeys = LAN.split(',');
				for(var i = 0, len = lanKeys.length; i < len; i++)
				{
					var lanItem = __TRANSLATE_JSON__[lanKeys[i]];
					if (lanItem) lanArr.push(lanItem);
				}
			}
		}

		var lanArr = self.__TRANSLATE_LAN_JSON__,
			resultDefault, resultSubject;
		for(var i = 0, len = lanArr.length; i < len; i++)
		{
			var lanItem = lanArr[i];
			var subtypeJSON = subtype && lanItem.SUBTYPES && lanItem.SUBTYPES[subtype];
			resultSubject = subtypeJSON && subtypeJSON[msg];
			if (resultSubject) break;
			if (!resultDefault)
				resultDefault = lanItem.DEFAULTS && lanItem.DEFAULTS[msg];
		}

		var result = resultSubject || resultDefault || msg;
		return typeof result == 'string' ? result : ''+result;
	}

    result += I18N('I18N(中文)', 'subtype');
    result += I18N('I18N(中文)', 'subtype2');
    result += I18N('简体');

    return result;
}