'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);

	try {
		var js = fixmyjs.fix(data, opts);
		process.stdout.write(js);
	} catch (err) {
		throw err;
	}
});
