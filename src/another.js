console.log('another.js loaded');

// requiring in an html file forces a second bundle, which is what introduces the failure of the generated dist/main.hash.js file
// this is because Promise and fetch are not available in IE, even though all my babel env and browser list settings should be correct
const more = require('./more.html');
console.log('more: ', more);