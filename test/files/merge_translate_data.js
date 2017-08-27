var funcInfo = require('./i18n_handler_example_output.json');

module.exports =
{
	FILE_KEY			: funcInfo.__FILE_KEY__,
	funcTranslateWords	: funcInfo.__TRANSLATE_JSON__,

	dbTranslateWords	: require('../example/translate_words_db.json'),

	// test/example/example_code_output_code.json
	codeTranslateWords:
	{
		DEFAULTS: Object.keys(funcInfo.__TRANSLATE_JSON__.en.DEFAULTS),
		SUBTYPES:
		{
			subtype: Object.keys(funcInfo.__TRANSLATE_JSON__.en.SUBTYPES.subtype)
		}
	},
};
