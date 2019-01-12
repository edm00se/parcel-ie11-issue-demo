const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const distHtml = path.join(__dirname, '..', 'dist', 'index.html');

/*
 * arbitrary operation to append polyfills for Promise and fetch
 * since the current state of the parcel bundle-loader.js means
 * that I can't polyfill normally in any app with more than one
 * bundle, such as any that requires an html partial
 */
fs.readFile(distHtml, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const $ = cheerio.load(data);
  $('head')
    .append('<script src="https://unpkg.com/es6-promise/dist/es6-promise.auto.min.js"></script>')
    .append('<script src="https://unpkg.com/unfetch/polyfill/index.js"></script>');
  
  fs.writeFile(distHtml, $.html(), 'utf-8', writeErr => {
    if (writeErr) {
      throw writeErr;
    }
  });
});