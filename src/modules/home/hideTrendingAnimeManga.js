const polyfill = require('../../utils/polyfill.js');

const hideTrendingCSS = `
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) {
	display: none !important;
}
`;

function hideHomeTrending() {
	polyfill.GM_addStyle(hideTrendingCSS);
}

exports.hide = hideHomeTrending;
