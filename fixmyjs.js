'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');
var jshint = require('jshint').JSHINT;

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);

	try {
		if (opts.legacy) {
			jshint(data, opts);
			var js = fixmyjs(jshint.data(), data, opts).run();
		} else {
			var js = fixmyjs.fix(data, opts);
		}
		process.stdout.write(js);
	} catch (err) {
		throw err;
	}
});
