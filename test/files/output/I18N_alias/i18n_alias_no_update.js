module.exports = function code()
{


	/* eslint-disable */
	function I18NNew(msg, tpldata, subtype)
	{
		var self = I18NNew;
		var data = self.$ || (self.$ = {});
		var LAN = (function(cache)
		{
			if (!cache.global)
			{
				cache.global = (typeof window == 'object' && window)
					|| (typeof global == 'object' && global)
					|| {};
			}
	
			return cache.global.__i18n_lan__;
		})(data);
		if (!tpldata || !tpldata.join)
		{
			subtype = tpldata;
			tpldata = [];
		}

		if (LAN && LAN.split)
		{
			var lanArr, i, len, lanItem;
			if (self.L != LAN)
			{
				self.K = '*';
				self.V = 'cf';
				self.D = {
					'en-US': {
						'DEFAULTS': {
							// 'argv中文':
							// 'print信息，':
							// '中午true':
							// '中文0':
							// '中文1':
							// '中文I18N':
							// '中文case':
							// '中文false':
							// '中文if':
							// '中文key':
							// '中文val':
							// '中文val in object':
							// '简体':
						},
						'SUBTYPES': {
							'subtype': {
								// 'I18N(中文)':
								// '中文I18N subtype':
							},
							'subtype2': {
								// 'I18N(中文)':
							}
						}
					}
				};

				var __TRANSLATE_JSON__ = self.D;
				var lanKeys = LAN.split(',');
				lanArr = self.M = [];
				for(i = 0, len = lanKeys.length; i < len; i++)
				{
					lanItem = __TRANSLATE_JSON__[lanKeys[i]];
					if (lanItem) lanArr.push(lanItem);
				}
				self.L = LAN;
			}

			lanArr = self.M;
			var resultDefault, resultSubject, allsubtypes, alldefaults, subtypeJSON;
			for(i = 0, len = lanArr.length; i < len; i++)
			{
				lanItem = lanArr[i];
				if (subtype)
				{
					allsubtypes = lanItem.SUBTYPES;
					subtypeJSON = allsubtypes && allsubtypes[subtype];
					resultSubject = subtypeJSON && subtypeJSON[msg];
					if (resultSubject) break;
				}
				if (!resultDefault)
				{
					alldefaults = lanItem.DEFAULTS;
					resultDefault = alldefaults && alldefaults[msg];
				}
			}

			if (resultSubject) msg = resultSubject;
			else if (resultDefault) msg = resultDefault;
		}

		msg += '';
		if (!tpldata.length || msg.indexOf('%') == -1) return msg;

		var replace_index = 0;
		return msg.replace(/%s|%\{.+?\}/g, function(all)
		{
			var newVal = tpldata[replace_index++];
			return newVal === undefined ? all : newVal === null ? '' : newVal;
		});
	}
	/* eslint-enable */



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

	if (I18NNew('中文if'))
	{
		result += true ? I18NNew('中午true') : I18NNew('中文false')
	}

	I18N('中文I18N');
	I18N('中文I18N subtype', 'subtype');

	// I18N
	function I18N(msg, tpldata, subtype)
	{
		var self = I18N;
		var data = self.$ || (self.$ = {});
		var LAN = (function(cache)
		{
			if (!cache.global)
			{
				cache.global = (typeof window == 'object' && window)
					|| (typeof global == 'object' && global)
					|| {};
			}
		
			return cache.global.__i18n_lan__;
		})(data);
		if (!tpldata || !tpldata.join)
		{
			subtype = tpldata;
			tpldata = [];
		}
	
		if (LAN && LAN.split)
		{
			var lanArr, i, len, lanItem;
			if (self.L != LAN)
			{
				self.K = '*';
				self.V = 'cf';
				self.D = {
					'en-US': {
						'DEFAULTS': {
							// 'argv中文':
							// 'print信息，':
							// '中午true':
							// '中文0':
							// '中文1':
							// '中文I18N':
							// '中文case':
							// '中文false':
							// '中文if':
							// '中文key':
							// '中文val':
							// '中文val in object':
							// '简体':
						},
						'SUBTYPES': {
							'subtype': {
								// 'I18N(中文)':
								// '中文I18N subtype':
							},
							'subtype2': {
								// 'I18N(中文)':
							}
						}
					}
				};
	
				var __TRANSLATE_JSON__ = self.D;
				var lanKeys = LAN.split(',');
				lanArr = self.M = [];
				for(i = 0, len = lanKeys.length; i < len; i++)
				{
					lanItem = __TRANSLATE_JSON__[lanKeys[i]];
					if (lanItem) lanArr.push(lanItem);
				}
				self.L = LAN;
			}
	
			lanArr = self.M;
			var resultDefault, resultSubject, allsubtypes, alldefaults, subtypeJSON;
			for(i = 0, len = lanArr.length; i < len; i++)
			{
				lanItem = lanArr[i];
				if (subtype)
				{
					allsubtypes = lanItem.SUBTYPES;
					subtypeJSON = allsubtypes && allsubtypes[subtype];
					resultSubject = subtypeJSON && subtypeJSON[msg];
					if (resultSubject) break;
				}
				if (!resultDefault)
				{
					alldefaults = lanItem.DEFAULTS;
					resultDefault = alldefaults && alldefaults[msg];
				}
			}
	
			if (resultSubject) msg = resultSubject;
			else if (resultDefault) msg = resultDefault;
		}
	
		msg += '';
		if (!tpldata.length || msg.indexOf('%') == -1) return msg;
	
		var replace_index = 0;
		return msg.replace(/%s|%\{.+?\}/g, function(all)
		{
			var newVal = tpldata[replace_index++];
			return newVal === undefined ? all : newVal === null ? '' : newVal;
		});
	}

	result += I18N('I18N(中文)', 'subtype');
	result += I18N('I18N(中文)', 'subtype2');
	result += I18N('简体');

	return result;
}
