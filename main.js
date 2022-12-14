import React from 'react';
import * as dataEmbed from '@financial-times/dotcom-ui-data-embed';
import myftClient from 'next-myft-client';

import { conceptListMap, sources } from './concept-list-map';
import { BrowsableListsContent } from './BrowsableListsContent.jsx';

// eslint-disable-next-line no-unused-vars
import { h, render } from '@financial-times/x-engine';

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

export async function init({ parentSelector }) {
	const dataEmbedClient = dataEmbed.init({ id: 'browsable-lists-data' });

	const concepts = dataEmbedClient.get('concepts');
	const container = document.querySelector(parentSelector);

	if (container && concepts) {
		const matchedList =
			Array.isArray(concepts) &&
			conceptListMap.find((pair) =>
				concepts.find((concept) => concept === pair.conceptId)
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
					conceptId={matchedList.conceptId}
				/>,
				container
			);
		} catch {
			// Do not render the component if the request failed
		}
	}
}
