#!/usr/bin/env node
import getPageTitle from './index';

getPageTitle(process.argv[2]).then(function (title) {
	process.stdout.write(title);
	process.exit(0);
}, function (err) {
	console.error(err);
	process.exit(1);
});