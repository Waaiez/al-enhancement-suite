const polyfill = require('../../utils/polyfill.js');

const hideFavouriteMangaCSS = `
div.favourites:nth-child(5) {
	display: none !important;
}
`;

function hideProfileFavouriteManga() {
	polyfill.GM_addStyle(hideFavouriteMangaCSS);
}

exports.hide = hideProfileFavouriteManga;
