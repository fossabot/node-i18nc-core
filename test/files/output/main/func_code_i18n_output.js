module.exports = function code()
{
	var word = I18N('中文');
	consol.log(word, I18N('中文2'));
	I18N('中文3', [I18N('中文4'), I18N('中文5')]);

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
							// '中文':
							// '中文2':
							// '中文3':
							// '中文4':
							// '中文5':
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
}
