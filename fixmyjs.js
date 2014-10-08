'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');
var jshint = require('jshint').JSHINT;
var jshintCli = require('jshint/src/cli');
var merge = require('merge');

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);
	var file = process.argv[3];

	try {
		var config = jshintCli.getConfig(file);
		if (config) {
			opts = merge(true, opts, config);
		}

		var js;
		if (opts.legacy) {
			jshint(data, opts);
			js = fixmyjs(jshint.data(), data, opts).run();
		} else {
			js = fixmyjs.fix(data, opts);
		}
		process.stdout.write(js);
	} catch (err) {
		throw err;
	}
});
