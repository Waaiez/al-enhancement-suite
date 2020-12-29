const polyfill = require('../../utils/polyfill.js');

const hideGenreOverviewCSS = `
div.desktop:nth-child(3) {
	display: none !important;
}
`;

function hideProfileGenreOverview() {
	polyfill.GM_addStyle(hideGenreOverviewCSS);
}

exports.hide = hideProfileGenreOverview;
