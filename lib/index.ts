import rp = require('request-promise');
import cheerio = require('cheerio');

export default function getPageTitle(url: string) {
	return rp({
		url: url,
		transform: function (body) {
			let $ = cheerio.load(body),
				title = $('title').first().text().trim();
			return title;
		}
	});
}