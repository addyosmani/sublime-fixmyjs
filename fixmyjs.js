'use strict';
var stdin = require('get-stdin');
var fixmyjs = require('fixmyjs');

stdin(function (data) {
	var opts = JSON.parse(process.argv[2]);

	try {
		var js = fixmyjs(opts).process(data, {safe: true}).css;
		process.stdout.write(js);
	} catch (err) {
		if (/Unclosed block/.test(err.message)) {
			console.error('Couldn\'t find any valid JavaScript to fix.');
			return;
		}

		if (err.name === 'TypeError') {
			console.error('Invalid JS');
			return
		}

		throw err;
	}
});
