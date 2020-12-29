const polyfill = require('../../utils/polyfill.js');

const hideFavouriteCharactersCSS = `
div.favourites:nth-child(6) {
	display: none !important;
}
`;

function hideProfileFavouriteCharacters() {
	polyfill.GM_addStyle(hideFavouriteCharactersCSS);
}

exports.hide = hideProfileFavouriteCharacters;
