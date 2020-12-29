const polyfill = require('../../utils/polyfill.js');

const hideFavouriteStudioCSS = `
div.favourites:nth-child(8) {
	display: none !important;
}
`;

function hideProfileFavouriteStudio() {
	polyfill.GM_addStyle(hideFavouriteStudioCSS);
}

exports.hide = hideProfileFavouriteStudio;
