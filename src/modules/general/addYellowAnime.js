const polyfill = require('../../utils/polyfill.js');

const addYellowAnimeCSS = `
// Review Cards - Home
.review-card .banner[data-src*='/media/anime/'] + .content > .header,
.review-card
	.banner[data-src*='/media/anime/']
	+ .content
	> .header
	+ .summary {
	color: rgb(255,255,51);
}

// Global Feed - Home
.activity-feed .activity-anime_list > .wrap > .list > .details > .status {
	color: rgb(255,255,51);
}

.activity-feed .activity-anime_list > .wrap > .list > .cover[href^='/anime/'] {
	border-bottom-style: solid;
	border-bottom-color: rgb(255,255,51);
	border-bottom-width: 3px;
}

// Trending Anime & Manga - Home
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > .media-preview > .media-preview-card > .cover[href^='/anime/'] {
    border-bottom-style: solid;
	border-bottom-color: rgb(255,255,51);
	border-bottom-width: 3px;
}
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > .media-preview > .media-preview-card > .content {
	color: rgb(255,255,51);
}

// Newly Added Anime - Home
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > .media-preview-card > .cover[href^='/anime/'] {
    border-bottom-style: solid;
	border-bottom-color: rgb(255,255,51);
	border-bottom-width: 3px;
}

div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > .media-preview-card > .content {
	color: rgb(255,255,51);
}

//


.user
	.review-card:hover
	.banner[data-src*='/media/anime/']
	+ .content
	> .header {
	color: rgb(61, 180, 242);
}

.media .relations .cover[href^='/manga/'] + div div {
	color: rgba(var(--color-green));
}
.media .relations .cover[href^='/anime/'] + div div {
	color: rgba(var(--color-blue));
}
.media .relations .cover[href^='/manga/'] {
	border-bottom-style: solid;
	border-bottom-color: rgba(var(--color-green));
	border-bottom-width: 2px;
}
.character-wrap .role-card:hover .title[href^='/anime/'] {
	color: rgb(var(--color-blue)) !important;
}
.character-wrap .role-card .title[href^='/manga/'],
.character-wrap .role-card:hover .title[href^='/manga/'],
.media-roles .media .content:hover[href^='/manga/'] .name {
	color: rgb(var(--color-green)) !important;
}
.media .relations.small .cover[href^='/manga/']::after {
	position: absolute;
	left: 1px;
	bottom: 3px;
	content: '';
	border-style: solid;
	border-color: rgba(var(--color-green));
	border-width: 2px;
}
.media .relations .cover[href^='/anime/'] {
	border-bottom-style: solid;
	border-bottom-color: rgba(var(--color-blue));
	border-bottom-width: 2px;
}
.media .relations .cover div.image-text {
	margin-bottom: 2px !important;
	border-radius: 0px !important;
	padding-bottom: 8px !important;
	padding-top: 8px !important;
	font-weight: 500 !important;
}
.media-embed[data-media-type='manga'] .title {
	color: rgba(var(--color-green));
}
.media-manga .actions .list {
	background: rgba(var(--color-green));
}
.media-manga .sidebar .review.button {
	background: rgba(var(--color-green));
}
.media-manga .container .content .nav .link {
	color: rgba(var(--color-green));
}

.recommendations-wrap
	.recommendation-pair-card
	a[href^='/manga/']:hover
	.title {
	color: rgba(var(--color-green));
}
`;

function addYellowAnime() {
	polyfill.GM_addStyle(addYellowAnimeCSS);
}

exports.add = addYellowAnime;
