const polyfill = require('../../utils/polyfill.js');

const hideRecentReviewsCSS = `
.recent-reviews {
	display: none !important;
}
`;

function hideHomeRecentReviews() {
	polyfill.GM_addStyle(hideRecentReviewsCSS);
}

exports.hide = hideHomeRecentReviews;
