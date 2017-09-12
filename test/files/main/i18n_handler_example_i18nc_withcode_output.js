module.exports = I18N;
function I18N(msg, subtype) {
	/**
	 * @param  {String} msg      translate words
	 * @param  {String} subtype  indicates a special treatment
	 *
	 * [Warn] I18N Tool collects direct string args of `I18N` callee.
	 * Variables or operators of args are not supported.
	 * @see https://github.com/Bacra/node-i18nc-core/wiki/I18N_handler
	 */

	var self = I18N;

	var GLOBAL = self.__GLOBAL__ || (self.__GLOBAL__ = typeof window == "object" ? window : typeof global == "object" && global) || {};
	var LAN = GLOBAL.__i18n_lan__;

	if (!LAN) return msg;

	if (self.__TRANSLATE_LAN__ != LAN) {
		self.__TRANSLATE_LAN__ = LAN;
		var __FILE_KEY__ = "i18n_handler_example";
		var __FUNCTION_VERSION__ = "1";

		// Formats @see https://github.com/Bacra/node-i18nc-core/wiki/How-to-modify-translate-data-in-JS-file
		var __TRANSLATE_JSON__ = {
				'en': {
					'DEFAULTS': {
						// "中文 allfile subtype1":
						// "中文 thisfile subtype2":
						'中文0': 'indb <thisfile> db1' || 'in_file zh0',
						'中文1': 'in_file zh1',
						'中文2': 'in_file zh2_db' || '' || 'in_file zh2',
						'中文3_empty': [],
						// "中文4_empty":
						'中文5_empty': [],
						// "中文db ":
						'中文6_empty': 'in_file 4' || 'in_file 2' || 'in_file 1'
					}
				},
				'tw': {
					'DEFAULTS': {
						// "中文1":
						// "中文2":
						// "中文3_empty":
						// "中文4_empty":
						// "中文5_empty":
						// "中文6_empty":
						// "中文db ":
						'中文0': '中文0 in tw'
					}
				}
			};

		var lanArr = self.__TRANSLATE_LAN_JSON__ = [];
		if (LAN && LAN.split) {
			var lanKeys = LAN.split(',');
			for(var i = 0, len = lanKeys.length; i < len; i++) {
				var lanItem = __TRANSLATE_JSON__[lanKeys[i]];
				if (lanItem) lanArr.push(lanItem);
			}
		}
	}

	var lanArr = self.__TRANSLATE_LAN_JSON__,
		resultDefault, resultSubject;
	for(var i = 0, len = lanArr.length; i < len; i++) {
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
var codeJSON = {
	"DEFAULTS": [
		I18N('中文0'),
		I18N('中文1'),
		I18N('中文2'),
		I18N('中文3_empty'),
		I18N('中文4_empty'),
		I18N('中文5_empty'),
		I18N('中文6_empty'),
		I18N('中文db ') + '<allfile>'
	],
	"SUBTYPES": {
		"subtype": [
			I18N('中文0'),
			I18N('中文1'),
			I18N('中文2'),
			I18N('中文3_empty'),
			I18N('中文 allfile subtype1'),
			I18N('中文 thisfile subtype2')
		]
	}
}