'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');
var jshint = require('jshint').JSHINT;
var jshintCli = require('jshint/src/cli');

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);
	var config = opts.filepath && jshintCli.getConfig(opts.filepath) || {};

	try {

		var js;
		if (opts.legacy) {
			jshint(data, config);
			js = fixmyjs(jshint.data(), data).run();
		} else {
			js = fixmyjs.fix(data, config);
		}
		process.stdout.write(js);
	} catch (err) {
		throw err;
	}
});
