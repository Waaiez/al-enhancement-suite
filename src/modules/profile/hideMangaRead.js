const polyfill = require('../../utils/polyfill.js');

const hideMangaReadCSS = `
div.list-stats:nth-child(2) {
	display: none !important;
}
`;

function hideProfileMangaRead() {
	polyfill.GM_addStyle(hideMangaReadCSS);
	let element = document.getElementsByClassName('stats-wrap');
	element[0].classList.add('full-width');
}

exports.hide = hideProfileMangaRead;
