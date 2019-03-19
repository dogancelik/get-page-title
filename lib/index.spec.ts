import assert = require('assert');
import getPageTitle from './index';

getPageTitle('http://example.com/')
	.then(title => {
		assert.strictEqual(title, 'Example Domain', 'Wrong title');
		console.log('OK');
	}, error => {
		console.error(error);
	});