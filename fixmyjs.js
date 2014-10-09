'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');
var jshint = require('jshint').JSHINT;
var jshintCli = require('jshint/src/cli');

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);
	var file = process.argv[3];
	var config = jshintCli.getConfig(file) || {};
	
	if (config.legacy === undefined) {
		config.legacy = opts.legacy;
	}

	try {

		var js;
		if (config.legacy) {
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
