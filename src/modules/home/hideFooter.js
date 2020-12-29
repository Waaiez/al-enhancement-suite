const polyfill = require('../../utils/polyfill.js');

const hideFooterCSS = `
.footer {
	display: none !important;
}
`;

function hideFooter() {
	polyfill.GM_addStyle(hideFooterCSS);
}

exports.hide = hideFooter;
