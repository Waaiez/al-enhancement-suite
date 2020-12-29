const polyfill = require('../../utils/polyfill.js');

const hideAnimeWatchedCSS = `
div.list-stats:nth-child(1) {
	display: none !important;
}
`;

function hideProfileAnimeWatched() {
	polyfill.GM_addStyle(hideAnimeWatchedCSS);
	let element = document.getElementsByClassName('stats-wrap');
	element[0].classList.add('full-width');
}

exports.hide = hideProfileAnimeWatched;
