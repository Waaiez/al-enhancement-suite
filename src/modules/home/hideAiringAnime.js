const polyfill = require('../../utils/polyfill.js');

const hideAiringAnimeCSS = `
div.list-preview-wrap:nth-child(1) {
	display: none !important;
}
`;

function hideHomeAiringAnime() {
	polyfill.GM_addStyle(hideAiringAnimeCSS);
}

exports.hide = hideHomeAiringAnime;
