const polyfill = require('../../utils/polyfill.js');

const removeGlobalActivityCSS = `
.activity-feed-wrap,
.sense-wrap,
.sense {
	display: none !important;
}

.home {
	grid-template-columns: inherit !important;
}

.home .review-card .summary {
	width: 96% !important;
}

.home div .sense {
	min-height: 0 !important;
}

.home .review-card.no-banner:before {
	content: '';
	height: 80px;
	color: rgba(0, 0, 0, 0);
	background: linear-gradient(
		rgb(var(--color-foreground)),
		rgba(var(--color-text), 0.1)
	);
}

.site-theme-contrast .home .review-card.no-banner:before,
.site-theme-dark .home .review-card.no-banner:before {
	background: linear-gradient(
		rgb(var(--color-foreground)),
		rgb(var(--color-foreground-blue))
	);
}

.review-card.no-banner .content {
	justify-content: start !important;
}

.home .review-card.no-banner:hover:before {
	content: 'Read Full Preview';
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(var(--color-overlay), 0.8) !important;
	color: rgb(var(--color-text-bright));
	height: 80px;
	transition: background 0.6s, color 0.2s;
	font-size: 1.4rem;
	font-weight: 500;
}

.site-theme-dark .home .review-card.no-banner:hover:before {
	background: rgba(255, 255, 255, 0.1) !important;
}

@media screen and (min-width: 1040px) {
	.home
		> div:not(.activity-feed-wrap)
		> div:not(.list-previews):not(.recent-threads):not(.recent-reviews)
		> div
		> .media-preview {
		grid-gap: 20px 0px !important;
		grid-template-columns: repeat(auto-fill, 425px) !important;
	}

	.home
		> div:not(.activity-feed-wrap)
		> div:not(.list-previews):not(.recent-threads):not(.recent-reviews)
		> div
		> .media-preview
		.small
		.content {
		width: 325px !important;
		z-index: 1 !important;
		opacity: 1 !important;
	}

	.home
		> div:not(.activity-feed-wrap)
		> div:not(.list-previews):not(.recent-threads):not(.recent-reviews)
		> div
		> .media-preview
		.media-preview-card {
		margin-left: 2.75% !important;
	}

	.home
		> div:not(.activity-feed-wrap)
		> div:not(.list-previews):not(.recent-threads):not(.recent-reviews)
		> div
		> .media-preview
		a.title {
		display: block !important;
		height: 100% !important;
	}
}

@media screen and (max-width: 1540px) {
	.home
		> div:not(.activity-feed-wrap)
		> div:not(.list-previews):not(.recent-threads):not(.recent-reviews)
		> div
		> .media-preview
		.media-preview-card {
		margin-left: 0 !important;
	}
}
`;

let run = false;

function expandAnime() {
	const sizeToggle = document.getElementsByClassName('size-toggle');
	if (sizeToggle.length > 0 && run == false) {
		let expand = sizeToggle[0];
		if (expand.attributes['data-icon'].value == 'expand') {
			triggerEvent(expand, 'click');
			console.log('ae: clicked');
			run = true;
		}
	}
}

function triggerEvent(element, event) {
	let clickEvent = new Event(event);
	element.dispatchEvent(clickEvent);
}

function removeHomeGlobalActivity() {
	polyfill.GM_addStyle(removeGlobalActivityCSS);

	setInterval(() => {
		expandAnime();
	}, 5000);
}

exports.hide = removeHomeGlobalActivity;
