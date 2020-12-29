const polyfill = require('../../utils/polyfill.js');

const hideFavouriteStaffCSS = `
div.favourites:nth-child(7) {
	display: none !important;
}
`;

function hideProfileFavouriteStaff() {
	polyfill.GM_addStyle(hideFavouriteStaffCSS);
}

exports.hide = hideProfileFavouriteStaff;
