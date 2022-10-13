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
			.then(() => myftClient.getPublicList(listId))
			.catch(() =>
				// Temporarily returning this object while the getPublicList method is not ready
				({
					uuid: listId,
					name: 'Climate Change Reading List',
					items: [
						{
							uuid: 'e4de7a58-1128-42c3-9989-d302d913f2c8',
							title:
								'New York climate week: Carney concedes banks shrinking from green guidelines'
						},
						{
							uuid: '25a0f06a-b939-4a39-badb-103bf9a38361',
							title: 'Why Al Gore is feeling upbeat as COP27 approaches'
						},
						{
							uuid: '31061741-16a1-49fe-a495-6d7dbd3c886a',
							title:
								'Flood-hit Pakistan should suspend debt repayments, says UN policy paper'
						}
					]
				})
			);

		render(<BrowsableListsContent listData={listData} />, container);
	}
}
