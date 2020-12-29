const polyfill = require('../../utils/polyfill.js');

const hideNewAnimeCSS = `
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) {
	display: none !important;
}

.page-content {
	min-height: 87.5vh;
}
`;

function hideNewAnime() {
	polyfill.GM_addStyle(hideNewAnimeCSS);
}

exports.hide = hideNewAnime;
