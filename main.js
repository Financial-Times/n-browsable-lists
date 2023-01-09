import React from 'react';
import * as dataEmbed from '@financial-times/dotcom-ui-data-embed';
import myftClient from 'next-myft-client';

import { conceptListMap, sources } from './concept-list-map';
import { BrowsableListsContent } from './BrowsableListsContent.jsx';

// eslint-disable-next-line no-unused-vars
import { h, render } from '@financial-times/x-engine';

let viewed = false;
let contentContainer;
let matchedList;

function getHeadingBySource(source) {
	switch (source) {
		case sources.EDITORIAL:
			return 'Curated list by the Financial Times';
		case sources.PROFESSOR:
			return 'Curated list by a university professor';
		default:
			return 'Curated list';
	}
}

function dispatchTrackingEvent(action) {
	document.body.dispatchEvent(
		new CustomEvent('oTracking.event', {
			detail: {
				category: 'browsable-lists',
				action,
				teamName: 'customer-products-us-growth',
				amplitudeExploratory: true,
				listId: matchedList.listId,
				conceptId: matchedList.conceptId
			},
			bubbles: true
		})
	);
}

function addInViewTrackingHandler() {
	const triggerViewEvent = () => {
		if (!viewed) {
			dispatchTrackingEvent('in-view');
			viewed = true;
		}
	};

	const observer = new window.IntersectionObserver(
		function (entries) {
			entries.forEach(function (each) {
				if (each.isIntersecting) {
					triggerViewEvent();
				}
			});
		},
		{ threshold: 0.4 }
	);

	if (contentContainer) {
		observer.observe(contentContainer);
	}
}

function addClickTrackingHandlers() {
	const heading = contentContainer.querySelector('.browsable-lists-title > a');

	if (heading) {
		heading.addEventListener('click', function () {
			dispatchTrackingEvent('click-heading');
		});

		const listArticleLinks = document.querySelectorAll(
			'.browsable-lists-list-item > a'
		);

		listArticleLinks.forEach((link) => {
			link.addEventListener('click', function () {
				dispatchTrackingEvent('click-article');
			});
		});
	}
}

export async function init({ parentSelector }) {
	const dataEmbedClient = dataEmbed.init({ id: 'browsable-lists-data' });

	const { variant, concepts } = dataEmbedClient.getAll();
	const container = document.querySelector(parentSelector);

	if (container && concepts && variant) {
		matchedList =
			Array.isArray(concepts) &&
			conceptListMap.find((pair) =>
				concepts.find(
					(concept) => concept === pair.conceptId && variant === pair.source
				)
			);

		const listId = matchedList?.listId;

		if (!listId) {
			return;
		}

		try {
			const listData = await myftClient
				.init()
				.then(() => myftClient.getPublicList(listId));

			render(
				<BrowsableListsContent
					listData={listData}
					heading={getHeadingBySource(matchedList.source)}
				/>,
				container
			);

			contentContainer = document.querySelector('.browsable-lists');

			dispatchTrackingEvent('component-mount');
			addInViewTrackingHandler();
			addClickTrackingHandlers();
		} catch (err) {
			// Do not render the component if the request failed
		}
	}
}
