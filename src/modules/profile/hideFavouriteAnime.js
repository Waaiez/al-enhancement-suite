const polyfill = require('../../utils/polyfill.js');

const hideFavouriteAnimeCSS = `
div.favourites:nth-child(4) {
	display: none !important;
}
`;

function hideProfileFavouriteAnime() {
	polyfill.GM_addStyle(hideFavouriteAnimeCSS);
}

exports.hide = hideProfileFavouriteAnime;
