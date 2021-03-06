'use strict';

var expect = require('expect.js');

describe('#i18n_func_run', function()
{
	describe('#full', function()
	{
		var I18N = require('../files/casefile/i18n_handler/i18n_handler_example');

		describe('#lan:en-US', function()
		{
			beforeEach(function()
			{
				global.__i18n_lan__ = 'en-US';
			});

			afterEach(function()
			{
				delete global.__i18n_lan__;
			});

			it('#no msg', function()
			{
				expect(I18N()).to.be('undefined');
			});

			it('#number', function()
			{
				expect(I18N(11)).to.be('11');
			});

			it('#not match', function()
			{
				expect(I18N('not match')).to.be('not match');
			});

			it('#match default', function()
			{
				expect(I18N('简体')).to.be('simplified');
			});

			it('#match empty', function()
			{
				expect(I18N('空白')).to.be('');
				expect(I18N('无')).to.be('无');
			});

			it('#match subtype', function()
			{
				expect(I18N('简体', 'subtype')).to.be('simplified subtype');
			});

			it('#no has subtype', function()
			{
				expect(I18N('简体', 'not existed subtype')).to.be('simplified');
			});
		});


		describe('#lan:zh-CN', function()
		{
			beforeEach(function()
			{
				global.__i18n_lan__ = 'zh-CN';
			});

			afterEach(function()
			{
				delete global.__i18n_lan__;
			});

			it('#match default', function()
			{
				expect(I18N('简体')).to.be('简体');
			});

			it('#match subtype', function()
			{
				expect(I18N('简体', 'subtype')).to.be('简体');
			});
		});


		describe('#lan:zh-CN,en-US', function()
		{
			beforeEach(function()
			{
				global.__i18n_lan__ = 'zh-CN,en-US';
			});

			afterEach(function()
			{
				delete global.__i18n_lan__;
			});

			it('#match default', function()
			{
				expect(I18N('简体')).to.be('simplified');
			});

			it('#match subtype', function()
			{
				expect(I18N('简体', 'subtype')).to.be('simplified subtype');
			});
		});

		describe('#lan:zh-TW,en-US', function()
		{
			beforeEach(function()
			{
				global.__i18n_lan__ = 'zh-TW,en-US';
			});

			afterEach(function()
			{
				delete global.__i18n_lan__;
			});

			it('#match default', function()
			{
				expect(I18N('简体')).to.be('簡體');
			});

			it('#match subtype', function()
			{
				expect(I18N('简体', 'subtype')).to.be('simplified subtype');
			});
		});

		describe('#tpldata', function()
		{
			describe('#width lan', function()
			{
				beforeEach(function()
				{
					global.__i18n_lan__ = 'en-US';
				});

				afterEach(function()
				{
					delete global.__i18n_lan__;
				});

				it('#key %s', function()
				{
					expect(I18N('美好%s生活', [1])).to.be('美好1生活');
					expect(I18N('美好%s生活', [1,2])).to.be('美好1生活');
					expect(I18N('%s美好%s生活', [1,2])).to.be('1good2 life');
					expect(I18N('%s美好%s生活', [1])).to.be('1good%s life');
					expect(I18N('%s美好%s生活', [1, null])).to.be('1good life');
				});

				it('#key %{}', function()
				{
					expect(I18N('%{中文}词典', ['English'])).to.be('English dictionary');
					expect(I18N('%{{中文}}词典', [1])).to.be('1}词典');
				});
			});

			describe('#widthout lan', function()
			{
				beforeEach(function()
				{
					global.__i18n_lan__ = null;
				});

				afterEach(function()
				{
					delete global.__i18n_lan__;
				});

				it('#key %s', function()
				{
					expect(I18N('美好%s生活', [1])).to.be('美好1生活');
					expect(I18N('美好%s生活', [1,2])).to.be('美好1生活');
					expect(I18N('%s美好%s生活', [1,2])).to.be('1美好2生活');
					expect(I18N('%s美好%s生活', [1])).to.be('1美好%s生活');
					expect(I18N('%s美好%s生活', [1, null])).to.be('1美好生活');
				});

				it('#key %{}', function()
				{
					expect(I18N('%{中文}词典', ['English'])).to.be('English词典');
					expect(I18N('%{{中文}}词典', [1])).to.be('1}词典');
				});
			});
		});
	});



	describe('#simple', function()
	{
		var I18N = require('../files/casefile/i18n_handler/i18n_handler_simple_example');

		describe('#lan:en-US', function()
		{
			beforeEach(function()
			{
				global.__i18n_lan__ = 'en-US';
			});

			afterEach(function()
			{
				delete global.__i18n_lan__;
			});

			it('#no msg', function()
			{
				expect(I18N()).to.be('undefined');
			});

			it('#number', function()
			{
				expect(I18N(11)).to.be('11');
			});

			it('#not match', function()
			{
				expect(I18N('not match')).to.be('not match');
			});

			it('#match default', function()
			{
				expect(I18N('简体')).to.be('简体');
			});

			it('#match empty', function()
			{
				expect(I18N('空白')).to.be('空白');
				expect(I18N('无')).to.be('无');
			});

			it('#match subtype', function()
			{
				expect(I18N('简体', 'subtype')).to.be('简体');
			});

			it('#no has subtype', function()
			{
				expect(I18N('简体', 'not existed subtype')).to.be('简体');
			});
		});

		describe('#tpldata', function()
		{
			describe('#width lan', function()
			{
				beforeEach(function()
				{
					global.__i18n_lan__ = 'en-US';
				});

				afterEach(function()
				{
					delete global.__i18n_lan__;
				});

				it('#key %s', function()
				{
					expect(I18N('美好%s生活', [1])).to.be('美好1生活');
					expect(I18N('美好%s生活', [1,2])).to.be('美好1生活');
					expect(I18N('%s美好%s生活', [1,2])).to.be('1美好2生活');
					expect(I18N('%s美好%s生活', [1])).to.be('1美好%s生活');
					expect(I18N('%s美好%s生活', [1, null])).to.be('1美好生活');
				});

				it('#key %{}', function()
				{
					expect(I18N('%{中文}词典', ['English'])).to.be('English词典');
					expect(I18N('%{{中文}}词典', [1])).to.be('1}词典');
				});
			});

			describe('#widthout lan', function()
			{
				beforeEach(function()
				{
					global.__i18n_lan__ = null;
				});

				afterEach(function()
				{
					delete global.__i18n_lan__;
				});

				it('#key %s', function()
				{
					expect(I18N('美好%s生活', [1])).to.be('美好1生活');
					expect(I18N('美好%s生活', [1,2])).to.be('美好1生活');
					expect(I18N('%s美好%s生活', [1,2])).to.be('1美好2生活');
					expect(I18N('%s美好%s生活', [1])).to.be('1美好%s生活');
					expect(I18N('%s美好%s生活', [1, null])).to.be('1美好生活');
				});

				it('#key %{}', function()
				{
					expect(I18N('%{中文}词典', ['English'])).to.be('English词典');
					expect(I18N('%{{中文}}词典', [1])).to.be('1}词典');
				});
			});

		});

		describe('#dist', function()
		{
			var I18N = require('../../dist/i18nc-handler').I18N;
			describe('#base', function()
			{
				it('#no msg', function()
				{
					expect(I18N()).to.be('undefined');
				});

				it('#number', function()
				{
					expect(I18N(11)).to.be('11');
				});

				it('#match subtype', function()
				{
					expect(I18N('简体', 'subtype')).to.be('简体');
				});
			});

			describe('#tpldata', function()
			{
				it('#key %s', function()
				{
					expect(I18N('美好%s生活', [1])).to.be('美好1生活');
					expect(I18N('美好%s生活', [1,2])).to.be('美好1生活');
					expect(I18N('%s美好%s生活', [1,2])).to.be('1美好2生活');
					expect(I18N('%s美好%s生活', [1])).to.be('1美好%s生活');
					expect(I18N('%s美好%s生活', [1, null])).to.be('1美好生活');
				});

				it('#key %{}', function()
				{
					expect(I18N('%{中文}词典', ['English'])).to.be('English词典');
					expect(I18N('%{{中文}}词典', [1])).to.be('1}词典');
				});
			});
		});
	});


	describe('#global', function()
	{
		var I18N = require('../files/casefile/i18n_handler/i18n_handler_global_example');

		it('#base', function()
		{
			I18N.topI18N = function(msg, args, translateJSON, version, cache, I18N)
			{
				expect(translateJSON).to.be.an('object');
				expect(I18N).to.be.an('function');
				return 'ret:'+msg;
			}

			expect(I18N('中文')).to.be('ret:中文');
		});
	});

	describe('#topI18N', function()
	{
		var translateJSON = require('../prev_test_files').TRANSLATE_JSON;
		var topI18N = require('../../dist/top-i18nc').topI18N;
		var I18N = require('../files/casefile/i18n_handler/i18n_handler_example');

		function runTest(msg)
		{
			var str1 = topI18N(msg, arguments, translateJSON, '1.g', {c:1}, function(){});
			var str2 = I18N.apply(null, arguments);

			expect(str1).to.be(str2);
		}

		beforeEach(function()
		{
			global.__i18n_lan__ = 'en-US';
			global.$I18N_getLanguageCode = function(cache)
			{
				expect(cache).to.be.eql({c:1});
				return global.__i18n_lan__;
			};
		});

		afterEach(function()
		{
			delete global.__i18n_lan__;
			delete global.$I18N_getLanguageCode;
		});

		it('#base', function()
		{
			runTest();
			runTest(111);
			runTest('中文');
			runTest('%{中文}词典', ['English']);
			runTest('简体', 'subtype');
		});
	});

});
