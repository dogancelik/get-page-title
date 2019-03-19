# get-page-title

Get the title of a page.

❗ This package is in development, it is buggy and may break.  
❕ Don't forget to check this README as you upgrade.

## Usage

```ts
// for TypeScript
import getPageTitle from 'get-page-title';

// for JavaScript
const getPageTitle = require('getPageTitle').default;

getPageTitle('http://example.com/').then(title => {
	console.log('Page title is:', title);
});
```

## CLI Usage

```
$ get-page-title http://example.com/
> Example Domain
```
