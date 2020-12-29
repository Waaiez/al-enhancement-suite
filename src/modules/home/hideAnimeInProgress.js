const polyfill = require('../../utils/polyfill.js');

const hideAnimeInProgressCSS = `
div.list-preview-wrap:nth-child(2) {
	display: none !important;
}
`;

function hideHomeAnimeInProgress() {
	polyfill.GM_addStyle(hideAnimeInProgressCSS);
}

exports.hide = hideHomeAnimeInProgress;
