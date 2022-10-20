import React from 'react';
import * as dataEmbed from '@financial-times/dotcom-ui-data-embed';
import myftClient from 'next-myft-client';

import { conceptListMap } from './concept-list-map';
import { BrowsableListsContent } from './BrowsableListsContent.jsx';

// eslint-disable-next-line no-unused-vars
import { h, render } from '@financial-times/x-engine';

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

		const listData = await myftClient
			.init()
			.then(() => myftClient.getPublicList(listId));

		render(<BrowsableListsContent listData={listData} />, container);
	}
}
