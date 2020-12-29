const polyfill = require('../../utils/polyfill.js');

const hideBioCSS = `
.about {
	display: none !important;
}
`;

function hideProfileBio() {
	polyfill.GM_addStyle(hideBioCSS);
}

exports.hide = hideProfileBio;
