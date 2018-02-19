module.exports = function code()
{

	function I18NNew(h,f,i){var a=I18NNew;var o=a.__GLOBAL__||(a.__GLOBAL__=typeof window == "object" ? window : typeof global == "object" && global)||{};var d=o.__i18n_lan__;if(!d)return h;if(!f||!f.slice){i=f;f=[]}if(a.__TRANSLATE_LAN__!=d){a.__TRANSLATE_LAN__=d;a.__FILE_KEY__='*';a.__FUNCTION_VERSION__='5';a.__TRANSLATE_JSON__={
					'en-US': {
						'DEFAULTS': {
							// "argv中文":
							// "print信息，":
							// "中午true":
							// "中文0":
							// "中文1":
							// "中文I18N":
							// "中文case":
							// "中文false":
							// "中文if":
							// "中文key":
							// "中文val":
							// "中文val in object":
							// "简体":
							'<e.g.> translate word': null
						},
						'SUBTYPES': {
							'subtype': {
								// "I18N(中文)":
								// "中文I18N subtype":
								'<e.g.> translate word': null
							},
							'subtype2': {
								// "I18N(中文)":
								'<e.g.> translate word': null
							}
						}
					}
				}
	;var n=a.__TRANSLATE_JSON__;var e=a.__TRANSLATE_LAN_JSON__=[];if(d&&d.split){var j=d.split(',');for(var b=0,g=j.length;b<g;b++){var c=n[j[b]];if(c)e.push(c)}}}var e=a.__TRANSLATE_LAN_JSON__,k,l;for(var b=0,g=e.length;b<g;b++){var c=e[b];var m=i&&c.SUBTYPES&&c.SUBTYPES[i];l=m&&m[h];if(l)break;if(!k)k=c.DEFAULTS&&c.DEFAULTS[h]}var q=l||k||h;var p=0;return(''+q).replace(/(%s)|(%\{(.+?)\})/g,function(){var a=f[p++];return a===undefined||a===null?'':a})}


    var result;       // 中文注释
    result = I18NNew('中文0');
    result += I18NNew('中文1')+1;

    var c5 = {
        '中文key in object': I18NNew('中文val in object'),
    };
    c5[I18NNew('中文key')] = I18NNew('中文val');
    result += c5[I18NNew('中文key')];

    function print(msg) {
        return I18NNew('print信息，') + msg;
    }

    // 中文注释
    result += print(I18NNew('argv中文'));     // 中文注释

    function switch_print(name)
    {
        switch(name)
        {
            case I18NNew('中文case'):
                result += name;
                break;
        }
    }

    switch_print(I18NNew('中文case'));

    if (!!I18NNew('中文if'))
    {
        result += true ? I18NNew('中午true') : I18NNew('中文false')
    }

    I18N('中文I18N');
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
					'en-US': {
						'DEFAULTS': {
							// "argv中文":
							// "print信息，":
							// "中午true":
							// "中文0":
							// "中文1":
							// "中文I18N":
							// "中文case":
							// "中文false":
							// "中文if":
							// "中文key":
							// "中文val":
							// "中文val in object":
							// "简体":
							'<e.g.> translate word': null
						},
						'SUBTYPES': {
							'subtype': {
								// "中文I18N subtype":
								'I18N(中文)': 'I18N(zh)'
							},
							'subtype2': {
								// "I18N(中文)":
								'<e.g.> translate word': null
							}
						}
					},
					'zh-TW': {
						'DEFAULTS': {
							// "argv中文":
							// "print信息，":
							// "中午true":
							// "中文0":
							// "中文1":
							// "中文I18N":
							// "中文case":
							// "中文false":
							// "中文if":
							// "中文key":
							// "中文val":
							// "中文val in object":
							'简体': '簡體'
						},
						'SUBTYPES': {
							'subtype': {
								// "I18N(中文)":
								// "中文I18N subtype":
								'<e.g.> translate word': null
							},
							'subtype2': {
								// "I18N(中文)":
								'<e.g.> translate word': null
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